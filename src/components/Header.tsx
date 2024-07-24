'use client';
import { socials } from '@/data/socials';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Fragment, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    href: '/#shows',
    label: 'Shows',
  },
  {
    href: '/#music',
    label: 'Music',
  },
  // {
  //   href: '/about',
  //   label: 'About',
  // },
  // {
  //   href: '/contact',
  //   label: 'Contact',
  // },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="hidden md:flex flex-row items-center px-16 absolute top-0 h-16 w-full bg-[#211c1c9e] z-[1000]">
        <Image
          height={40}
          width={40}
          src="/img/icon-cream.svg"
          alt="The Dirty Nelsons"
        />
        <div className="w-6 h-[1px] bg-[#F1ECC7] mx-4" />
        <nav className="flex flex-row gap-x-3 mt-2">
          {navItems.map(({ href, label }, index) => (
            <Fragment key={label}>
              <a href={href} className="hover:underline decoration-dashed">
                {label}
              </a>
              {index < navItems.length - 1 && <span>•</span>}
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
          icon={faHamburger}
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </header>
      <div className={isMobileMenuOpen ? 'flex' : 'hidden'}>Mobile Menu</div>
    </>
  );
}
