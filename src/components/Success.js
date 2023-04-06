import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

export default class Sucess extends Component {

    refreshPage = e => {


        if (confirm('Deseja iniciar uma nova simulação ? ')) {
            window.location.reload(false);
        } else {

            console.log('stay');
        }

    }


    render() {

        const { values, handleChange } = this.props;

        const styles = {
            button: {
                margin: 15
            }

        }




        return (
            <MuiThemeProvider>

                <React.Fragment>
                    <AppBar title="SEGURO AUTO " />
                    <p> 🟢  -  🟢  -  🟢</p>
                    <p> Sucesso ! </p>

                    <p style={{ marginLeft: '20%', marginRight: '20%' }}> Olá! Parabéns por ter feito a simulação de compra de seguro na aplicação Seguro Auto. É muito importante garantir a segurança do seu veículo e ter a proteção necessária em caso de acidentes ou imprevistos. A simulação de compra permite que você avalie diferentes opções de cobertura e preços, para escolher a melhor opção para suas necessidades. </p>

                    <br />


                    <RaisedButton
                        variant="contained"
                        label="Fazer outra simulação"
                        primary={true}
                        style={styles.button}
                        onClick={this.refreshPage} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
