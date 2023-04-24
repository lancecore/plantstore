import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import friend from '../public/img/friend1.png';

export default function Info() {
	const friendVariants = {
		offscreen: {
			rotateZ: 0,
			scale: 0.8,
		},
		onscreen: {
			rotateZ: '2deg',
			scale: 1,
			transition: {
				type: 'spring',
				bounce: 0.5,
				duration: 0.5,
				delay: 0.1,
			},
		},
	};
	return (
		<section className="my-16 py-16 grid grid-cols-2 items-center gap-0 my-12 max-w-6xl bg-indigo-950 rounded-xl shadow-lg text-newpurple-100">
			<div className="px-16">
				<h2 className="mb-12 w-full text-7xl font-bold text-newgreen-100">Not Your Daddy’s Plant Shop</h2>
				<p className="antialiased text-lg leading-relaxed">Whether you’re looking for a statement-making monstera or a low-maintenance succulent, we’ve got you covered.</p>
				<p className="my-6 antialiased text-lg leading-relaxed">Our plants are sourced from local growers who share our commitment to sustainability, ensuring that every purchase you make contributes to a healthier planet.</p>
			</div>
			<div>
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: false, amount: 0.1 }}
					whileHover={{
						rotateZ: '3deg',
						scale: 1.1,
					}}
					transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
				>
					<motion.div variants={friendVariants}>
						<Image src={friend} alt="Photo of a plant" className="block ml-auto" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
