import Link from 'next/link';
import plant from '../public/img/plant1.png';
import Plants from '../components/Plants';

export default function Card() {
	const allPlants = Plants();
	const plantCards = allPlants.map((plant, i) => (
		<Link href={`/shop/${plant.name}`} scroll={false} className="flex flex-col justify-between mt-20 py-6 px-6 rounded-xl shadow-lg hover:shadow border-2 border-transparent hover:border-newpurple-900 bg-newgreen-500 text-newpurple-950 text-center group transition-all ease-in-out duration-200" key={i}>
			<img src={`/img/${plant.imgFile}`} alt={`Photo of ${plant.name}`} className="-mt-20 h-64 w-auto mx-auto" />
			<h3 className="my-4 font-semibold text-lg">{plant.name}</h3>
			<p className="mb-4 font-bold tracking-widest text-5xl">{plant.price}</p>
			<p>{plant.desc}</p>
			<p className="button mt-6 flex-shrink mx-auto group-hover:bg-newpurple-950">VIEW PLANT</p>
		</Link>
	));

	return plantCards;
}
