import { Album } from '@/types/global';
import { faItunes, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import Image from 'next/image';

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <div key={album.name} className="flex flex-col items-center gap-y-1">
      <a href={album.links.spotify} rel="noopener noreferrer" target="_blank">
        <Image src={album.cover} alt={album.name} placeholder="blur" />
      </a>
      <p className="text-xl md:text-3xl font-bold mt-2 text-center md:text-start">
        {album.name}
      </p>
      <p className="text-sm md:text-lg text-center md:text-start">
        {format(album.releaseDate, 'MMMM d, yyy')}
      </p>
      <div className="flex flex-row gap-x-4 text-[#F1ECC7]">
        <a
          href={album.links.spotify}
          rel="noopener noreferrer"
          target="_blank"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <FontAwesomeIcon size="lg" icon={faSpotify} />
        </a>
        <a
          href={album.links.itunes}
          rel="noopener noreferrer"
          target="_blank"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <FontAwesomeIcon size="lg" icon={faItunes} />
        </a>
      </div>
    </div>
  );
}
