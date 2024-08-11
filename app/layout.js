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
      <head>
        <script
          id='cookieyes'
          type='text/javascript'
          src='https://cdn-cookieyes.com/client_data/a0de9d0b7887422f10cc9743/script.js'
        />
      </head>
      <body className='min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-xl'>
        <GoogleTagManager gtmId={process.env.GTM_ID} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



