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
  let defaultCategoryIndex = 0
  let defaultSubCategoryIndex = 0

  if (searchParams !== null) {
    groupedOptions.forEach((groupedOption) => {
      if (groupedOption.label === searchParams.get('category')) {
        groupedOption.options.forEach((option) => (option.isDisabled = false))
      } else {
        groupedOption.options.forEach((option) => (option.isDisabled = true))
      }
    })

    defaultCategoryIndex = categoryOptions.findIndex(
      (option) => option.value === searchParams.get('category')
    )
    defaultSubCategoryIndex = groupedOptions.findIndex(
      (group) => group.label === searchParams.get('category')
    )
    if (defaultCategoryIndex === -1) {
      defaultCategoryIndex = 0
    }
    if (defaultSubCategoryIndex === -1) {
      defaultSubCategoryIndex = 0
    }
  }

  const categories = useSelect(categoryOptions, defaultCategoryIndex)
  const subCategories = useSelect(groupedOptions[defaultSubCategoryIndex].options)

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
      subCategories.setSelectedOption(
        groupedOptions.find((group) => group.label === option.label)?.options[0]
      )
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
          defaultValue={groupedOptions[0].options[0]}
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
