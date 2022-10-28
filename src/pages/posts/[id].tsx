import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface IPost {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

{
  /**
   * TODO: Review @tailwindcss/typography plugin color scheme for light and dark mode
   * - https://tailwindcss.com/docs/typography-plugin
   * - https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes
   */
}

export default function Post({ postData }: IPost) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="font-bold text-2xl">{postData.title}</h1>
      <Date dateString={postData.date} />
      <article
        className="prose text-white dark:text-midnightBlue"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};
