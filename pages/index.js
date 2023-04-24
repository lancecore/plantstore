import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Store from '../components/Store';

export default function Home() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<Hero />
				<Store items={3} />
			</main>
		</Layout>
	);
}
