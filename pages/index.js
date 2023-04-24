import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Store from '../components/Store';
import Info from '../components/Info';
import { FaAngleRight } from 'react-icons/fa';

export default function Home() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<Hero />
				<h2 className="mt-32 -mb-12 w-full text-7xl font-bold text-newgreen-100 text-center">Featured Plants</h2>
				<Store items={3} />
				<p>
					<Link href="/shop" scroll={false} className="button bigbutton flex items-center">
						Shop All Plants <FaAngleRight className="inline-block -mt-[2px] h-5 w-5" />
					</Link>
				</p>
				<Info />
			</main>
		</Layout>
	);
}
