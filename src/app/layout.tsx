import type { Metadata } from 'next';
import { Special_Elite } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faItunes,
  faSpotify,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'The Dirty Nelsons',
  description:
    "The official website of The Dirty Nelsons. Debut EP 'THE DIRTY NELSONS' out now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={specialElite.className}>{children}</body>
      <GoogleAnalytics gaId="G-LX1WFLZ6WF" />
    </html>
  );
}
