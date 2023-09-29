export type SiteConfig = typeof siteConfig

const primaryMenuItems = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'À propos',
    href: '/about',
  },
  {
    label: 'Articles',
    href: '/posts',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const siteConfig = {
  name: 'PLEPA',
  description:
    'blog sur le plan local "Enseigner à Produire Autrement" de l\'EPLEFPA de Croix-Rivail.',
  navItems: primaryMenuItems,
  navMenuItems: primaryMenuItems,
  footerSections: [
    {
      title: 'PLEPA',
      links: primaryMenuItems,
    },
    {
      title: 'Juridique',
      links: [
        {
          label: 'Mentions légales',
          href: '/legal',
        },
        {
          label: 'Confidentialité',
          href: '/privacy',
        },
        {
          label: 'CGU',
          href: '/terms',
        },
      ],
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    //   twitter: 'https://twitter.com/getnextui',
    //   docs: 'https://nextui.org',
    //   discord: 'https://discord.gg/9b6yyZKmH4',
    //   sponsor: 'https://patreon.com/jrgarciadev',
  },
}
