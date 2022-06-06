import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        // 1
        this.state = {
            time : new Date()
        }
    }
    tick = () => {
        this.setState({
            time : new Date()
        })
    }

    componentDidMount = () => {
        // 3
        this.timeI = setInterval(() => {this.tick()},1000);
    }
    componentDidUpdate = (prevProps,prevState) => {
        if(this.state.time !== prevState.time){
            console.log('CopmpnentDidUpdate');
        }
    }
    
    render() {
        return (
            // 2
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default LifeCycle;