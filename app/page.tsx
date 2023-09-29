import { Carousel } from '@/components/organisms/Carousel'
import Section from '@/components/templates/server/Section'

export default function HomePage() {
  return (
    <>
      <Carousel
        imageSourceList={[
          '/images/home/9ax45t44m52h4k.webp',
          '/images/home/9jowjov8i6v4vy.jpg',
          '/images/home/9vi1jzrh1f413y.webp',
          '/images/home/25mkjg846vt11d.webp',
        ]}
      />

      <div className="flex-col justify-start items-center gap-4 flex">
        <h1 className="self-stretch text-center text-neutral-700 text-[58px] font-extrabold font-['Philosopher'] leading-[80px] tracking-tight">
          Bienvenue
        </h1>
        <p className="self-stretch text-center text-neutral-700 font-medium text-2xl font-['Mulish'] leading-loose tracking-tight">
          Êtes-vous prêt à <span className="text-green-500">produire autrement</span>{' '}
          ?
        </p>
      </div>

      <Section title="Encourager" />

      <Section title="Mobiliser" />

      <Section title="Amplifier" />

      <Section title="Déveloper" />
    </>
  )
}
