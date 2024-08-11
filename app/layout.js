import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'Balletpoint landing page',
  description:
    'Presentation web of new ballet school in Bratislava, Slovakia. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-xl'>
        <GoogleTagManager gtmId={'GTM-P7DH28G5'} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



