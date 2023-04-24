import { useState, useRef } from 'react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import Layout from '../../components/Layout';
import { plants } from '../../components/Plants';
import parse from 'html-react-parser';
import { HiOutlineCheckBadge as Check } from 'react-icons/hi2';

export const getStaticProps = async ({ params }) => {
	const allPlants = plants.filter(plant => {
		return plant.name === params.name;
	});
	return {
		props: {
			plant: allPlants[0],
		},
	};
};

export const getStaticPaths = async () => {
	const paths = plants.map(plant => ({
		params: { name: plant.name },
	}));
	return { paths, fallback: false };
};

export default function SinglePlant({ plant }) {
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

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	const divControls = useAnimationControls();
	const checkControls = useAnimationControls();

	const mainRef = useRef(null);
	const coverRef = useRef(null);

	const handleClick = async () => {
		divControls.start({
			opacity: [0, 1],
			zIndex: [0, 20],
			transition: {
				duration: 0.4,
			},
		});
		checkControls.start({
			scale: [0, 2],
			opacity: [0, 1],
			rotateZ: [0, 360],
			transition: {
				duration: 0.4,
			},
		});
		mainRef.current.classList.add('blurred');
		coverRef.current.classList.add('cover');
		await delay(800);
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
		checkControls.start({
			scale: [2, 0],
			opacity: [1, 0],
			rotateZ: [360, 0],
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
			<main className="min-h-screen p-24" ref={mainRef}>
				<h1 className="w-full mb-12 ml-1 text-7xl font-bold text-newgreen-100">{plant.name}</h1>
				<div className="grid grid-cols-2 gap-x-8 py-6 px-6 rounded-xl shadow-lg  border-2 border-newpurple-800 bg-newgreen-100 text-newpurple-950 group transition-all ease-in-out duration-200 overflow-x-visible">
					<motion.div
						whileHover={{
							rotateZ: '-2deg',
							scale: 1.1,
						}}
						transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
					>
						<img src={`/img/${plant.imgFile}`} alt={`Photo of ${plant.name}`} className="-mt-20 w-auto h-[40rem] mx-auto" />
					</motion.div>
					<section className="flex flex-col justify-between">
						<div className="longdesc flex flex-col gap-y-4 text-lg">{parse(plant.longerDesc)}</div>
						<p className="mt-8 font-bold tracking-widest text-5xl">${plant.price}</p>
						<motion.div
							className="self-start"
							whileHover={{
								scale: 1.1,
								rotateZ: '1deg',
								x: 10,
								y: -5,
							}}
							transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
						>
							<p className="button addtocart mt-6 flex-shrink w-auto" onClick={handleClick}>
								ADD TO CART
							</p>
						</motion.div>
					</section>
				</div>
			</main>
			<motion.div animate={divControls} className="hidden" ref={coverRef}>
				<div className="flex justify-center items-center p-12 ml-28 text-left text-newpurple-950 cursor-progress">
					<motion.div animate={checkControls}>
						<Check className="h-48 w-48 text-newgreen-700 z-10" />
					</motion.div>
				</div>
			</motion.div>
		</Layout>
	);
}
