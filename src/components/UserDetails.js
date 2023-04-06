import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField'
import Paper from 'material-ui/Paper'
import { useState, useEffect } from 'react';

export default class UserDetails extends Component {



    constructor() {
        super()
        this.state = {
            autocomplete: null,
            multiple_selections: null,
            chip_selections: null,
            close_button: null,
            always_open: null,
            error_text: null,
            custom_styling: null,
            floating_label: null,
            floating_label: null,
            disabled: null,
        }
        this.myRef = React.createRef();
    }



    Continue = e => {

        console.log("Continue");
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
 
        const { values, handleChange, addInsurerType } = this.props;

        const styles = {
            button: {
                margin: 15
            }
            ,
            hideCarValue: {

                display: "none"
            }

        }




        const saveToState = (value, name) => {



            if (value === 0) {
                values.insurerType = "Contra terceiros"
                values.carPrice = 0;
                this.myRef.current.style.display = "none"
            } else {
                values.insurerType = "Danos próprios"
                this.myRef.current.style.display = "inline"
            }

            this.setState({ [name]: values.insurerType })

             addInsurerType(values.insurerType);
        }

        return (
            <MuiThemeProvider>
                <React.Fragment>

                    <AppBar title="" />





                    <h1> 🟢  -  ⚫  -  ⚫</h1>





                    <TextField hintText="Adicione o seu nome"
                        floatingLabelText="Nome"
                        onChange={handleChange('name')}
                        defaultValue={values.name} />
                    <br />

                    <TextField hintText="Adicione o seu email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email} />
                    <br />

                    <TextField hintText="Adicione o seu numero de celular"
                        floatingLabelText="Celular"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone} />
                    <br />

                    <SelectField

                        floatingLabelText="Frequency"
                        value={this.state.multiple_selections}
                        onChange={(e, newVar) => saveToState(newVar, 'multiple_selections')}

                    >
                        <MenuItem value={"Contra terceiros"} primaryText="Contra terceiros" />
                        <MenuItem value={"Danos próprios"} primaryText="Danos próprios" />

                    </SelectField>



                    <br />

                    <div ref={this.myRef} style={styles.hideCarValue}>
                        <TextField hintText="Valor de compra da viatura"
                            floatingLabelText="Valor da viatura"
                            onChange={handleChange('carPrice')}
                            defaultValue={values.carPrice} />
                        <br />
                    </div>



                    <RaisedButton
                        variant="contained"
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.Continue} />

                    {/* https://www.youtube.com/watch?v=zT62eVxShsY */}

                </React.Fragment>
            </MuiThemeProvider >
        )
    }
}
