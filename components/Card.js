import Image from 'next/image';
import Link from 'next/link';
import plant from '../public/img/plant1.png';

export default function Card() {
	return (
		<div className="mt-20 py-6 px-6 rounded-xl shadow bg-newgreen-500 text-newpurple-950 text-center">
			<Image src={plant} alt="Photo of a plant" className="-mt-20" />
			<h3 className="my-4 font-semibold text-lg">Spider Plant</h3>
			<p className="mb-4 font-bold tracking-widest text-5xl">$14.99</p>
			<p>Description of a plant. Description of a plant. Description of a plant. </p>
			<p>
				<Link href="/shop" className="button" scroll={false}>
					VIEW PRODUCT
				</Link>
			</p>
		</div>
	);
}
