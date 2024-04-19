'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import { Howl } from 'howler'

import styles from "./styles.module.scss";

const sound = new Howl({
  src: ['/sounds/bgsound.mp3'],
  autoplay: false,
  loop: true,
  volume: 0.02,
});

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    sound.mute(isMuted);
  }, [isMuted]);

  const toggleSound = () => {
    if (isPlaying) {
      sound.stop();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSoundButtonClick = () => {
    setIsMuted(!isMuted);
    toggleSound();
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.sound} onClick={handleSoundButtonClick}>
          <Image width={20} height={12} src={isPlaying == false ? 'assets/icons/mute.svg' : 'assets/icons/sound.svg'} alt='Logo' />
        </div>
      </div>

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
            Remember, the thrill doesn&apos;t stop here. Join our Discord community and dive into our Whitepaper to stay updated on all things Viking. For sneak peeks and exclusive updates, follow us on Twitter. Get ready to conquer realms and rewrite sagas in CryptoVikings!
          </div>

          <div className={styles.buttons}>
            <div className={styles.button}>
              <Image width={25} height={25} src={'assets/social/discord.svg'} alt='Discord' />

              <div className={styles.text}>
                Join Discord
              </div>
            </div>

            <div className={styles.button}>
              <Image width={25} height={25} src={'assets/social/whitepaper.svg'} alt='Discord' />

              <div className={styles.text}>
                Whitepaper
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.rights}>
          Copyright © 2024 CryptoVikings - All rights reserved.
        </div>

        <div className={styles.socialContainer}>
          <div className={styles.social}>
            <Image width={25} height={25} src={'assets/social/discord.svg'} alt='Social' />
          </div>

          <div className={styles.social}>
            <Image width={25} height={25} src={'assets/social/x.svg'} alt='Social' />
          </div>

          <div className={styles.social}>
            <Image width={25} height={25} src={'assets/social/telegram.svg'} alt='Social' />
          </div>
        </div>
      </div>
    </div>
  );
}
