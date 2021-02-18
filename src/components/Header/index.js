import React from 'react';
import styles from './styles.module.sass';
// import { Grid } from '@material-ui/core';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <header>
                <div className={styles.logo}>
                    <img src="https://denkmallistewuppertal.de/static/denkmal2.png" alt="logo" height={80}/>
                </div>
                <h2 className={styles.title}>
                    Denkmalliste <span>Wuppertal</span>
                </h2>
                <div></div>
            </header>
        )
    }
}

export default Header;