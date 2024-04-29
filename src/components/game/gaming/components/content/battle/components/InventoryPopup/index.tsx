import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

type Props = {}

const InventoryPopup = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div className={styles.title}>
            Inventory
          </div>

          <div className={styles.close}>
            <Image src={'assets/icons/close.svg'} alt='Close' width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InventoryPopup