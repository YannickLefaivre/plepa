'use client'

import { Option, SelectState } from '../data/types'
import { useState } from 'react'

/**
 * @module useSelect
 */

/**
 * @typedef {GroupedOption[]} Option
 */

/**
 * @typedef {Object} SelectState
 * @property {Option} selectedOption
 * @property {Function} setSelectedOption
 */

/**
 * Manages the state of the select value.
 *
 * @function
 *
 * @param {Option[]} options
 * @param {Number} [defaultSelectionIndex=0]
 */
const useSelect = (options: readonly Option[], defaultSelectionIndex: number = 0): SelectState => {
  let defaultSelection = null

  if (options !== null) {
    if (options[defaultSelectionIndex] === undefined) {
      throw new RangeError(
        'the array of options you passed as argument has no value to the index you specified.'
      )
    }

    defaultSelection = options[defaultSelectionIndex]
  }

  const [selectedOption, setSelectedOption] = useState(defaultSelection)

  return {
    selectedOption,
    setSelectedOption,
  }
}

export { useSelect }
