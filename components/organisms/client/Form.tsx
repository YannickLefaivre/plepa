'use client'

import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { FormField } from '@/components/molecules/client/FormField'
import { useSelect } from '@/components/molecules/Select'
import {
  categoryOptions,
  groupedOptions,
} from '@/components/molecules/Select/data/options'
import CustomSelect from '@/components/molecules/client/Select'
import './Form/style.css'
import { Option, SelectState } from '@/components/molecules/Select/data/types'

const Form = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const categories = useSelect(categoryOptions)

  if (searchParams !== null) {
    groupedOptions.forEach((groupedOption) => {
      if (groupedOption.label === searchParams.get('category')) {
        groupedOption.options.forEach((option) => (option.isDisabled = false))
      } else {
        groupedOption.options.forEach((option) => (option.isDisabled = true))
      }
    })
  }
  const findAssociatedGroupedOption = () => {
    const AssociatedGroup = groupedOptions.find((group) => {
      if (group.label === categories.selectedOption?.value) {
        return true
      }
    })

    return AssociatedGroup ? AssociatedGroup?.options : groupedOptions[0].options
  }
  const subCategories = useSelect(findAssociatedGroupedOption())

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  /**
   * @author Vercel
   * @see
   */
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      if (name === 'category') {
        params.delete('subCategory')
      }
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleChange = (
    option: Option,
    action,
    filterType: string,
    selectState: SelectState
  ) => {
    selectState.setSelectedOption(option)

    if (filterType === 'category') {
      subCategories.setSelectedOption(findAssociatedGroupedOption()[0])
    }

    router.replace(
      pathname +
        (option.value ? '?' + createQueryString(filterType, option.value) : '')
    )
  }

  return (
    <form
      method="GET"
      action="/posts"
      id="form-filter"
      className="pr-[3px] pb-0.5 justify-center items-center flex"
      noValidate>
      <FormField label="Filtrer par :" labelFor="filter-by">
        <CustomSelect
          inputId="filter-by"
          defaultValue={categoryOptions[0]}
          value={categories.selectedOption}
          handleChange={(value, action) =>
            handleChange(value, action, 'category', categories)
          }
          options={categoryOptions}
        />
        <CustomSelect
          inputId="filter-by"
          defaultValue={findAssociatedGroupedOption()[0]}
          value={subCategories.selectedOption}
          handleChange={(value, action) =>
            handleChange(value, action, 'subCategory', subCategories)
          }
          options={groupedOptions}
        />
      </FormField>
    </form>
  )
}

export { Form }
