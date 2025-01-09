import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageSection from '@/components/PageSection';
import Image from 'next/image';
import Link from 'next/link';
import bandImage from '../../../public/img/band.webp';
import hadyenImage from '../../../public/img/hayden.webp';
import colinPatImage from '../../../public/img/colin-pat.webp';
import lucasMattImage from '../../../public/img/lucas-matt.webp';
import lucasZackStudioImage from '../../../public/img/lucas-zack-studio.webp';
import type { PropsWithChildren } from 'react';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="py-6 md:py-20">
        <PageSection title="About">
          <div className="pt-4 md:mt-10 mx-4 flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8">
            <Image
              className="hidden md:block"
              src={bandImage}
              placeholder="blur"
              width={400}
              height={538}
              alt="The Dirty Nelsons band members"
              priority
            />
            <Image
              className="block md:hidden"
              src={bandImage}
              placeholder="blur"
              width={300}
              height={403}
              alt="The Dirty Nelsons band members"
            />
            <div className="text-center md:text-left">
              <p>
                Hailing from Toronto, Canada, The Dirty Nelsons is the
                beer-fueled passion project of Matt Carter, Colin MacLeod, Lucas
                Manuel, Hayden Estabrook, and Zack Harley. What started as
                late-night jam sessions has turned into a raw, unfiltered rock
                band that&apos;s carved out a place in the local scene with
                unforgettable, high-energy shows.
              </p>
              <br />
              <p>
                Fresh off the heels of their 2022 One Night Stand
                &quot;Tour&quot;, The Dirty Nelsons released their{' '}
                <AboutLink href="/#music">debut self-titled EP</AboutLink> in
                August 2023 along with a sold-out EP release show at The Rivoli
                in downtown Toronto.
              </p>
              <br />
              <p>
                In 2024, The Dirty Nelsons followed that up with the release of
                their newest single{' '}
                <AboutLink href="/#music">I Take You Wait</AboutLink> and an
                encore performance at The Rivoli on August 24th, 2024.
              </p>
              <br />
              <p>
                At the beginning of 2025, The Dirty Nelsons released{' '}
                <AboutLink href="/#video">a music video</AboutLink> for I Take
                You Wait featuring live footage from their 2024 show at The
                Rivoli.
              </p>
              <hr className="border-1 border-dashed border-cream my-6" />
              <p>
                Want to get in touch? Email us at{' '}
                <AboutLink href="mailto:band@thedirtynelsons.com">
                  band@thedirtynelsons.com
                </AboutLink>{' '}
                for booking, press, or just to say hi!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:max-w-full gap-3 mt-10">
            <Image
              src={hadyenImage}
              placeholder="blur"
              height={1000}
              width={1000}
              alt="Hayden playing drums"
            />
            <Image
              src={colinPatImage}
              placeholder="blur"
              height={1000}
              width={1000}
              alt="Colin singing"
            />
            <Image
              src={lucasMattImage}
              placeholder="blur"
              height={1000}
              width={1000}
              alt="Lucas and Matt taking a break between songs"
            />
            <Image
              src={lucasZackStudioImage}
              placeholder="blur"
              height={1000}
              width={1000}
              alt="Lucas and Zack in the studio"
            />
          </div>
        </PageSection>
      </div>
      <Footer />
    </div>
  );
}

function AboutLink({
  href,
  children,
}: {
  href: string;
} & PropsWithChildren) {
  return (
    <Link href={href}>
      <span className="border-b border-dashed border-cream hover:opacity-75">
        {children}
      </span>
    </Link>
  );
}
