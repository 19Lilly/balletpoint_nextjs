import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Balletpoint landing page',
  description:
    'Presentation web of new ballet school in Bratislava, Slovakia. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-xl'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



