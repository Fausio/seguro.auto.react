import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField'



export default class Result extends Component {

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
        console.log("sdsddsds",this.props)
        const styles = {
            button: {
                margin: 15
            },
            textLeft: {
                "text-align": "left",
                "border-top-style": "none",
                "border-bottom-style": "none",
                "border-left-style": "none"
            },
            textRight: {
                "text-align": "right",
                "font-weight": "bold",
                "border-top-style": "none",
                "border-bottom-style": "none",
                "border-left-style": "none"
            },
            size:{

                "size": "10px"
            }


        }




        return (
            <MuiThemeProvider>

                <React.Fragment>

                    
                    <AppBar title="SEGURO AUTO " />







                    <h1> 🟢  -  🟢  -  ⚫</h1>
                    <TextField hintText="Adicione o seu nome"
                        floatingLabelText="Nome"
                        onChange={handleChange('name')}
                        defaultValue={values.name} />
                    <br />

                    <p> Resultado </p>
                    <table >
                        <tr>
                            <td style={styles.textRight}>Nome: </td>
                            <td style={styles.textLeft}> {this.props?.values?.name}</td> 
                        </tr>

                        <tr>
                            <td style={styles.textRight}>Email:</td>
                            <td style={styles.textLeft}>{this.props?.values?.email}</td> 
                        </tr>

                        <tr>
                            <td style={styles.textRight}>Celular:</td>
                            <td style={styles.textLeft}>{this.props?.values?.phone}</td> 
                        </tr>

                        <tr>
                            <td style={styles.textRight}>Tipo de Seguro:</td>
                            <td style={styles.textLeft}>{this.props?.values?.insurerType}</td> 
                        </tr>
                        <tr>
                            <td style={styles.textRight}>Valor da Viatura:</td>
                            <td style={styles.textLeft}>{this.props?.values?.carPrice}</td> 
                        </tr>
                        <tr>
                            <td style={styles.textRight}>Valor a Pagar:</td>
                            <td style={styles.textLeft}>{this.props?.values?.carPrice}</td> 
                        </tr>
                    </table>

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
