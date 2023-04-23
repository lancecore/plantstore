import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout(props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					type: 'tween',
					duration: 0.2,
					ease: 'easeInOut',
				}}
			>
				<Nav />
			</motion.div>
			<motion.div
				initial={{ scale: 0.4, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 4, opacity: 0 }}
				transition={{
					type: 'spring',
					bounce: 0,
					duration: 0.4,
					ease: 'easeInOut',
				}}
			>
				{props.children}
				<Footer />
			</motion.div>
		</>
	);
}
