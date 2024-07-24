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
        <Image
          className="w-full"
          src="/img/background.jpeg"
          height={2359}
          width={4192}
          alt="The Dirty Nelsons"
        />
      </div>
      <Header />
      <main className="relative z-10">
        <div className="hero flex flex-col items-center justify-between p-y-28 aspect-[16/9] relative">
          <div className="flex flex-col items-center justify-center pt-[24%]">
            <img
              className="w-[70%]  max-h-[80%] animate-fade-in drop-shadow-md"
              src="/img/logo-cream.svg"
            />
            <div className="flex flex-col items-center gap-y-2 mt-4">
              <p className="text-center text-4xl font-bold drop-shadow-md">
                DEBUT EP OUT NOW
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

        <PageSection title="Shows" id="shows" borderFill="orange">
          <BandsintownWidget />
        </PageSection>

        <PageSection title="Music" id="music" color="orange" borderFill="cream">
          <div className="flex flex-col items-center gap-y-4 mt-4">
            {albums.map((album) => (
              <AlbumCard key={album.name} album={album} />
            ))}
          </div>
        </PageSection>

        <Footer />
      </main>
    </div>
  );
}
