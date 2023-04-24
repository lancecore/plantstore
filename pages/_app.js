import '@/styles/globals.css';
import Head from 'next/head';
import { Rubik } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';

const newFont = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>plantstore</title>
			</Head>
			<div className={`wrapper ${newFont.className}`}>
				<AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</div>
		</>
	);
}
