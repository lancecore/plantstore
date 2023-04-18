import Image from 'next/image';
import Link from 'next/link';
import bigPlant from '../public/img/plant2.png';
import { FaAngleRight } from 'react-icons/fa';

export default function Hero() {
	return (
		<section className="hero min-h-[24rem] flex justify-center items-center">
			<div className="w-1/2 overflow-hidden">
				<Image src={bigPlant} alt="Photo of a plant" className="" />
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
