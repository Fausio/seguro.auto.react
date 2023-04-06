import React, { Component, useState } from 'react'
import UserDetails from './UserDetails'
import Result from './Result'
import AppBar from 'material-ui/AppBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class UserForm extends Component {



    state = {
        step: 1,

        name: '',
        email: '',
        phone: '',

        insurerType: '',
        carPrice: 0,
        valueToPay: 0

    }


    // proced to nex step  =>
    nextStep = () => {
        const { step } = this.state;
        console.log("nextStep");

        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step  <=
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fields change
    handleChange = input => e => { 

        this.setState({ [input]: e.target.value });
    }




    render() {

        const { step } = this.state;
        const { name, email, phone, insurerType, carPrice, payment } = this.state;
        const values = { name, email, phone, insurerType, carPrice, payment };


         const addInsurerType = (e) => {
 
            this.setState({ "insurerType": e });
        }  



        switch (step) {

            case 1:
                console.log("1", values);
                return (
                    <UserDetails

                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        addInsurerType={addInsurerType}
                    />

                )
            case 2:
                console.log("2", values);
                console.log("insurerType", insurerType);

                // calc hive 
                return (


                    <Result

                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                console.log("3");
                return (
                    <h1 > Confirm </h1>
                )
            case 4:
                console.log("4");
                return (
                    <h1 > Sucess </h1>
                )
            default:
                break;
        }


    }
}

export default UserForm
