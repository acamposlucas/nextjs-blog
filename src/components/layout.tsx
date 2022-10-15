import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PaintBrush } from "phosphor-react";

const name = "Lucas";
export const siteTitle = "leifoleifo.dev";

interface ILayout {
	children: React.ReactNode;
	home?: boolean;
}

export default function Layout({ children, home }: ILayout) {
	return (
		<div className="w-11/12 max-w-7xl py-4 mx-auto mt-12 mb-24 relative">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="This is my personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<button type="button" className="absolute right-4 top-2">
				<PaintBrush
					size={32}
					weight={"light"}
					className="hover:text-red-500 hover:transition-colors"
				/>
			</button>
			<header className="text-center">
				{home ? (
					<>
						<Image
							priority
							src="/assets/profile.jpg"
							className="rounded-full"
							height={108}
							width={108}
							alt=""
						/>
						<h1 className="text-2xl font-bold">{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/assets/profile.jpg"
									className="rounded-full"
									height={108}
									width={108}
									alt=""
								/>
							</a>
						</Link>
						<h2 className="">
							<Link href="/">
								<a className="">{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main className="py-12">
				{children}
				{!home && (
					<Link href="/">
						<a>Back to home</a>
					</Link>
				)}
			</main>
		</div>
	);
}
