import Link from "next/link";
import * as style from "../styles/common.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href="https://www.google.com">
          <Image src="/images/github.svg" alt="logo" height={50} width={50} />
        </a>
        <a href="https://www.google.com">
          <Image src="/images/linkedin.svg" alt="logo" height={50} width={50} />
        </a>
        <a href="https://www.google.com">
          <Image src="/images/twitter.svg" alt="logo" height={50} width={50} />
        </a>
        <a href="https://www.google.com">
          <Image src="/images/facebook.svg" alt="logo" height={50} width={50} />
        </a>
        <hr />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <p>©️{new Date().getFullYear()} Tech 2 Metail</p>
      </div>
    </footer>
  );
};

export default Footer;
