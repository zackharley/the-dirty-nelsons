'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BandsintownWidget from '@/components/BandsintownWidget';
import Button from '@/components/Button';
import ListenToAlbumModal from '@/components/ListenToAlbumModal';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { albums, theDirtyNelsonsEP } from '@/data/music';
import PageSection from '@/components/PageSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlbumCard from '@/components/AlbumCard';
import Image from 'next/image';
import backgroundDesktopImage from '../../public/img/background.webp';
import backgroundMobileImage from '../../public/img/band.webp';

export default function Home() {
  const [isListenModalOpen, setIsListenModalOpen] = useState(false);
  return (
    <div className="bg-[#211C1C] text-[#F1ECC7] font-special">
      <ListenToAlbumModal
        album={theDirtyNelsonsEP}
        isOpen={isListenModalOpen}
        onClose={() => setIsListenModalOpen(false)}
      />
      <div className="fixed w-full aspect-[3/4] md:aspect-[16/9] z-0">
        <Image
          className="hidden md:block"
          layout="fill"
          src={backgroundDesktopImage}
          quality="100"
          alt="The Dirty Nelsons band members"
          priority
        />
        <Image
          className="block md:hidden opacity-40"
          layout="fill"
          src={backgroundMobileImage}
          objectFit="cover"
          objectPosition="bottom"
          quality="100"
          alt="The Dirty Nelsons band members"
          priority
        />
      </div>
      <Header />
      <main className="relative z-10">
        <div className="hero flex flex-col items-center justify-between aspect-[3/4] md:aspect-[16/9] relative">
          <div className="flex flex-col items-center justify-center pt-[24%]">
            <img
              className="w-[70%]  max-h-[80%] animate-fade-in drop-shadow-md"
              src="/img/logo-cream.svg"
              alt="The Dirty Nelsons logo"
            />
            <div className="flex flex-col items-center gap-y-2 mt-4 text-[rgba(241,236,199, 0.8)]">
              <p className="text-center text-xl font-bold drop-shadow-md">
                NEW SINGLE
              </p>
              <p className="text-center text-4xl font-bold drop-shadow-md">
                I TAKE YOU WAIT
              </p>
              <Button className="drop-shadow-md" href="#music">
                Listen Now
              </Button>
            </div>
          </div>
          <a href="">
            <FontAwesomeIcon
              icon={faChevronDown}
              size="xl"
              className="mb-2 drop-shadow-md"
            />
          </a>
        </div>

        <PageSection title="Shows" id="shows">
          <BandsintownWidget />
        </PageSection>

        <PageSection title="Music" id="music">
          <div className="flex flex-col items-center gap-y-4 mt-4">
            {albums.map(album => (
              <AlbumCard key={album.name} album={album} />
            ))}
          </div>
        </PageSection>

        <Footer />
      </main>
    </div>
  );
}
