import { useState, useRef } from 'react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
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
	const cardVariants = {
		hover: {
			rotateZ: '-2deg',
			scale: 1.1,
		},
		initial: {
			rotateZ: 0,
			scale: 1,
		},
	};

	const [isHovered, setIsHovered] = useState(0);
	function handleMouseLeave() {
		setIsHovered('');
	}

	const divControls = useAnimationControls();

	const mainRef = useRef(null);
	const coverRef = useRef(null);

	const handleClick = () => {
		divControls.start({
			opacity: [0, 1],
			zIndex: [0, 20],
			transition: {
				duration: 0.4,
			},
		});
		mainRef.current.classList.add('blurred');
		coverRef.current.classList.add('cover');
	};

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	const closeAni = async event => {
		divControls.start({
			opacity: [1, 0],
			zIndex: [20, 0],
			transition: {
				duration: 0.2,
			},
		});
		await delay(150);
		onEnd();
	};

	function onEnd() {
		mainRef.current.classList.remove('blurred');
		coverRef.current.classList.remove('cover');
	}

	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center p-24" ref={mainRef}>
				<div className="w-full grid grid-cols-3 gap-x-4 justify-between mt-20 rounded-xl shadow-lg bg-white text-newpurple-950">
					<section className="col-span-2 p-6 rounded-lg bg-white">
						<h1 className="mb-8 text-3xl font-semibold">Your Cart</h1>
						<motion.div className="grid grid-cols-4 items-start mb-12 py-4" key={1} onMouseEnter={() => setIsHovered(1)} onMouseLeave={handleMouseLeave}>
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<div className="col-span-2 p-2 border border-newpurple-200 rounded-lg bg-newpurple-100">
									<motion.div className="col-span-2" variants={cardVariants} animate={isHovered === 1 ? 'hover' : 'initial'} transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }} key={1}>
										<Image src={plant1} alt="Photo of a plant" className="block" />
									</motion.div>
								</div>
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
						</motion.div>
						<motion.div className="grid grid-cols-4 items-start mb-12 py-4" key={2} onMouseEnter={() => setIsHovered(2)} onMouseLeave={handleMouseLeave}>
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<div className="col-span-2 p-2 border border-newpurple-200 rounded-lg bg-newpink-100">
									<motion.div className="col-span-2" variants={cardVariants} animate={isHovered === 2 ? 'hover' : 'initial'} transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }} key={2}>
										<Image src={plant2} alt="Photo of a plant" className="block max-h-56 object-scale-down" />
									</motion.div>
								</div>
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
						</motion.div>
						<motion.div className="grid grid-cols-4 items-start mb-12 py-4" key={3} onMouseEnter={() => setIsHovered(3)} onMouseLeave={handleMouseLeave}>
							<div className="col-span-2 grid grid-cols-3 gap-x-4 items-start">
								<div className="col-span-2 p-2 border border-newpurple-200 rounded-lg bg-newpurple-100">
									<motion.div className="col-span-2" variants={cardVariants} animate={isHovered === 3 ? 'hover' : 'initial'} transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }} key={3}>
										<Image src={plant3} alt="Photo of a plant" className="block max-h-56 object-scale-down" />
									</motion.div>
								</div>
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
							<div className="text-center">$57.99</div>
						</motion.div>
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
								<p className="button block w-full text-center font-semibold tracking-wide checkout" onClick={handleClick}>
									Check Out <FaAngleRight className="inline-block -mt-[2px] h-5 w-5" />
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
			<motion.div animate={divControls} className="hidden" ref={coverRef}>
				<div className="flex justify-center items-center p-12 ml-28 text-left text-newpurple-950 cursor-pointer" onClick={closeAni}>
					<h3 className="text-9xl font-semibold">
						If this were a real store, you’d be checking out right now!
						<span className="inline-block ml-8 text-xl font-normal">[Okay, click anywhere to close this.]</span>
					</h3>
				</div>
			</motion.div>
		</Layout>
	);
}
