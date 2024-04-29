'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

type Props = {
  navState: (navState: string) => void;
}

const GameNav = ({ navState }: Props) => {
  const [navigation, setNavigation] = useState('battle')

  useEffect(() => {
    navState(navigation)
  }, [navigation, navState])

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {navigation === 'battle' ? <div>Warriors: 5</div> : null}
        {navigation === 'runes' ? <div>Runes: 5</div> : null}
        {navigation === 'dragons' ? <div>Dragons: 5</div> : null}
        {navigation === 'staking' ? <div></div> : null}
        {navigation === 'shop' ? <div></div> : null}
      </div>

      <div className={styles.navigationContainer}>
        <div onClick={() => setNavigation('battle')} className={navigation == 'battle' ? styles.active : styles.option}>
          Battle
        </div>

        <div onClick={() => setNavigation('runes')} className={navigation == 'runes' ? styles.active : styles.option}>
          Runes
        </div>

        <div onClick={() => setNavigation('dragons')} className={navigation == 'dragons' ? styles.active : styles.option}>
          Dragons
        </div>

        <div onClick={() => setNavigation('staking')} className={navigation == 'staking' ? styles.active : styles.option}>
          Staking
        </div>

        <div onClick={() => setNavigation('shop')} className={navigation == 'shop' ? styles.active : styles.option}>
          Shop
        </div>
      </div>

      <div className={styles.filterContainer}>
        {navigation == 'shop' ? null : 
          <div className={styles.filter}>
            Filter <Image src={'/assets/icons/downarrow.svg'} width={15} height={15} alt='Arrow' />
          </div>
        }
      </div>
    </div>
  )
}

export default GameNav