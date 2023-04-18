import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Rubik } from 'next/font/google';

const newFont = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }) {
	return (
		<div className={`wrapper ${newFont.className}`}>
			<AnimatePresence mode="wait" initial={true} onExitComplete={() => window.scrollTo(0, 0)}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</div>
	);
}
