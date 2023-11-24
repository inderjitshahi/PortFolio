import { useEffect } from 'react';
import Head from 'next/head';
import { Rubik } from 'next/font/google';
import 'tw-elements';  // Assuming this is a valid import for your project
import '../styles/globals.css';

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

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inderjit Shahi</title>
        <meta name="description" content="Full-stack developer with a blend of academic excellence and practical experience. Graduated with a CGPA of 9.01 from Delhi Technological University. Led impactful projects, including the Jansunvai complaint tracking system for Katihar Police, benefiting 2 million citizens. MERN Stack Intern at Wereon, optimizing user authentication and improving application stability. Demonstrated proficiency in machine learning with 92% accuracy in K-means clustering. Expertise in ReactJS, Redux, NodeJS, and AWS. Designed data-intensive projects like ISDashPro with <70ms response time. A problem solver with achievements on coding platforms like LeetCode and Codeforces. Known for continuous learning, adaptability, and effective project management. Seeking opportunities as a dynamic, results-driven professional for full-stack, MERN, Front-End, RestApis, Backend developer roles." />
        <meta name="keywords" content="full-stack developer, MERN stack, Front-End developer, Rest APIs, Backend developer, JavaScript, ReactJS, Redux, NodeJS, AWS, machine learning, problem solver, coding platforms, LeetCode, Codeforces, continuous learning, adaptability, project management, dynamic professional, high-impact solutions" />
        <meta name="author" content="Inderjit Shahi" />
        <link rel="shortcut icon" href="/Logo_Circular.png" type="image/x-icon"></link>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Inderjit Shahi" />
        <meta property="og:description" content="Full-stack developer with a blend of academic excellence and practical experience. Graduated with a CGPA of 9.01 from Delhi Technological University. Led impactful projects, including the Jansunvai complaint tracking system for Katihar Police, benefiting 2 million citizens." />
        <meta property="og:image" content="/poster.png" />
        <meta property="og:url" content="https://inderjitshahi.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inderjit Shahi" />
        <meta name="twitter:description" content="Full-stack developer with a blend of academic excellence and practical experience. Graduated with a CGPA of 9.01 from Delhi Technological University. Led impactful projects, including the Jansunvai complaint tracking system for Katihar Police, benefiting 2 million citizens." />
        <meta name="twitter:image" content="/poster.png" />
      </Head>
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
