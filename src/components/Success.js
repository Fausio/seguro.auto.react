import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

export default class Sucess extends Component {

    Continue = e => {

        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {


        e.preventDefault();
        this.props.prevStep();
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
                    <br/>
                    <RaisedButton
                        variant="contained"
                        label="Voltar"
                        primary={true}
                        backgroundColor="#FF0000"
                        style={styles.button}
                        onClick={this.back} />

                    <RaisedButton
                        variant="contained"
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.Continue} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
