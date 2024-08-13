import { socials } from '@/data/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col items-stretch py-10 md:p-24 bg-[#F1ECC7] text-[#211C1C]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center text-center ">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-bold md:text-left leading-6 mb-2">
            SIGN UP TO OUR
            <br />
            MAILING LIST BELOW
          </p>
          <iframe
            src="https://embeds.beehiiv.com/900a6e26-2631-4723-9a5d-4101b73e47eb?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: '0',
              borderRadius: '0 !important',
              backgroundColor: 'transparent',
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <Image
            height={96}
            width={275}
            src="/img/logo-black.svg"
            alt="The Dirty Nelsons"
          />
        </div>
        <div className="flex flex-col items-center md:items-end md:text-right gap-y-3">
          <div className="flex flex-row gap-x-4 text-[#211C1C]">
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
          <p>© 2024 THE DIRTY NELSONS</p>
        </div>
      </div>
    </footer>
  );
}
