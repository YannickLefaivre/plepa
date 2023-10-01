import Header from '@/components/templates/server/Header'
import CardList from '@/components/organisms/server/CardList'
import { getSortedPostsData } from '@/lib/posts'

export default function PostsPage({
  searchParams,
}: {
  params: string
  searchParams: { [key: string]: string }
}) {
  const posts = getSortedPostsData()
  let filteredPosts = []

  filteredPosts =
    searchParams.category !== undefined
      ? posts.filter((post) => {
          if (searchParams.category === post.frontMatter.category) {
            if (searchParams.subCategory === undefined) {
              return true
            } else if (searchParams.subCategory === post.frontMatter.subCategory) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
        })
      : posts

  return (
    <>
      <Header />

      <section className="w-full flex-col justify-start items-start flex gap-16">
        <CardList posts={filteredPosts} />
      </section>

      {/* <div className="w-[1046px] left-[2px] top-[1392px] absolute justify-start items-start gap-7 inline-flex">
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1046px] left-[2px] top-[873px] absolute justify-start items-start gap-7 inline-flex">
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1046px] left-[2px] top-[354px] absolute justify-start items-start gap-7 inline-flex">
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-white rounded-sm shadow flex-col justify-start items-center inline-flex">
          <div className="w-[330px] h-[202px] justify-center items-center inline-flex">
            <div className="w-[330px] h-[202px] relative bg-stone-300" />
          </div>
          <div className="self-stretch h-[253px] px-[25px] py-5 flex-col justify-start items-start gap-[15px] flex">
            <div className="text-stone-300 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              22 JUILLET 2023
            </div>
            <div className="self-stretch h-[135px] flex-col justify-start items-start gap-[15px] flex">
              <div className="text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">
                Titre
              </div>
              <div className="self-stretch text-neutral-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                Magna eos erat facilisis aliquyam duo invidunt tempor dolore et
                consetetur vero magna ipsum vero tempor invidunt at...
              </div>
            </div>
            <div className="text-sky-500 text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
              Lire l’article
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
