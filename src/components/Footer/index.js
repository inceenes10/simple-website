import React from 'react';
import styles from './styles.module.sass';

class Footer extends React.Component {

    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.hero}>
                    <ul>
                        <h3>İş Ortaklarımız</h3>
                        <li>Google</li>
                        <li>Apple</li>
                        <li>Amazon</li>
                    </ul>
                    <ul>
                        <h3>İş Ortaklarımız</h3>
                        <li>Google</li>
                        <li>Apple</li>
                        <li>Amazon</li>
                    </ul>
                    <ul>
                        <h3>İş Ortaklarımız</h3>
                        <li>Google</li>
                        <li>Apple</li>
                        <li>Amazon</li>
                    </ul>
                    <ul>
                        <h3>İş Ortaklarımız</h3>
                        <li>Google</li>
                        <li>Apple</li>
                        <li>Amazon</li>
                    </ul>
                </div>
                <div className={styles['copy-right']}>
                    Enes ince &copy; All rights reserved
                </div>
            </footer>
        )
    }

}

export default Footer;