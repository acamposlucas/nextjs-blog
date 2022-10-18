import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaintBrush } from "phosphor-react";

interface IHeader {
  home?: boolean;
  handleToggleTheme: () => void;
}

const name = "lucas";

export const Header = ({ home, handleToggleTheme }: IHeader) => {
  const router = useRouter();

  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {home ? (
            <>
              <Image
                priority
                src="/assets/profile.jpg"
                className="rounded-full"
                height={72}
                width={72}
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
                    height={72}
                    width={72}
                    alt=""
                  />
                </a>
              </Link>
              <h2 className="font-bold text-2xl">
                <Link href="/">
                  <a className="">{name}</a>
                </Link>
              </h2>
            </>
          )}
        </div>
        <div className="flex gap-8">
          <nav>
            <ul className="flex gap-8">
              {[
                ["Blog", "/"],
                ["Projects", "/projects"],
                ["About me", "/about"],
              ].map(([title, url]) => (
                <li>
                  <Link href={url}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" onClick={handleToggleTheme} className="">
            <PaintBrush
              size={32}
              weight={"light"}
              className="hover:transition-colors"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
