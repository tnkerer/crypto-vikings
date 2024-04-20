'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import AudioPlayer from 'react-audio-player';

import styles from "./styles.module.scss";
import Link from "next/link";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSoundButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      {
        isPlaying && (
          <AudioPlayer
            src="./sounds/bgsound.mp3"
            autoPlay={isPlaying}
            volume={0.1}
          />
        )
      }
      <div className={styles.navbar}>
        <div className={styles.sound} onClick={handleSoundButtonClick}>
          <Image width={20} height={12} src={isPlaying == false ? 'assets/icons/mute.svg' : 'assets/icons/sound.svg'} alt='Logo' />
        </div>
      </div>

      <div className={styles.snow} />

      <div />

      <div className={styles.centerContainer}>
        <div className={styles.logoContainer}>
          <Image width={300} height={190} src={'assets/brand/logo.svg'} alt='Logo' />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.title}>
            Launching Soon...
          </div>

          <div className={styles.description}>
            Get ready for a legendary journey! Welcome to CryptoVikings, the Play-to-Earn Click Game with strategy that will transport you to a unique world. Build, Fight and collect epic Rewards. Join our Discord Community and explore our Whitepaper! I&apos;ll see you there.
          </div>

          <div className={styles.buttons}>
            <Link target="_blank" href={'https://discord.com/invite/cryptovikings'}>
              <div className={styles.button}>
                <Image width={25} height={25} src={'assets/social/discord.svg'} alt='Discord' />

                <div className={styles.text}>
                  Join Discord
                </div>
              </div>
            </Link>

            <Link target="_blank" href={'https://docs.cryptovikings.gg/'}>
              <div className={styles.button}>
                <Image width={25} height={25} src={'assets/social/whitepaper.svg'} alt='Discord' />

                <div className={styles.text}>
                  Whitepaper
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.rights}>
          Copyright © 2024 CryptoVikings - All rights reserved.
        </div>

        <div className={styles.socialContainer}>
          <Link target="_blank" href={'https://discord.com/invite/cryptovikings'}>
            <div className={styles.social}>
              <Image width={25} height={25} src={'assets/social/discord.svg'} alt='Social' />
            </div>
          </Link>

          <Link target="_blank" href={'https://twitter.com/CryptoVikingsGG'}>
            <div className={styles.social}>
              <Image width={25} height={25} src={'assets/social/x.svg'} alt='Social' />
            </div>
          </Link>

          <Link target="_blank" href={'https://t.me/OfficialCryptoVikings'}>
            <div className={styles.social}>
              <Image width={25} height={25} src={'assets/social/telegram.svg'} alt='Social' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
