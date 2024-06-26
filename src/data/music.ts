import { Album } from '@/types/global';
import { set } from 'date-fns';

export const theDirtyNelsonsEP: Album = {
  name: 'The Dirty Nelsons',
  type: 'ep',
  cover: '/img/music/tdn-ep.webp',
  releaseDate: set(new Date(), { year: 2023, month: 7, date: 11 }),
  links: {
    itunes: 'https://music.apple.com/us/album/the-dirty-nelsons-ep/1701026988',
    spotify:
      'https://open.spotify.com/album/4oSLrhwqKrJbVw92Kz3dmG?si=b0yebAmURL2-glGELmiRxg',
    spotifyEmbed:
      'https://open.spotify.com/embed/album/4oSLrhwqKrJbVw92Kz3dmG?utm_source=generator',
  },
};

export const albums: Album[] = [theDirtyNelsonsEP];
