type Props = {}

export default function WebsiteMapPage({}: Props) {
  return (
    <div className="w-[1050px] h-[1408px] justify-start items-start gap-16 inline-flex">
      <div className="flex-col justify-start items-start gap-16 inline-flex">
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          Accueil
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          À propos
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
            Articles
          </div>
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="text-center text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
                Encourager
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="text-center text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
                  Concours de podcast 2023
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="text-center text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
                Mobiliser
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="text-center text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
                  Article 1
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="text-center text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
                Développer
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="text-center text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
                  Article 2
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 flex">
              <div className="text-center text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
                Développer
              </div>
              <div className="justify-start items-start gap-8 inline-flex">
                <div className="text-center text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
                  Article 3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          Contact
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          Plan du site
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          Mentions légales
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          Confidentialité
        </div>
        <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
          CGU
        </div>
      </div>
    </div>
  )
}
