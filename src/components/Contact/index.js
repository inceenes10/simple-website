import React from 'react';
import axios from 'axios';
import AutoForm from 'react-auto-form';
import { Snackbar, Button, TextField, Typography } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import styles from './styles.module.sass';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false, error: false, timeout: false, requiredFieldError: false
        };

        this.resetButton = React.createRef();
        this.form = React.createRef();

        this.sendContact = this.sendContact.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }


    closeSnackbar(e, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            success: false, error: false, timeout: false, requiredFieldError: false
        });
    }

    sendContact(e, data) {
        e.preventDefault();

        if (!(data.name && data.surname && data.message)) {
            this.setState({
                requiredFieldError: true
            });
            return;
        }


        axios({
            method: 'post', url: 'http://localhost:8000/contact',
            timeout: 1000,
            data,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
                this.setState({ success:  true });
                this.resetButton.current.click();
            })
            .catch((error) => {
                if (error.code === 'ECONNABORTED')
                    this.setState({ timeout: true });
                else
                    this.setState({ error:  true });
            });
    }


    render() {
        return (
            <React.Fragment>
                <AutoForm onSubmit={this.sendContact} className={styles.form} ref={this.form}>
                    <Typography variant={'h5'}>İletişime Geç</Typography>
                    <TextField label="Adınız" variant="outlined" name='name'/>
                    <TextField label="Soyadınız" variant="outlined" name='surname'/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Mesajınız"
                        multiline
                        name='message'
                        rows={5}
                        variant='outlined'
                    />
                    <input type="reset" ref={this.resetButton}/>
                    <Button type='submit'>GÖNDER</Button>
                </AutoForm>
                <Snackbar open={this.state.success} anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} autoHideDuration={6000} onClose={this.closeSnackbar}
                >
                    <MuiAlert severity='success' onClose={this.closeSnackbar}>
                        Form başarıyla gönderildi
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.state.error} anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} autoHideDuration={6000} onClose={this.closeSnackbar}
                >
                    <MuiAlert severity='error' onClose={this.closeSnackbar}>
                        Form gönderilirken bir hata oluştu!
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.state.requiredFieldError} anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} autoHideDuration={6000} onClose={this.closeSnackbar}
                >
                    <MuiAlert severity='error' onClose={this.closeSnackbar}>
                        Lütfen tüm alanları eksiksiz doldurunuz!
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={this.state.timeout} anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} autoHideDuration={6000} onClose={this.closeSnackbar}
                >
                    <MuiAlert severity='error' onClose={this.closeSnackbar}>
                        Bağlantı zaman aşımına uğradı!
                    </MuiAlert>
                </Snackbar>
            </React.Fragment>
        )
    }
}


/**
 Öncelikle herkese merhaba ve bugünkü akıllı şebekeler etkinliğimizde bulunan herkese teşekkürler,
 Bu sene üçüncüsünü düzenlediğimiz akıllı şebekeler etkinliğine hoş geldiniz.
 bugünkü etkinliğimizde sırasıyla xxx, xxx, xxx, xxx ve xxx oturumlar şeklinde bize deneyimlerini aktaracaklar
 Her oturum yarım saat olacak ve ilk 20 dakikada söz hakkı konuşmacılarda olacak ve geri kalan sürede
 konuşmacılar soruları yanıtlayacak. Oturumlar arası onar dakikalık teneffüsler olacak diyerek söz hakkını xxx'e veriyorum
 Teşekkürler
 */

export default Contact;