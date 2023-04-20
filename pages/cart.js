import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '../components/Layout';
import plant1 from '../public/img/plant2.png';
import plant2 from '../public/img/plant5.png';
import plant3 from '../public/img/plant8.png';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { GoCheck as Check } from 'react-icons/go';

export default function Cart() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center p-24">
				<div className="w-full grid grid-cols-3 gap-x-4 justify-between mt-20 rounded-xl shadow-lg bg-white text-newpurple-950">
					<section className="col-span-2 p-6 rounded-lg bg-white">
						<h1 className="mb-8 text-3xl font-semibold">Your Cart</h1>
						<div className="grid grid-cols-4 items-start mb-12 py-4">
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<Image src={plant1} alt="Photo of a plant" className="block col-span-2 p-2 border border-newpurple-200 rounded-lg bg-newpurple-100" />
								<div className="flex flex-col justify-between h-full">
									<p className="font-semibold text-lg">Ivy</p>
									<p className="text-sm text-newpurple-800">
										<Check className="inline-block -mt-[2px] mr-1 h-4 w-4 text-newgreen-800" />
										In Stock
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="relative inline-block">
									<select className="w-16 h-10 pl-4 pr-6  placeholder-newpurple-950 border border-newpurple-300 rounded-lg appearance-none focus:shadow-outline" placeholder="1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
									</select>
									<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
										<FaAngleDown className="inline-block h-3 w-3" />
									</div>
								</div>
								<p className="mt-2 cursor-pointer text-newpurple-700 hover:text-newpurple-900">Remove</p>
							</div>
							<div className="text-center">$11.99</div>
						</div>
						<div className="grid grid-cols-4 items-start mb-12 py-4">
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<Image src={plant2} alt="Photo of a plant" className="block col-span-2 p-2 border border-newpink-200 rounded-lg bg-newpink-100 max-h-56 object-scale-down" />
								<div className="flex flex-col justify-between h-full">
									<p className="font-semibold text-lg">Green Rubber Fig</p>
									<p className="text-sm text-newpurple-800">
										<Check className="inline-block -mt-[2px] mr-1 h-4 w-4 text-newgreen-800" />
										In Stock
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="relative inline-block">
									<select className="w-16 h-10 pl-4 pr-6  placeholder-newpurple-950 border border-newpurple-300 rounded-lg appearance-none focus:shadow-outline" placeholder="2">
										<option>1</option>
										<option>2</option>
										<option>3</option>
									</select>
									<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
										<FaAngleDown className="inline-block h-3 w-3" />
									</div>
								</div>
								<p className="mt-2 cursor-pointer text-newpurple-700 hover:text-newpurple-900">Remove</p>
							</div>
							<div className="text-center">$29.98</div>
						</div>
						<div className="grid grid-cols-4 items-start mb-12 py-4">
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<Image src={plant3} alt="Photo of a plant" className="block col-span-2 p-2 border border-newpurple-200 rounded-lg bg-newpurple-100 max-h-56 object-scale-down" />
								<div className="flex flex-col justify-between h-full">
									<p className="font-semibold text-lg">Big Snake Plant</p>
									<p className="text-sm text-newpurple-800">
										<Check className="inline-block -mt-[2px] mr-1 h-4 w-4 text-newgreen-800" />
										In Stock
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="relative inline-block">
									<select className="w-16 h-10 pl-4 pr-6  placeholder-newpurple-950 border border-newpurple-300 rounded-lg appearance-none focus:shadow-outline" placeholder="1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
									</select>
									<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
										<FaAngleDown className="inline-block h-3 w-3" />
									</div>
								</div>
								<p className="mt-2 cursor-pointer text-newpurple-700 hover:text-newpurple-900">Remove</p>
							</div>
							<div className="text-center">$57.99</div>
						</div>
					</section>
					<section className="p-6 bg-newpurple-100 rounded-r-lg border-l border-newpurple-300">
						<div className="sticky top-0">
							<h2 className="mb-8 text-3xl font-semibold">Summary</h2>
							<div className="flex justify-between mb-4">
								<p>Subtotal</p>
								<p>$99.96</p>
							</div>
							<div className="flex justify-between mb-4">
								<p>Shipping</p>
								<p>$15.00</p>
							</div>
							<div className="flex justify-between mb-4">
								<p>Tax</p>
								<p>$8.42</p>
							</div>
							<div className="flex justify-between mt-20 mb-4 text-xl">
								<p>Total</p>
								<p className="font-semibold">$123.38</p>
							</div>
							<div className="mt-8">
								<p className="button block w-full text-center font-semibold tracking-wide checkout">
									Check Out <FaAngleRight className="inline-block -mt-[2px] h-5 w-5" />
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
