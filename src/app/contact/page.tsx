import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageSection from '@/components/PageSection';
import Image from 'next/image';
import Link from 'next/link';
import contactImage from '../../../public/img/contact.webp';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <div className="py-6 md:py-20">
        <PageSection title="Contact">
          <div className="mt-4 md:mt-10 mx-4 flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-8 text-center">
            <Image
              src={contactImage}
              placeholder="blur"
              width={800}
              height={445}
              alt="The Dirty Nelsons band members"
              priority
            />
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
        </PageSection>
      </div>
      <Footer />
    </div>
  );
}
