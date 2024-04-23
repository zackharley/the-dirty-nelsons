import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Album = {
  name: string;
  cover: string;
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
