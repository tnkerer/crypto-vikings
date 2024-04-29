import React, { useState } from "react";

import styles from "./styles.module.scss";
import Image from "next/image";
import InventoryPopup from "../InventoryPopup";

type Props = {
  name: string;
  imagePath: string;
  id: string;
  type: string;
  rarity: string;
  life: string;
  deathChance: string;
  battleReward: string;
};

const BattleCard = ({ name, battleReward, deathChance, id, imagePath, life, rarity, type }: Props) => {
  const [battleState, setBattleState] = useState(false)
  const [battleTime, setBattleTime] = useState('12:00')
  const [favorited, setFavorited] = useState(false)
  const [inventoryPopup, setInventoryPopup] = useState(false)

  return (
    <>
      {inventoryPopup &&
        <InventoryPopup />
      }

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.name}>{name}</div>

          <div className={styles.options}>
            <div className={styles.option}>
              <Image
                width={20}
                height={20}
                src={"assets/icons/edit.svg"}
                alt="Edit"
              />
            </div>

            <div className={styles.option} onClick={() => setFavorited(!favorited)}>
              <Image
                width={20}
                height={20}
                src={favorited == false ? "assets/icons/favorite.svg" : 'assets/icons/favorited.svg'}
                alt="Favorite"
              />
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <Image className={styles.img} src={imagePath} alt="Warrior" width={250} height={250} />
        </div>

        <div className={styles.warriorInfo}>
          <div className={styles.info}>
            <div className={styles.name}>
              ID:
            </div>

            <div className={styles.value}>
              {id}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              Type:
            </div>

            <div className={styles.value}>
              {type}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              Rarity:
            </div>

            <div className={styles.common}>
              {rarity}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              Life:
            </div>

            <div className={styles.value}>
              {life}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              Death Chance:
            </div>

            <div className={styles.value}>
              {deathChance}
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.name}>
              Battle Reward:
            </div>

            <div className={styles.reward}>
              <Image src={'assets/icons/reward.svg'} alt="Reward" width={27} height={20} />
              {battleReward}
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => setInventoryPopup(true)}>
            <div className={styles.icon}>
              <Image src={'assets/icons/inventory.svg'} alt="Inventory" width={24} height={24} />
            </div>

            <div className={styles.text}>
              Inventory
            </div>

            <div />
          </div>

          <div style={battleState ? { background: 'rgba(25, 25, 25, 0.50)' } : {}} className={styles.button} onClick={() => setBattleState(true)}>
            <div className={styles.icon}>
              {battleState == true ?
                <Image src={'assets/icons/locked.svg'} alt="Locked" width={24} height={24} />
              :
                <Image src={'assets/icons/battle.svg'} alt="Battle" width={24} height={24} />
              }
            </div>

            <div className={styles.text}>
              {battleState == false ?
                'Battle'
              :
                'Wait'
              }
              </div>

            <div className={styles.confirm}>
              {battleState == true ?
                <div>{battleTime}</div>
              :
                <Image src={'assets/icons/check.svg'} alt="Check" width={24} height={24} />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleCard;
