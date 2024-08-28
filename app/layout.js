import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';


export const metadata = {
  metadataBase: new URL('https://www.balletpoint.sk'),
  title: {
    default: 'Ballet point - baletná škola pre deti v Bratislave',
    template: 'Ballet point: %s',
  },
  openGraph: {
    images: '/app/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='sk'>
      <body className='min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-xl'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



