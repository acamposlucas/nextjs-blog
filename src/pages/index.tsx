import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

interface IHome {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}

export default function Home({ allPostsData }: IHome) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-center">
				<p>Hello! My name is Lucas and I'm a Frontend developer</p>
				<p>This is my personal blog where I post about my study notes</p>
			</section>
			<section>
				<h2 className="text-2xl font-bold mb-4">Blog</h2>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<small className="block">
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
};
