type Props = {}

export default function ContactPage({}: Props) {
  return (
    <div className="w-[1050px] h-[1156px] flex-col justify-start items-start gap-16 inline-flex">
      <div className="self-stretch h-[117px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch h-[117px] flex-col justify-start items-start gap-4 flex">
          <div className="py-2.5 justify-start items-center gap-[15px] inline-flex">
            <div className="text-center text-slate-800 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Accueil
            </div>
            <div className="w-[7px] h-3 relative" />
            <div className="text-center text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              À propos
            </div>
          </div>
          <div className="text-center text-neutral-700 text-[40px] font-bold font-['Montserrat'] leading-[57px] tracking-tight">
            Contactez-nous
          </div>
        </div>
      </div>
      <div className="self-stretch h-[975px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch h-28 flex-col justify-start items-start gap-7 flex">
          <div className="text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
            Nous sommes là pour vous !
          </div>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="h-[52px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                Vous avez des questions sur l’agriculture durable, nos formations, ou
                comment rejoindre notre communauté ? N’hésitez pas à nous contacter.
                Nous sommes là pour vous aider à naviguer dans le monde complexe de
                l’agriculture moderne.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[513px] flex-col justify-start items-start gap-7 flex">
          <div className="self-stretch text-center text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
            Formulaire de contact
          </div>
          <div className="self-stretch h-[453px] flex-col justify-start items-center gap-4 flex">
            <div className="w-[450px] h-[125px] relative">
              <div className="left-0 top-0 absolute text-slate-800 text-lg font-normal font-['Montserrat'] leading-normal tracking-tight">
                Adresse e-mail *
              </div>
              <div className="w-[450px] h-[50px] left-[2px] top-[41px] absolute justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch pl-[21px] pr-[276px] py-[11px] bg-stone-50 rounded-[5px] border border-neutral-200 justify-start items-center inline-flex">
                  <div className="text-neutral-500 text-sm font-normal font-['Montserrat'] leading-7 tracking-tight">
                    lea.zozor@gmail.com
                  </div>
                </div>
              </div>
              <div className="left-[2px] top-[97px] absolute text-neutral-500 text-xs font-normal font-['Montserrat'] leading-7 tracking-tight">
                Nous ne partagerons jamais votre e-mail avec quelqu'un d’autre{' '}
              </div>
            </div>
            <div className="w-[450px] h-[252px] pb-[34px] flex-col justify-start items-start gap-4 flex">
              <div className="text-slate-800 text-lg font-normal font-['Montserrat'] leading-normal tracking-tight">
                Message *
              </div>
              <div className="w-[450px] h-[178px] pl-[21px] pr-[312px] pt-[15px] pb-[135px] bg-stone-50 rounded-[5px] border border-neutral-200 justify-start items-center inline-flex">
                <div className="text-neutral-500 text-sm font-normal font-['Montserrat'] leading-7 tracking-tight">
                  Votre message...
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-sky-500 rounded-[37px] flex-col justify-start items-center gap-2.5 flex">
              <div className="text-center text-white text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Envoyer
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[286px] flex-col justify-start items-start gap-7 flex">
          <div className="text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
            Comment nous joindre autrement
          </div>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
              Par téléphone
            </div>
            <div className="h-[26px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                Vous pouvez également nous appeler au +596 596 51 27 34 du lundi au
                vendredi, de 8h à 17h.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="text-neutral-700 text-2xl font-medium font-['Montserrat'] leading-loose tracking-tight">
              Par voie postale
            </div>
            <div className="h-[52px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                EPLEFPA DE CROIX-RIVAIL
                <br />
                Bois Rouge 915, Chemin Tolobe, 97224 Ducos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
