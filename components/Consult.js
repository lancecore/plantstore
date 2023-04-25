import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import friend from '../public/img/plant-consultation.jpg';

export default function Consult() {
	const friendVariants = {
		offscreen: {
			opacity: 0.3,
			rotateZ: '-2deg',
		},
		onscreen: {
			opacity: 1,
			rotateZ: '-2deg',
			transition: {
				type: 'ease',
				duration: 0.5,
				delay: 0.1,
			},
		},
	};
	const textVariants = {
		offscreen: {
			opacity: 0.3,
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: 'ease',
				duration: 0.5,
				delay: 0.1,
			},
		},
	};
	return (
		<section className="my-16 py-16 grid grid-cols-2 items-center gap-0 my-12 max-w-6xl bg-newpurple-50 rounded-xl shadow-lg text-newpurple-950">
			<div>
				<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.2 }}>
					<motion.div variants={friendVariants}>
						<Image src={friend} alt="Photo of a plant" className="block ml-auto border-2 border-newpurple-950 rounded-lg shadow hover:shadow-lg" />
					</motion.div>
				</motion.div>
			</div>
			<motion.div className="px-16" initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.1 }}>
				<motion.div variants={textVariants}>
					<h2 className="mb-12 w-full text-7xl font-bold text-newgreen-950">Not Sure Where to Start?</h2>
					<p className="text-lg leading-relaxed">Get personalized advice and recommendations for your specific plant needs with our virtual plant consultations!</p>
					<p className="my-6 text-lg leading-relaxed">Our plant experts are available to answer your questions and provide customized guidance on everything from choosing the right plants for your space to troubleshooting common plant care issues.</p>
				</motion.div>
			</motion.div>
		</section>
	);
}
