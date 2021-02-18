import React from 'react';
import styles from './styles.module.sass';
import { Input, Button } from '@material-ui/core';

class Hero extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles['hero-container']}>
                <div className={styles['text-section']}>
                   <div className={styles.container}>
                       <h1 className={styles.title}>Daten und Fakten</h1>
                       <p>Die Stadt Wuppertal liegt östlich der nordrhein-westfälischen Landeshauptstadt
                           Düsseldorf und südlich des Ruhrgebietes. Mit 362.000 Einwohnern auf einer Fläche
                           von 168,41 km² ist Wuppertal das Oberzentrum des Bergischen Landes.
                           Die Universitätsstadt ist Teil sowohl der Metropolregion Rhein-Ruhr als auch der Metropolregion Rheinland.
                           Der namensgebende Fluss, die Wupper, durchquert das Stadtgebiet von Ost nach West auf einer Länge von 33,9 Kilometern.
                       </p>
                   </div>
                </div>
                <div className={styles['image-section']}></div>
            </div>
        )
    }

}

export default Hero;