import React from 'react'

import styles from './styles.module.scss'
import BattleCard from './components/BattleCard'

type Props = {}

const BattleContent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        <BattleCard name='Jorge' id='123457' type='Human' rarity='Common' life='30/30' deathChance='40%' battleReward='120.5' imagePath='/assets/warriors/jorge.gif'  />
        <BattleCard name='Jorge' id='123457' type='Human' rarity='Common' life='30/30' deathChance='40%' battleReward='120.5' imagePath='/assets/warriors/jorge.gif'  />
        <BattleCard name='Jorge' id='123457' type='Human' rarity='Common' life='30/30' deathChance='40%' battleReward='120.5' imagePath='/assets/warriors/jorge.gif'  />
        <BattleCard name='Jorge' id='123457' type='Human' rarity='Common' life='30/30' deathChance='40%' battleReward='120.5' imagePath='/assets/warriors/jorge.gif'  />
        <BattleCard name='Jorge' id='123457' type='Human' rarity='Common' life='30/30' deathChance='40%' battleReward='120.5' imagePath='/assets/warriors/jorge.gif'  />
      </div>
    </div>
  )
}

export default BattleContent