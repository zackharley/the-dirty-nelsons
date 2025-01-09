'use client';
import { socials } from '@/data/socials';
import {
  faBars,
  faClose,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import logoBlack from '../../public/img/logo-black.svg';

type NavItem = {
  label: string;
  href: string;
  showOnDesktop?: boolean;
};

const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    showOnDesktop: false,
  },
  {
    href: '/#shows',
    label: 'Shows',
  },
  // {
  //   href: 'https://merch.thedirtynelsons.com',
  //   label: 'Store',
  // },
  {
    href: '/#video',
    label: 'Video',
  },
  {
    href: '/#music',
    label: 'Music',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItemsToDisplay = navItems.filter(
    ({ showOnDesktop }) =>
      showOnDesktop === undefined || showOnDesktop === true,
  );
  return (
    <>
      <header className="hidden md:flex flex-row items-center px-16 absolute top-0 h-16 w-full bg-[#211c1c9e] z-[1000]">
        <Link href="/">
          <Image
            height={40}
            width={40}
            src="/img/icon-cream.svg"
            alt="The Dirty Nelsons"
          />
        </Link>
        <div className="w-6 h-[1px] bg-[#F1ECC7] mx-4" />
        <nav className="flex flex-row gap-x-3 mt-2">
          {navItemsToDisplay.map(({ href, label }, index) => (
            <Fragment key={label}>
              <Link href={href} className="hover:underline decoration-dashed">
                {label}
              </Link>
              {index < navItemsToDisplay.length - 1 && <span>•</span>}
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
      <header className="flex md:hidden flex-row items-center px-4 absolute top-0 h-12 w-full bg-[#211c1c9e] z-[1000]">
        <Image
          height={32}
          width={32}
          src="/img/icon-cream.svg"
          alt="The Dirty Nelsons"
        />
        <div className="flex-grow h-[1px] bg-[#F1ECC7] mx-4" />
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </header>
      <div
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } flex-col absolute z-[1001] bg-cream h-dvh w-dvw text-black py-3 px-4`}
      >
        <header className="flex flex-col items-end mb-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FontAwesomeIcon icon={faClose} size="xl" />
          </button>
        </header>
        <div>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={logoBlack}
              width={225}
              height={77}
              alt="The Dirty Nelsons logo"
            />
          </Link>
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hover:underline decoration-dashed"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-2xl">{label}</span>
              </Link>
            ))}
          </nav>
          <hr className="border-1 border-dashed border-black my-6" />
          <div className="flex flex-row justify-between text-[#211C1C]">
            {socials.map(({ icon, url }) => (
              <a
                className="transform transition-transform duration-200 hover:scale-110"
                href={url}
                target="_blank"
                rel="noreferrer"
                key={url}
              >
                <FontAwesomeIcon size="2xl" icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
