import { Album } from '@/types/global';
import { set } from 'date-fns';
import iTakeYouWaitCover from '../../public/img/music/ityw.webp';
import theDirtyNelsonsEPCover from '../../public/img/music/tdn-ep.webp';

export const iTakeYouWaitSingle: Album = {
  name: 'I Take You Wait',
  type: 'single',
  cover: iTakeYouWaitCover,
  releaseDate: set(new Date(), { year: 2024, month: 7, date: 13 }),
  links: {
    itunes:
      'https://music.apple.com/gb/album/i-take-you-wait-single/1762231079',
    spotify:
      'https://open.spotify.com/album/2zaf9pZKf7InuMGB2EKcEq?si=YTTVUT0MRiOil5f8n-VSrw',
    spotifyEmbed: 'https://open.spotify.com/embed/albym/2zaf9pZKf7InuMGB2EKcEq',
  },
};

export const theDirtyNelsonsEP: Album = {
  name: 'The Dirty Nelsons',
  type: 'ep',
  cover: theDirtyNelsonsEPCover,
  releaseDate: set(new Date(), { year: 2023, month: 7, date: 11 }),
  links: {
    itunes: 'https://music.apple.com/us/album/the-dirty-nelsons-ep/1701026988',
    spotify:
      'https://open.spotify.com/album/4oSLrhwqKrJbVw92Kz3dmG?si=b0yebAmURL2-glGELmiRxg',
    spotifyEmbed: 'https://open.spotify.com/embed/album/4oSLrhwqKrJbVw92Kz3dmG',
  },
};

export const albums: Album[] = [iTakeYouWaitSingle, theDirtyNelsonsEP];
