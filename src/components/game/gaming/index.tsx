import React from 'react'

import styles from './styles.module.scss'
import GameNav from './components/game-nav'

type Props = {}

const GamingComponent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.banner} />

      <div className={styles.gameNav}>
        <GameNav />
      </div>

      <div className={styles.contentContainer}>
        {

        }
      </div>
    </div>
  )
}

export default GamingComponent