import React, { Component } from 'react';
import styles from './ThxDrawer.module.scss'

export default class ThxDrawer extends Component {
    render() {
        return (
            <div className={`${styles['thx-drawer']} ${styles.flex}`}>
          <div className={styles['main-title']}>
            Profile List
          </div>
          <div id="profileWrapper" className={`${styles['drawer-select']} ${styles.flex}`}>
            <div id="profileList" className={styles.scrollable}>
              <div id="profile1" className={`${styles['profile-item']} ${styles.active} ${styles.default} ${styles['no-edit']}`}>
                default
              </div>
              <div id="profile2" className={`${styles['profile-item']} ${styles.game} ${styles['no-edit']}`}>game</div>
              <div id="profile3" className={`${styles['profile-item']} ${styles.movie} ${styles['no-edit']}`}>movie</div>
							<div id="profile4" className={`${styles['profile-item']} ${styles.music} ${styles['no-edit']}`}>music</div>
              <div id="custom1" className={`${styles['profile-item']} ${styles.custom}`}>Custom 1</div>
              <div id="custom2" className={`${styles['profile-item']} ${styles.custom}`}>
                demo long text demo long text demo
              </div>
              <input
                id="profileRename"
                className={styles['profile-item']}
                placeholder="Enter Profile Name"
                maxlength="25"
              />
            </div>
            <div className={`${styles.toolbar} ${styles.flex}`}>
              <div className={`${styles.icon} ${styles.add}`} id="profileAdd"></div>
              <div className={`${styles.icon} ${styles.edit}`} id="profileEdit"></div>
              <div className={`${styles.icon} ${styles.delete}`} id="profileDelete"></div>
              <div className={`${styles.icon} ${styles.down}`} id="profileDown"></div>

              <div className={`${styles.icon} ${styles.up} ${styles.disabled}`} id="profileUp"></div>

            </div>
            <div id="profileDelCfm" className={`${styles['profile-del']} ${styles.alert} ${styles.flex}`}>
              <div className={`${styles} ${styles.title}`}>delete eq</div>
              <div className={`${styles['body-text']} ${styles['t-center']}`} id="delName">delete eq</div>
              <div className={styles['thx-btn']} id="cfmDelete">delete</div>
            </div>
          </div>
        </div>
        )
    }
}
