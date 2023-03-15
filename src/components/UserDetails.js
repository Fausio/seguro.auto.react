import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

export default class UserDetails extends Component {

    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
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

                    <TextField hintText="Adicione o seu nome"
                        floatingLabelText="Nome"
                        onChange={handleChange('name')}
                        defaultValue={values.name} />
                    <br />

                    <TextField hintText="Adicione o seu email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.name} />
                    <br />

                    <TextField hintText="Adicione o seu numero de celular"
                        floatingLabelText="Celular"
                        onChange={handleChange('phone')}
                        defaultValue={values.name} />
                    <br />

                    <TextField hintText="Adicione o tipo de seguro"
                        floatingLabelText="Tipo de Seguro"
                        onChange={handleChange('insurerType')}
                        defaultValue={values.name} />
                    <br />

                    <TextField hintText="Valor de compra da viatura"
                        floatingLabelText="Valor da viatura"
                        onChange={handleChange('carPrice')}
                        defaultValue={values.name} />
                    <br />


                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.Continue} />





                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
