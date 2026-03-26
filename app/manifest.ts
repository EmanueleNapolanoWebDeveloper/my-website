import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EN Web Developer',
    short_name: 'EN Web Dev',
    description: 'Sviluppatore web freelance specializzato in siti web, e-commerce e applicazioni su misura per PMI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    lang: 'it',
    icons: [
      {
        src: '/assets/webSiteImages/LogoN.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
