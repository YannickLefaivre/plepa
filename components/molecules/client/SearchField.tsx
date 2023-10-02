'use client'

import React from 'react'
import { useField } from 'formik'
import { Input } from '@nextui-org/input'
import { SearchIcon } from '@/components/atoms/client/icons'

// interface SearchFieldValues {
//   name: string,
//   onBlur: () => void,
//   onChange: (event: React.ChangeEvent<any>) => void,
//   value: string
// }

function SearchField(props) {
  const [field, meta, helpers] = useField(props.name)

  return (
    <>
      <Input
        aria-label="Rechercher"
        classNames={{
          inputWrapper: 'bg-default-100',
          input: 'text-sm',
          label: 'sr-only',
        }}
        // endContent={
        //   <Kbd className="hidden lg:inline-block" keys={['ctrl']}>
        //     K
        //   </Kbd>
        // }
        labelPlacement="outside"
        placeholder="Rechercher..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <p className="text-danger">{meta.error}</p> : null}
    </>
  )
}

export default SearchField
