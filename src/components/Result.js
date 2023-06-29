import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField'
import Toolbar from 'material-ui/Toolbar'
import logoSquared from '../Files/img/squared-logo.png'
import Tooltip from 'material-ui/internal/Tooltip'; 
import IconButton from 'material-ui/IconButton';


export default class Result extends Component {

    constructor() {
        super()

        this.myRef = React.createRef();



    }

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
                "border-left-style": "none",
                "border-color": "coral"
            },
            size: {

                "size": "10px"
            },
            hideCarValue: {

                display: "none"
            }


        }


        function formatDollar(num) {


            var p = num.toFixed(2).split(".");
            return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
                return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
            }, "") + "," + p[1];
        }

        {

            // calc payment

            if (this.props?.values?.insurerType === "Contra terceiros") {
                var calc = formatDollar(6000);
                this.props.values.payment = calc + " Mzn";
            } else {



                var calc = formatDollar((6 * Number(this.props?.values?.carPrice)) / 100);  // " Mzn, 6% do valor da viatura"
                this.props.values.payment = calc + " Mzn, por Ano"
            }

        }








        let PriceTd;

        if (this.props?.values?.insurerType === "Danos próprios") {

            PriceTd =

                <tr>
                    <td style={styles.textRight}>Valor da Viatura:</td>
                    <td style={styles.textLeft}>{formatDollar(Number(this.props?.values?.carPrice)) + " Mzn"}</td>
                </tr>
        }






        return (


            <>



                <MuiThemeProvider>

                    <React.Fragment>


                        <AppBar title=". " />


                        <p> 🟢  -  🟢  -  ⚫</p>

                        <br />
                        
                        <p> Resultado </p>

                        <Tooltip title="Delete">
                            <IconButton>
                            <p> ffffffffffffffffffffff </p>
                            </IconButton>
                        </Tooltip>

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
                                <td style={styles.textRight}>Telefone:</td>
                                <td style={styles.textLeft}>{this.props?.values?.phone}</td>
                            </tr>

                            <tr>
                                <td style={styles.textRight}>Tipo de Seguro:</td>
                                <td style={styles.textLeft}>{this.props?.values?.insurerType}</td>
                            </tr>


                            {PriceTd}


                            <tr>
                                <td style={styles.textRight}>Valor a Pagar:</td>
                                <td style={styles.textLeft}>{this.props?.values?.payment}</td>
                            </tr>
                        </table>

                        <br />
                        <RaisedButton
                            variant="contained"
                            label="Voltar"
                            primary={true}
                            backgroundColor="#FF0000"
                            style={styles.button}
                            onClick={this.back} />

                        <RaisedButton
                            variant="contained"
                            label="Finalizar"
                            primary={true}
                            style={styles.button}
                            onClick={this.Continue} />
                    </React.Fragment>
                </MuiThemeProvider>

            </>
        )
    }
}
