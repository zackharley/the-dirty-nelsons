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
                beer-fueled passion project of Matt, Colin, Lucas, Hayden, and
                Zack. Brought together by a passion for raw, unfiltered
                rock&apos;n&apos;roll, The Dirty Nelsons have blasted their way
                from bedroom jams onto the local scene with unforgettable,
                electrifying performances.
              </p>
              <br />
              <p>
                Fresh off the heels of their huge 2022 One Night Stand Tour, The
                Dirty Nelsons released their{' '}
                <Link href="/#music">
                  <span className="border-b border-dashed border-cream hover:opacity-75">
                    debut self-titled EP
                  </span>
                </Link>{' '}
                in August 2023 along with a sold-out EP release show at The
                Rivoli in downtown Toronto.
              </p>
              <br />
              <p>
                Now its 2024 and The Dirty Nelsons are back and better than ever
                with the release of their newest single{' '}
                <Link href="/#music">
                  <span className="border-b border-dashed border-cream hover:opacity-75">
                    I Take You Wait
                  </span>
                </Link>{' '}
                and an encore performance at The Rivoli set to take place on
                August 24th, 2024.
              </p>
              <hr className="border-1 border-dashed border-cream my-6" />
              <p>
                Want to get in touch? Email us at{' '}
                <Link href="mailto:band@thedirtynelsons.com">
                  <span className="border-b border-dashed border-cream hover:opacity-75">
                    band@thedirtynelsons.com
                  </span>
                </Link>{' '}
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
