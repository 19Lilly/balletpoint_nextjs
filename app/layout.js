import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';


export const metadata = {
  title: 'Ballet point - prezentačná stránka',
  description:
    'Prezentačný web novej baletnej školy pre deti v Bratislave v Lamači. Aktuálne je otvorený zápis v troch skupinách pre školský rok 2024/2025.',
  keywords:
    'balet, deti, Bratislava, Lamač, tanec, baletná škola, 2024/2025, ballet, children, dance, ballet school',
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



