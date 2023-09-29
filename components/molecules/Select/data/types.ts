import { Dispatch, SetStateAction } from 'react'

export interface Option {
  readonly value: string
  readonly label: string
  isDisabled: boolean
}

export interface GroupedOption {
  readonly label: string
  readonly options: Array<Option>
}

export interface SelectState {
  selectedOption: Option | null
  setSelectedOption: Dispatch<SetStateAction<Option | null>>
}

// export interface ColourOption {
//   readonly value: string
//   readonly label: string
//   readonly color: string
//   readonly isFixed?: boolean
//   readonly isDisabled?: boolean
// }

// export interface FlavourOption {
//   readonly value: string
//   readonly label: string
//   readonly rating: string
// }

// export interface StateOption {
//   readonly value: string
//   readonly label: string
// }
