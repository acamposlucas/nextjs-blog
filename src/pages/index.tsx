import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Image from "next/image";

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
      <div className="flex flex-col gap-8">
        <section className="text-center">
          <p>Hello! My name is Lucas and I'm a Frontend developer</p>
          <p>This is my personal blog where I post about my study notes</p>
        </section>
        <section>
          <h2 className="mb-4 font-bold text-2xl">Blog</h2>
          <ul className="flex flex-col gap-4">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a className="text-lg">{title}</a>
                </Link>
                <small className="block">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-4 font-bold text-2xl">Projects</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/">
              <a className="relative flex max-w-md flex-col overflow-hidden rounded-md bg-white shadow-md">
                <Image
                  className="transition-transform duration-200 hover:scale-110"
                  src="/assets/spacetourism.jpg"
                  width={504}
                  height={282}
                />
                <div className="flex flex-col p-4">
                  <h3 className="text-midnightBlue text-lg">
                    Spacial Tourism Website
                  </h3>
                  <p className="text-midnightBlue text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure, tenetur.
                  </p>
                  <ul className="flex gap-4 text-midnightBlue">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </div>
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
