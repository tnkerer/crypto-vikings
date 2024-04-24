'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

type NavbarProps = {
  activeRoute: string;
};

const Navbar: React.FC<NavbarProps> = ({ activeRoute }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"/"}>
        <div className={styles.logo}>
          <Image
            width={105}
            height={65}
            src={"/assets/brand/logo.svg"}
            alt="Logo"
          />
        </div>
      </Link>

      <div className={styles.optionsContainer}>
        <Link className={styles.link} href={"/game"}>
          <div
            className={`${styles.option} ${
              activeRoute === "/game" ? styles.active : ""
            }`}
          >
            Gaming
          </div>
        </Link>

        <Link className={styles.link} href={"/game/leaderboard"}>
          <div
            className={`${styles.option} ${
              activeRoute === "/game/leaderboard" ? styles.active : ""
            }`}
          >
            Leaderboard
          </div>
        </Link>

        <Link className={styles.link} href={"/game/marketplace"}>
          <div
            className={`${styles.option} ${
              activeRoute === "/game/marketplace" ? styles.active : ""
            }`}
          >
            Marketplace
          </div>
        </Link>

        <Link target="_blank" className={styles.link} href={"https://docs.cryptovikings.gg/"}>
          <div className={styles.option}>Whitepaper</div>
        </Link>
      </div>

      <div className={styles.walletContainer}>
        <div className={styles.info}>
          <Image
            className={styles.coin}
            width={28}
            height={28}
            src={"/assets/icons/coin.svg"}
            alt="Coin"
          />
          <div className={styles.text}>Coin: {200}</div>
        </div>

        <div className={styles.info}>
          <Image
            width={20}
            height={20}
            src={"/assets/icons/wallet.svg"}
            alt="Wallet"
          />
          <div className={styles.text}>{"0x89384589463643634675200"}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;