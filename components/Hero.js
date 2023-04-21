import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import bigPlant from '../public/img/plant2.png';
import { FaAngleRight } from 'react-icons/fa';

export default function Hero() {
	return (
		<section className="hero min-h-[24rem] flex justify-center items-center">
			<div className="w-1/2">
				<motion.div
					whileHover={{
						rotateZ: '-2deg',
						scale: 1.1,
					}}
					transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
				>
					<Image src={bigPlant} alt="Photo of a plant" className="block ml-auto" />
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
