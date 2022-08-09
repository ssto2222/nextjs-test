import Link from "next/link";
import * as style from "../styles/common.module.scss";
function Header() {
  return (
    <header className={style.headerWrapper}>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <Link href="/">
            <a>
              <img
                src="/images/logo_yandmo.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
