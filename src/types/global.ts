export type Album = {
  name: string;
  links: {
    itunes: string;
    spotify: string;
    spotifyEmbed: string;
  };
  type: 'album' | 'ep' | 'single';
};
