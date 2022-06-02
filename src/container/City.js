// this is class base components
import React, { Component } from 'react';

class City extends Component {
    constructor(props){
        super(props);
        this.state ={
            cityName : "Surat"
        }
    }
    changeCity = () =>{
        this.setState({
            cityName : "Ahemdabad"
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick={() => this.changeCity()}> change city</button>
            </div>
        );
    }
}

export default City;