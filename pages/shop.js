import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '../components/Layout';
import Store from '../components/Store';

export default function Shop() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<h1 className="w-full text-7xl font-bold text-newgreen-100 text-center">Shop All Plants</h1>
				<Store />
			</main>
		</Layout>
	);
}
