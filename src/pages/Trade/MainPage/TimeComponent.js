import React, { Component } from 'react';

const hour = 3600;

class TimeComponent extends Component {
    constructor(props){
        super(props);
        this.state = { time: Date.now() };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const unix_seconds = Math.floor(this.state.time / 1000);
        const seconds_since_hour = unix_seconds % hour;
        const seconds_until_hour = hour - seconds_since_hour;
        const seconds = seconds_until_hour % 60;
        const minutes = Math.floor(seconds_until_hour / 60);
        return(
            <span> { minutes }:{ ('00' + seconds).slice(-2) } </span>
        );
    }
}

export default TimeComponent;