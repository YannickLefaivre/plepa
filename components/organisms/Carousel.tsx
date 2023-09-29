'use client'

import { useState } from 'react'
import Error from 'next/error'
import Image from 'next/image'
import { Image as NextUIImage } from '@nextui-org/image'
import { Link as NextUILink } from '@nextui-org/link'

type Props = {
  imageSourceList: Array<string>
}

/**
 * Display a non-automatic carousel with navigation buttons.
 *
 * @param {Object} [Props] - The function component Props.
 * @param {string[]} [Props.imageSourceList=[""]] - List of images URL.
 * @returns {JSX.Element} The Carousel component.
 */
function Carousel({ imageSourceList }: Props): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (imageSourceList.length === 0 || imageSourceList.length < 4) {
    return <Error statusCode={500} />
  }

  return (
    <div id="carousel" className="relative w-full h-[482px] mb-3">
      {imageSourceList ? (
        <NextUIImage
          as={Image}
          width={1043}
          height={482}
          src={`${imageSourceList[currentIndex]}`}
          alt=""
          removeWrapper
          className="w-full h-[482px] absolute left-0 top-0 mb-16 object-cover object-center bg-white rounded-[5px] border border-neutral-200"
        />
      ) : (
        <div className="bg-gray-500"></div>
      )}
      <ol className="absolute left-[45%] bottom-4 z-10 w-fit flex flex-row gap-x-4">
        <li className="w-4 h-4">
          <NextUILink
            href="#"
            className={`w-full h-full rounded-full scro ${
              currentIndex === 0 ? 'bg-green-500' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(0)}></NextUILink>
        </li>
        <li className="w-4 h-4">
          <NextUILink
            href="#"
            className={`w-full h-full rounded-full ${
              currentIndex === 1 ? 'bg-green-500' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(1)}></NextUILink>
        </li>
        <li className="w-4 h-4">
          <NextUILink
            href="#"
            className={`w-full h-full  rounded-full ${
              currentIndex === 2 ? 'bg-green-500' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(2)}></NextUILink>
        </li>
        <li className="w-4 h-4">
          <NextUILink
            href="#"
            className={`w-full h-full rounded-full ${
              currentIndex === 3 ? 'bg-green-500' : 'bg-white'
            }`}
            onClick={() => setCurrentIndex(3)}></NextUILink>
        </li>
      </ol>
    </div>
  )
}

export { Carousel }
