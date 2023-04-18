import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiShoppingCart2Fill, RiPlantFill } from 'react-icons/ri';

export default function Layout(props) {
	return (
		<nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent text-newpurple-100 uppercase font-bold tracking-wide">
			<div className="flex justify-center items-center gap-x-6">
				<p>
					<Link href="/" scroll={false} className="hover:text-newgreen-600 transition-all ease-in-out duration-200">
						Home
					</Link>
				</p>
				<p>
					<Link href="/about" scroll={false} className="hover:text-newgreen-600 transition-all ease-in-out duration-200">
						About
					</Link>
				</p>
			</div>
			<div>
				<h1 className="text-5xl font-extrabold lowercase tracking-tight">
					<Link href="/" scroll={false} className="flex justify-center items-center group">
						<RiPlantFill className="mt-px h-12 w-12 text-newgreen-600 group-hover:text-newgreen-600 transition-all ease-in-out duration-200" />
						<span className="text-newgreen-100 group-hover:text-newgreen-600 transition-all ease-in-out duration-200">plantstore</span>
					</Link>
				</h1>
			</div>
			<div className="flex justify-center items-center gap-x-6">
				<p>
					<Link href="/shop" scroll={false} className="hover:text-newgreen-600 transition-all ease-in-out duration-200">
						Shop
					</Link>
				</p>
				<p>
					<Link href="/cart" scroll={false} className="flex items-start gap-x-1 after:content-['2'] after:font-normal">
						<RiShoppingCart2Fill className="h-5 w-5 hover:text-newgreen-600 transition-all ease-in-out duration-200" />
					</Link>
				</p>
			</div>
		</nav>
	);
}
