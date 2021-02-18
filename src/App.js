import React from "react";
import Header from './components/Header';
//import Hero from './components/Hero';
import Typing from 'react-typing-animation';

import Footer from './components/Footer';
import Contact from "./components/Contact";
import './styles.sass';
import styles from './components/Hero/styles.module.sass';
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Input,
    Button
} from '@material-ui/core';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container={true} >
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <Grid item={true} xs={12}>
                    <Header />
                </Grid>
                <Grid item={true} container={true} xs={12}>
                    <Grid item={true} xs={12} md={7}>
                        <div className={styles['text-section']}>
                            <div className={styles.container}>
                                <Typing>
                                    <h1 className={styles.title}>Suchen und finden Sie Baudenkmäler in Wuppertal</h1>
                                </Typing>
                                <p>Auskunft über denkmalgeschützte Immobilien in Wuppertal</p>
                                <Input placeholder='buraya bir şeyler yazılacak...'></Input>
                                <Button variant="contained">Default</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} md={5} className={styles['image-section']}></Grid>
                </Grid>
                <Grid item={true} xs={12}>
                    <TableContainer component={Paper} className='table' >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        132
                                    </TableCell>
                                    <TableCell align="right">12</TableCell>
                                    <TableCell align="right">324</TableCell>
                                    <TableCell align="right">32</TableCell>
                                    <TableCell align="right">1</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item={true} className={styles.quote} xs={12}>
                    Grün, industriell, innovativ: Wuppertal.
                </Grid>
                <Grid item={true} container={true} xs={12}>
                    <Grid item={true} xs={12} md={7}>
                        <div className={styles['text-section']}>
                            <section className={styles.container}>
                                <h1 className={styles.title}>Daten und Fakten</h1>
                                <p>Die Stadt Wuppertal liegt östlich der nordrhein-westfälischen Landeshauptstadt
                                    Düsseldorf und südlich des Ruhrgebietes. Mit 362.000 Einwohnern auf einer Fläche
                                    von 168,41 km² ist Wuppertal das Oberzentrum des Bergischen Landes.
                                    Die Universitätsstadt ist Teil sowohl der Metropolregion Rhein-Ruhr als auch der Metropolregion Rheinland.
                                    Der namensgebende Fluss, die Wupper, durchquert das Stadtgebiet von Ost nach West auf einer Länge von 33,9 Kilometern.
                                </p>
                            </section>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} md={5} className={styles['image-section']}></Grid>
                </Grid>
                <Grid item={true} className={styles.quote} xs={12}>
                    "Stadt Schwebebahn"
                </Grid>
                <Grid item={true} container={true} xs={12}>
                    <Grid item={true} xs={12} md={5} className={styles['image-section']}></Grid>
                    <Grid item={true} xs={12} md={7}>
                        <div className={styles['text-section']}>
                            <section className={styles.container}>
                                <h1 className={styles.title}>Daten und Fakten</h1>
                                <p>Die Stadt Wuppertal liegt östlich der nordrhein-westfälischen Landeshauptstadt
                                    Düsseldorf und südlich des Ruhrgebietes. Mit 362.000 Einwohnern auf einer Fläche
                                    von 168,41 km² ist Wuppertal das Oberzentrum des Bergischen Landes.
                                    Die Universitätsstadt ist Teil sowohl der Metropolregion Rhein-Ruhr als auch der Metropolregion Rheinland.
                                    Der namensgebende Fluss, die Wupper, durchquert das Stadtgebiet von Ost nach West auf einer Länge von 33,9 Kilometern.
                                </p>
                            </section>
                        </div>
                    </Grid>
                </Grid>
                <Grid item={true} className={styles.quote} xs={12}>
                    "Stadt Denkmal"
                </Grid>
                <Grid item={true} container={true} xs={12}>
                    <Grid item={true} xs={12} md={7}>
                        <div className={styles['text-section']}>
                            <section className={styles.container}>
                                <h1 className={styles.title}>Daten und Fakten</h1>
                                <p>Die Stadt Wuppertal liegt östlich der nordrhein-westfälischen Landeshauptstadt
                                    Düsseldorf und südlich des Ruhrgebietes. Mit 362.000 Einwohnern auf einer Fläche
                                    von 168,41 km² ist Wuppertal das Oberzentrum des Bergischen Landes.
                                    Die Universitätsstadt ist Teil sowohl der Metropolregion Rhein-Ruhr als auch der Metropolregion Rheinland.
                                    Der namensgebende Fluss, die Wupper, durchquert das Stadtgebiet von Ost nach West auf einer Länge von 33,9 Kilometern.
                                </p>
                            </section>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} md={5} className={styles['image-section']}></Grid>
                </Grid>
                <Grid item={true} xs={12}>
                    <Contact/>
                </Grid>
                <Grid item={true} xs={12}>
                    <Footer></Footer>
                </Grid>
            </Grid>
        )
    }

}


export default App;
