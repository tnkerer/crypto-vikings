'use client'

import React, { useState } from 'react'

import styles from './styles.module.scss'
import GameNav from './components/game-nav'
import BattleContent from './components/content/battle'

type Props = {}

const GamingComponent = (props: Props) => {
  const [navigationState, setNavigationState] = useState('')

  return (
    <div className={styles.container}>
      <div className={styles.banner} />

      <div className={styles.gameNav}>
        <GameNav navState={(state) => setNavigationState(state)} />
      </div>

      <div className={styles.contentContainer}>
        {navigationState == 'battle' ?
          <BattleContent /> : null
        }

        {navigationState == 'runes' ?
          <BattleContent /> : null
        }

        {navigationState == 'dragons' ?
          <BattleContent /> : null
        }

        {navigationState == 'staking' ?
          <BattleContent /> : null
        }

        {navigationState == 'shop' ?
          <BattleContent /> : null
        }
      </div>
    </div>
  )
}

export default GamingComponent