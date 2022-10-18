import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PaintBrush } from "phosphor-react";

const name = "Lucas";
export const siteTitle = "leifoleifo.dev";

interface ILayout {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: ILayout) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-zinc-200 text-stone-900 transition-colors duration-700 ease-in-out dark:bg-stone-900 dark:text-zinc-200">
      <div className="relative mx-auto mb-24 w-11/12 max-w-7xl py-12">
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
        <button
          type="button"
          onClick={handleToggleTheme}
          className="absolute right-4 top-12"
        >
          <PaintBrush
            size={32}
            weight={"light"}
            className="hover:transition-colors"
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
              <h1 className="font-bold text-2xl">{name}</h1>
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
    </div>
  );
}
