'use client'
import React, { CSSProperties } from 'react'

import { GroupedOption, Option } from '@/components/molecules/Select/data/types'
import Select, { StylesConfig } from 'react-select'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}
const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles: StylesConfig<GroupedOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? color
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? data.color : color) : undefined,
      },
    }
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  menu: (styles) => ({
    ...styles,
    zIndex: 100,
  }),
}

const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

export default function CustomSelect({
  inputId,
  options,
  defaultValue,
  value,
  handleChange
}: {
  inputId: string
  options: object[],
  defaultValue: Option
  value?: any
  handleChange?: any
}): JSX.Element {
  return (
    <Select
      inputId={inputId}
      defaultValue={defaultValue}
      value={value}
      isSearchable={false}
      onChange={handleChange}
      options={options}
      styles={colourStyles}
      formatGroupLabel={formatGroupLabel}
    />
  )
}
