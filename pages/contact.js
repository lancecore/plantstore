import { useState, useRef } from 'react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import Layout from '../components/Layout';
import { FaAngleRight } from 'react-icons/fa';
import { HiOutlineCheckBadge as Check } from 'react-icons/hi2';

export default function About() {
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

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	const handleClick = async () => {
		divControls.start({
			opacity: [0, 1],
			zIndex: [0, 20],
			transition: {
				duration: 0.4,
			},
		});
		mainRef.current.classList.add('blurred');
		coverRef.current.classList.add('cover');
		await delay(1000);
		closeAni();
	};

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
			<main className="flex min-h-screen flex-col items-center justify-between p-24" ref={mainRef}>
				<h1 className="w-full mb-12 text-7xl font-bold text-newgreen-100 text-center">Get In Touch</h1>
				<section>
					<form className="md:max-w-3xl mx-auto grid grid-cols-2 gap-x-6 justify-start items-start">
						<div>
							<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-newpurple-950">
								First name
							</label>
							<div className="mt-2">
								<input type="text" name="first-name" id="first-name" autoComplete="family-name" className="w-full rounded-md border-0 px-3.5 py-2 text-newpurple-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-800 sm:text-sm sm:leading-6" />
							</div>
						</div>
						<div>
							<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-newpurple-950">
								Last name
							</label>
							<div className="mt-2">
								<input type="text" name="last-name" id="last-name" autoComplete="given-name" className="w-full rounded-md border-0 px-3.5 py-2 text-newpurple-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-800 sm:text-sm sm:leading-6" />
							</div>
						</div>
						<div className="mt-12 md:col-span-2">
							<label htmlFor="email" className="block text-sm font-semibold leading-6 text-newpurple-950">
								Email
							</label>
							<div className="mt-2">
								<input type="email" name="email" id="email" autoComplete="email" className="w-full rounded-md border-0 px-3.5 py-2 text-newpurple-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-800 sm:text-sm sm:leading-6" />
							</div>
						</div>
						<div className="mt-12 md:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-newpurple-950">
								Message
							</label>
							<div className="mt-2">
								<textarea name="message" id="message" rows={6} className="w-full rounded-md border-0 px-3.5 py-2 text-newpurple-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-800 sm:text-sm sm:leading-6" defaultValue={''} />
							</div>
						</div>
						<div className="mt-8">
							<p className="button block w-full text-center font-semibold tracking-wide checkout" onClick={handleClick}>
								Send message <FaAngleRight className="inline-block -mt-[2px] h-5 w-5" />
							</p>
						</div>
					</form>
				</section>
			</main>
			<motion.div animate={divControls} className="hidden" ref={coverRef}>
				<div className="flex justify-center items-center p-12 ml-28 text-left text-newpurple-950 cursor-progress">
					<h3 className="text-9xl font-semibold">Your message has been sent!</h3>
				</div>
			</motion.div>
		</Layout>
	);
}
