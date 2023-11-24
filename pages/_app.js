import { useEffect } from 'react';
import '../styles/globals.css'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400']
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <main className={rubik.className} >
    <Component {...pageProps} />;
  </main>
}

export default MyApp;