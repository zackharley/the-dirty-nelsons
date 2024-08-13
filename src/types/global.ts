import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { StaticImageData } from 'next/image';

export type Album = {
  name: string;
  cover: StaticImageData;
  releaseDate: Date;
  links: {
    itunes: string;
    spotify: string;
    spotifyEmbed: string;
  };
  type: 'album' | 'ep' | 'single';
};

export type SocialConfig = {
  icon: IconProp;
  url: string;
};
