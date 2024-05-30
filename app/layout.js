import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Balletpoint landing page',
  description: 'Presentation web of new ballet school in Bratislava, Slovakia. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=' min-h-screen h-full bg-slate-950 text-white  mx-auto flex flex-col  w-full'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

