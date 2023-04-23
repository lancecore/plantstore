import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import bigPlant from '../public/img/friend2.png';
import { FaAngleRight } from 'react-icons/fa';

export default function Hero() {
	const friendVariants = {
		offscreen: {
			rotateZ: 0,
			scale: 0.5,
		},
		onscreen: {
			rotateZ: '-2deg',
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
		<section className="hero min-h-[24rem] flex justify-center items-center">
			<div className="w-1/2">
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.1 }}
					whileHover={{
						rotateZ: '-3deg',
						scale: 1.1,
					}}
					transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
				>
					<motion.div variants={friendVariants}>
						<Image src={bigPlant} alt="Photo of a plant" className="block ml-auto" />
					</motion.div>
				</motion.div>
			</div>
			<div className="w-1/2">
				<h2 className="text-9xl font-bold text-stone-50">Cool New Plants at Cool New Prices</h2>
				<p>
					<Link href="/shop" scroll={false} className="button flex items-center">
						Shop Now <FaAngleRight className="inline-block -mt-[2px] h-5 w-5" />
					</Link>
				</p>
			</div>
		</section>
	);
}
