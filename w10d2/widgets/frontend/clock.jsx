import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props); //need to put this if you are using this


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
    return (      // toString(this.state.time)
      <>
      <h1>Clock</h1>
        <h2>{this.state.time.toString()}</h2>
      </>
    )
  }
}

export default Clock;