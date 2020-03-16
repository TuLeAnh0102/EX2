import React, { Component } from 'react';
import styles from './ThxWrapper.module.scss'

export default class ThxWindow extends Component {
    render() {
        return (
            <div className={styles['thx-window']}>
                <div className={`${styles['sub-title']} ${styles.flex}`}>
                    <h1 id="eqTitle" className={styles['eq-title']}>Default</h1>
                </div>
            </div>
        )
    }
}
