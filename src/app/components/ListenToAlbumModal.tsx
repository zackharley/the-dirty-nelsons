'use client';

import { faItunes, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Album } from '@/types/global';

export default function ListenToAlbumModal({
  album,
  isOpen,
  onClose,
}: {
  album: Album;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={[
        'fixed',
        'inset-0',
        'flex',
        'items-center',
        'justify-center',
        'bg-black',
        'bg-opacity-50',
        'z-[1000]',
        ...(isOpen ? [] : ['hidden']),
      ].join(' ')}
    >
      <div className="bg-cream p-4 max-w-3xl">
        <div className="flex justify-end text-black mb-2">
          <button onClick={onClose}>
            <FontAwesomeIcon size="xl" icon={faTimes} />
          </button>
        </div>
        <iframe
          style={{ borderRadius: '12px' }}
          src={album.links.spotifyEmbed}
          width="100%"
          height="352"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <h2 className="text-2xl font-bold">Listen to our new album!</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-black">
            <a
              href={album.links.spotify}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              href={album.links.itunes}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faItunes} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
