import React from 'react';

class Clock extends React.Component{
  constructor(props){
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    this.whatever = setInterval(this.tick, 1000);
  }


  render(){
    return (
      <h1>Clock</h1>
    )
  }
}

export default Clock;