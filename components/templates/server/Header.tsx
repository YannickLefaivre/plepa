import React from 'react'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import PageHeading from '@/components/molecules/PageHeading'
import { Form } from '@/components/organisms/client/Form'

type Props = {}

export default function Header({}: Props) {
  const previousPagesLink = [{ href: '/', label: 'Accueil' }]

  return (
    <header className="w-full h-auto py-[30px] flex-col justify-start items-start gap-[30px] inline-flex">
      <Breadcrumb
        previousPagesLink={previousPagesLink}
        currentPageTitle="Articles"
      />
      <PageHeading
        title="Nos articles"
        subtitle={
          <p>
            Les articles suggérés ne vous intéressent pas ? Pas de problème. <br />
            Ici, vous pourrez rechercher les articles qui vous convient.
          </p>
        }
      />
      <Form />
      {/* <div className="pr-[3px] pb-0.5 justify-center items-center flex">
            <div className="self-stretch px-[23px] py-4 bg-stone-50 border border-neutral-200 justify-start items-center gap-6 inline-flex">
              <select
                id="form-select-category"
                name="form-select-category"
                className="text-slate-800 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                {postClassification.map((classification) => (
                  <option
                    key={`categories-select-${classification.category}`}
                    label={`${classification.category}`}>
                    {classification.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pr-[3px] pb-0.5 justify-center items-center flex">
            <div className="self-stretch px-[23px] py-4 bg-stone-50 border border-neutral-200 justify-start items-center gap-6 inline-flex">
              <select
                id="form-select-category"
                name="form-select-category"
                className="text-slate-800 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight"
                onChange={handleChange}>
                <option value="Toutes les sous-catégories" selected>
                  Toutes les sous-catégories
                </option>
                {postClassification.map((classification) => (
                  <optgroup
                    key={`subcategories-select-${classification.category}`}
                    label={`${classification.category}`}>
                    {classification.subCategories.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div> */}
    </header>
  )
}
