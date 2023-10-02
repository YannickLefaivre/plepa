'use client'

import React, { ChangeEvent } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Formik, Form } from 'formik'
import SearchField from '@/components/molecules/client/SearchField'
import * as Yup from 'yup'
import { siteConfig } from '@/config/site'

type Props = {}

/**
 * @credits Formik
 * @see https://formik.org/docs/overview#reducing-boilerplate
 * @returns {React.JSX.Element} a SearchForm component.
 */
function SearchForm({}: Props): React.JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  /**
   * @author Vercel
   * @see
   */
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.forEach((queryParam) => params.delete(queryParam))
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const customHandleChange = (
    changeEvent: ChangeEvent<HTMLInputElement>,
    formikHandleChange: {
      (e: React.ChangeEvent<any>): void
      <T = string | React.ChangeEvent<any>>(
        field: T
      ): T extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void
    },
    formikSubmitForm: (() => Promise<void>) & (() => Promise<any>)
  ) => {
    formikHandleChange(changeEvent)
    formikSubmitForm()
  }

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={() =>
        Yup.object({
          search: Yup.string().notRequired(),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)

        router.replace(
          '/posts' +
            (values.search ? '?' + createQueryString('search', values.search) : '')
        )
      }}>
      {({ handleChange, submitForm }) => (
        <Form>
          <SearchField
            id="search"
            name="search"
            type="search"
            label="search"
            onChange={(changeEvent: ChangeEvent<HTMLInputElement>) =>
              customHandleChange(changeEvent, handleChange, submitForm)
            }
          />
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
