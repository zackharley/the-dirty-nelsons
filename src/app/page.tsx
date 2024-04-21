'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import BandsintownWidget from './components/BandsintownWidget';
import Button from './components/Button';
import ListenToAlbumModal from './components/ListenToAlbumModal';
import {
  faFacebook,
  faInstagram,
  faItunes,
  faSpotify,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { theDirtyNelsonsEP } from '@/data/music';

type SocialConfig = {
  icon: IconProp;
  url: string;
};

const socials: SocialConfig[] = [
  {
    icon: faSpotify,
    url: 'https://open.spotify.com/artist/7kr2klU4GK0wYxjXWuGmbE?si=g_A-F9UjR1mU5um8-h6hLQ',
  },
  {
    icon: faItunes,
    url: 'https://music.apple.com/us/artist/the-dirty-nelsons/1693728666',
  },
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/thedirtynelsons/',
  },
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/thedirtynelsons/',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/thedirtynelsons',
  },
  {
    icon: faTiktok,
    url: 'https://www.tiktok.com/@thedirtynelsons',
  },
];

const pageSections = [
  {
    href: '#shows',
    label: 'Shows',
  },
  {
    href: '#music',
    label: 'Music',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

export default function Home() {
  const [isListenModalOpen, setIsListenModalOpen] = useState(false);
  return (
    <div className="bg-[#211C1C] text-[#F1ECC7] font-special">
      <ListenToAlbumModal
        album={theDirtyNelsonsEP}
        isOpen={isListenModalOpen}
        onClose={() => setIsListenModalOpen(false)}
      />
      <div className="fixed w-full aspect-[16/9] z-0">
        <img className="w-full" src="/img/background.jpeg" />
      </div>
      <main className="relative z-10">
        <div className="hero flex flex-col items-center justify-between p-y-28 aspect-[16/9] relative">
          <header className="flex flex-row items-center px-16 absolute top-0 h-16 w-full bg-[#211c1c9e]">
            <img className="h-10" src="/img/icon-cream.svg" />
            <div className="w-6 h-[1px] bg-[#F1ECC7] mx-4" />
            <nav className="flex flex-row gap-x-3 mt-2">
              {pageSections.map(({ href, label }, index) => (
                <Fragment key={label}>
                  <a href={href} className="hover:underline ">
                    {label}
                  </a>
                  {/* Separate with "•" if not the last item */}
                  {index < pageSections.length - 1 && <span>•</span>}
                </Fragment>
              ))}
            </nav>
            <div className="flex-grow h-[1px] bg-[#F1ECC7] mx-4" />
            <div className="max-w-5xl flex flex-row gap-x-4">
              {socials.map(({ icon, url }) => (
                <a
                  className="transform transition-transform duration-200 hover:scale-110"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  key={url}
                >
                  <FontAwesomeIcon size="lg" icon={icon} />
                </a>
              ))}
            </div>
          </header>
          <div className="flex flex-col items-center justify-center pt-[24%]">
            <img
              className="w-[70%] animate-fade-in drop-shadow-md"
              src="/img/logo-cream.svg"
            />
            <div className="flex flex-col items-center gap-y-2 mt-4">
              <p className="text-center text-4xl font-bold">DEBUT EP OUT NOW</p>
              <Button
                onClick={() => setIsListenModalOpen(true)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen Now
              </Button>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xl"
            className="mb-2 drop-shadow-md"
          />
        </div>

        <div
          id="shows"
          className="flex flex-col items-center bg-black pt-16 pb-12"
        >
          <div className="max-w-5xl w-full flex flex-col items-stretch">
            <h2 className="text-5xl font-bold self-center">Shows</h2>
            <div className="h-[2px] w-full bg-[#F1ECC7] my-4" />
            <BandsintownWidget />
          </div>
        </div>

        <footer className="flex flex-col items-stretch p-24 bg-[#F1ECC7] text-[#211C1C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center">
            <div className="flex flex-col items-start text-center">
              <p className="text-xl font-bold text-left leading-6 mb-2">
                SIGN UP TO OUR
                <br />
                MAILING LIST BELOW
              </p>
              <iframe
                src="https://embeds.beehiiv.com/900a6e26-2631-4723-9a5d-4101b73e47eb?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                style={{
                  margin: 0,
                  borderRadius: '0px !important',
                  backgroundColor: 'transparent',
                }}
              ></iframe>
            </div>
            <div className="flex flex-col items-center text-center">
              <img className="h-24" src="/img/logo-black.svg" />
            </div>
            <div className="flex flex-col items-end text-right gap-y-3">
              <div className="flex flex-row gap-x-4 text-[#211C1C]">
                {socials.map(({ icon, url }) => (
                  <a
                    className="transform transition-transform duration-200 hover:scale-110"
                    href="https://open.spotify.com/artist/7kr2klU4GK0wYxjXWuGmbE?si=g_A-F9UjR1mU5um8-h6hLQ"
                    target="_blank"
                    rel="noreferrer"
                    key={url}
                  >
                    <FontAwesomeIcon size="lg" icon={icon} />
                  </a>
                ))}
              </div>
              <p>© 2024 THE DIRTY NELSONS</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
