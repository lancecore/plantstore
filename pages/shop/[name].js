import { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
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
	const divControls = useAnimationControls();

	const mainRef = useRef(null);

	const handleClick = () => {
		divControls.start({
			scale: [1, 2, 2, 2, 1],
			opacity: [1, 1, 1, 1, 1, 0],
			rotateZ: [360, 0, 0, 360],
			transition: {
				duration: 1.4,
			},
		});
		mainRef.current.classList.add('blurred');
	};

	function onEnd() {
		mainRef.current.classList.remove('blurred');
	}

	return (
		<Layout>
			<main className="min-h-screen p-24" ref={mainRef}>
				<h1 className="w-full mb-12 ml-1 text-7xl font-bold text-newgreen-100">{plant.name}</h1>
				<div className="grid grid-cols-2 gap-x-8 py-6 px-6 rounded-xl shadow-lg  border-2 border-newpurple-800 bg-newgreen-100 text-newpurple-950 text-center group transition-all ease-in-out duration-200 overflow-x-visible">
					<img src={`/img/${plant.imgFile}`} alt={`Photo of ${plant.name}`} className="-mt-20 w-auto h-[40rem] mx-auto" />
					<section className="flex flex-col justify-between">
						<p>{parse(plant.longerDesc)}</p>
						<p className="mb-4 font-bold tracking-widest text-5xl">${plant.price}</p>
						<motion.p className="button addtocart mt-6 flex-shrink mx-auto" onClick={handleClick}>
							ADD TO CART
						</motion.p>
					</section>
				</div>
			</main>
			<motion.div className="absolute top-[50%] left-[50%] opacity-0" animate={divControls} onAnimationComplete={onEnd}>
				<Check className="h-24 w-24 text-newgreen-700 z-10 blur-none" />
			</motion.div>
		</Layout>
	);
}
