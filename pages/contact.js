import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
	return (
		<Layout>
			<main className="flex min-h-screen flex-col items-center p-24">
				<div className="mb-12 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<p>Page two</p>
					<p>
						<Link href="/" scroll={false}>
							Back home
						</Link>
					</p>
				</div>
				<div className="py-12 px-12 bg-white border-slate-100 shadow rounded-lg">
					<Image className="relative" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
				</div>
			</main>
		</Layout>
	);
}
