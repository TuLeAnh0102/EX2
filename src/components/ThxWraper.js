import React, { Component } from 'react'
import styles from './ThxWrapper.module.scss'
import ThxDrawer from './ThxDrawer'
import ThxWindow from './ThxWindow'

export default class ThxWraper extends Component {
    render() {
        return (
            <div className={styles['main-container']}>
                <div className={`${styles['thx-wrapper']}  ${styles.flex}`}>
                    <ThxDrawer />
                    <ThxWindow />
                </div>
            </div>
        )
    }
}
