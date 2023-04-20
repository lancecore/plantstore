import Layout from '../../components/Layout';
import { plants } from '../../components/Plants';
import parse from 'html-react-parser';

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
	return (
		<Layout>
			<main className="min-h-screen p-24">
				<h1 className="w-full mb-12 ml-1 text-7xl font-bold text-newgreen-100">{plant.name}</h1>
				<div className="grid grid-cols-2 gap-x-8 py-6 px-6 rounded-xl shadow-lg  border-2 border-newpurple-800 bg-newgreen-500 text-newpurple-950 text-center group transition-all ease-in-out duration-200 overflow-x-visible">
					<img src={`/img/${plant.imgFile}`} alt={`Photo of ${plant.name}`} className="-mt-20 w-auto h-[40rem] mx-auto" />
					<section className="flex flex-col justify-between">
						<p>{parse(plant.longerDesc)}</p>
						<p className="mb-4 font-bold tracking-widest text-5xl">{plant.price}</p>
						<p className="button mt-6 flex-shrink mx-auto hover:bg-newpurple-950">ADD TO CART</p>
					</section>
				</div>
			</main>
		</Layout>
	);
}
