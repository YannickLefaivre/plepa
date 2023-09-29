// import ReactMarkdown from 'react-markdown'
// import { getPostData } from '@/lib/posts'
import { BreadcrumbSeparator } from '@/components/atoms/client/icons'

type Props = {}

export default async function AboutPage({}: Props) {
  // const { frontMatter, postContent } = await getPostData('about')

  return (
    <article className="w-full h-auto flex flex-col gap-16">
      <header className="self-stretch h-[623px] flex-col justify-start items-start gap-16 flex">
        <div className="w-full h-[442px] bg-white rounded-[5px] border border-neutral-200 justify-center items-center inline-flex">
          <img
            src="/images/about/1n7q2da0zc91sl.webp"
            className="w-full h-[442px] relative flex-col justify-start items-start flex"></img>
        </div>
        <div className="self-stretch h-[117px] flex-col justify-start items-start gap-4 flex">
          <div className="py-2.5 justify-start items-center gap-[15px] inline-flex">
            <a
              href="/"
              className="text-center text-slate-800 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
              Accueil
            </a>
            <div className="w-[7px] h-3 relative">
              <BreadcrumbSeparator />
            </div>
            <p className="text-center text-neutral-500 text-sm font-semibold font-['Mulish'] leading-normal tracking-tight">
              À propos
            </p>
          </div>
          <h1 className="text-center text-neutral-700 text-[40px] font-bold font-['Philosopher'] leading-[57px] tracking-tight">À propos</h1>
        </div>
      </header>
      <div className="self-stretch h-auto flex-col justify-start items-start gap-8 flex">
        {/* <ReactMarkdown className="prose prose-lg max-w-prose lg:max-w-none prose-headings:font-['Philosopher'] prose-p:font-['Mulish'] prose-li:font-['Mulish']">
          {postContent}
        </ReactMarkdown> */}
        <section className="self-stretch w-full h-[318px] flex-col justify-start items-start gap-7 flex">
          <h2 className="text-neutral-700 text-2xl font-bold font-['Philosopher'] leading-loose tracking-tight">
            Qui sommes-nous ?
          </h2>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="h-[258px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch">
                <p className="text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                  L’EPLEFPA de Croix-Rivail est un Établissement Public Local
                  d'Enseignement et de Formation Professionnelle Agricole qui
                  regroupe 5 centres avec chacun leurs spécificités :
                  <br />
                  <ul>
                    <li>
                      Le{' '}
                      <span className="font-bold">
                        Lycée d'Enseignement Général et Technologique Agricole
                        (LEGTA)
                      </span>{' '}
                      siège de l'EPLEFPA , dispense des formations initiales
                      scolaires ;
                    </li>
                    <li>
                      {' '}
                      Le{' '}
                      <span className="font-bold">
                        Centre de Formation d'Apprentis Agricole (CFAA)
                      </span>{' '}
                      pour la formation par la voie de l'apprentissage ;
                    </li>
                    <li>
                      L'<span className="font-bold">Exploitation Agricole</span>,
                      support d'enseignements et de production en ovin, bovin et en
                      maraîchage.
                    </li>
                  </ul>
                </p>
              </div>
              <p className="self-stretch text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                Nous proposons ainsi différentes formations dans de nombreux
                domaines, tels que les productions agricoles (animales et végétales),
                l'aménagement paysager, la transformation de produits alimentaires,
                vente en milieu rural, agroéquipement, soins aux équidés, utilisation
                de produits phytopharmaceutiques ... sur toute la Martinique.
              </p>
            </div>
          </div>
        </section>
        <section className="self-stretch w-full h-[318px] flex-col justify-start items-start gap-7 flex">
          <h2 className="text-neutral-700 text-2xl font-bold font-['Philosopher'] leading-loose tracking-tight">
            Notre engagement dans l’EPA 2
          </h2>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="h-[258px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch">
                <p className="text-neutral-700 text-base font-bold font-['Montserrat'] leading-relaxed tracking-tight">
                  En 2020, le Ministère de l’Agriculture et de l’Alimentation lance
                  un nouveau Plan « Enseigner à Produire Autrement, pour les
                  transitions et l’agro-écologie » (EPA 2) autour de 4 axes :<br />
                  Axe 1 :
                  <span className="font-medium">
                    {' '}
                    Encourager la parole et l&apos;initiative des apprenants sur les
                    questions des transitions et de l&apos;agroécologie ;<br />
                  </span>
                  Axe 2 :
                  <span className="font-medium">
                    {' '}
                    Mobiliser la communauté éducative pour enseigner l’agro-écologie
                    et poursuivre les transitions ; <br />
                  </span>
                  Axe 3 :
                  <span className="font-medium">
                    {' '}
                    Amplifier la mobilisation des exploitations agricoles et ateliers
                    ;
                    <br />
                    Axe 4 :
                  </span>
                  <span className="font-medium">
                    {' '}
                    Développer l’animation dans les territoires et l’essaimage des
                    pratiques innovantes.
                  </span>
                </p>
              </div>
              <p className="self-stretch text-neutral-700 text-base font-medium font-['Montserrat'] leading-relaxed tracking-tight">
                Au niveau de l’EPLEFPA de Croix-Rivail, nous nous engageons dans les
                4 axes de l’EPA 2 car c’est une suite logique de l’EPA 1. Les actions
                choisies par axe, pour la plupart, ont déjà été réalisées mais nous
                souhaitons les poursuivre, les améliorer et mettre en œuvre de
                nouvelles, selon les directives de l’EPA 2.
              </p>
            </div>
          </div>
        </section>
        <section className="self-stretch h-[758px] flex-col justify-start items-start gap-7 flex">
          <h2 className="text-neutral-700 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
            Coordonnées des responsables du PLEPA de l’EPFLEFPA de Croix-Rivail
          </h2>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="h-[698px] flex-col justify-start items-start gap-6 flex">
              <p className="self-stretch text-neutral-700 text-base font-normal font-['Montserrat'] leading-relaxed tracking-tight">
                Nom de l’établissement : EPLEFPA de CROIX-RIVAIL <br />
                Nom et prénom du responsable : MEFFRE Cécile <br />
                Adresse : BOIS ROUGE 915, <br /> Chemin Tolobe <br /> 97224 DUCOS{' '}
                <br />
                Téléphone : 05 96 51 27 34 <br />
                Mail : legta.croix-rivail@educagri.fr
              </p>
              <p className="self-stretch text-neutral-700 text-base font-normal font-['Montserrat'] leading-relaxed tracking-tight">
                <span className="font-bold">
                  CHEF DE PROJET au sein de l’établissement :<br />
                </span>
                Nom et prénom : MICHEL Virginie <br />
                Organisme employeur : LEGTA DE CROIX-RIVAIL <br />
                Adresse : BOIS ROUGE 915, <br /> Chemin Tolobe 97224
                <br /> DUCOS
                <br />
                Téléphone fixe : 05 96 51 47 94
                <br />
                Téléphone mobile : 06 96 37 56 18 (Portable personnel)
                <br />
                Mail : virginie.michel@educagri.fr{' '}
              </p>
              <p className="self-stretch text-neutral-700 text-base font-normal font-['Montserrat'] leading-relaxed tracking-tight">
                <span className="font-bold">
                  Référent EPA 2 au sein de l’établissement :<br />
                </span>
                Nom et prénom : MICHEL Virginie
                <br />
                Organisme employeur : LEGTA DE CROIX-RIVAIL
                <br />
                Adresse : BOIS ROUGE 915,
                <br />
                Chemin Tolobe 97224
                <br />
                DUCOS
                <br />
                Téléphone fixe : 05 96 51 47 94
                <br />
                Téléphone mobile : 06 96 37 56 18 (Portable personnel)
                <br />
                Mail : virginie.michel@educagri.fr
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
