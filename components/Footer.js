import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { RiPlantFill } from 'react-icons/ri';

export default function Footer() {
	const friendVariants = {
		offscreen: {
			y: 0,
		},
		onscreen: {
			y: -90,
			rotate: -10,
			transition: {
				type: 'spring',
				bounce: 0.4,
				duration: 0.8,
				delay: 0.2,
			},
		},
	};

	return (
		<footer className="py-20 bg-indigo-950 text-newpurple-100">
			<section className="max-w-6xl mx-auto grid grid-cols-5 gap-x-8 justify-start">
				<div>
					<p className="text-5xl font-extrabold lowercase tracking-tight">
						<Link href="/" scroll={false} className="flex items-start group">
							<RiPlantFill className="mt-px h-12 w-12 text-newgreen-600 group-hover:text-newgreen-600 transition-all ease-in-out duration-200" />
							<span className="text-newgreen-100 group-hover:text-newgreen-600 transition-all ease-in-out duration-200">
								plant
								<br />
								store
							</span>
						</Link>
					</p>
				</div>
				<div className="font-semibold antialiased">
					<p>
						<Link href="/" scroll={false} className="hover:text-pink-300">
							Home
						</Link>
					</p>
					<p className="my-4">
						<Link href="/shop" scroll={false} className="hover:text-pink-300">
							Shop
						</Link>
					</p>
					<p>
						<Link href="/contact" scroll={false} className="hover:text-pink-300">
							Contact
						</Link>
					</p>
				</div>
				<div className="col-span-3">
					<p className="antialiased">We are committed to providing high-quality plants that are healthy, sustainable, and ethically sourced. Our plants are grown in eco-friendly conditions, without the use of harmful chemicals, and with a focus on conservation and biodiversity. We also make sure to work with local growers and suppliers whenever possible to reduce our carbon footprint.</p>
				</div>
			</section>
			<motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 1 }}>
				<motion.div variants={friendVariants} className="footer-friend"></motion.div>
			</motion.div>
		</footer>
	);
}
