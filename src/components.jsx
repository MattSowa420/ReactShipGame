import React from 'react';

export class MyClass extends React.Component {
  render() {
    return (
      <p>Hello {this.props.name}, I am now loaded. </p>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 50);
    console.log('54424234313');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
}

export class TimerCanvas extends Timer {
  constructor(props) {
    super(props);
    this.ships= [];
    for (let i= 0; i < 30; i++ ) {
      this.ships.push({
        x: Math.random()*400,
        y: Math.random()*400,
        vx: Math.random()*5,
        vy: Math.random()*5,
        width: Math.random()*20,
        height: Math.random()*20,
      });
    }
    this.ctx= null;
  }

  componentDidMount() {
    super.componentDidMount();
    this.ctx= this.nameCanvas.getContext('2d');
  }

  clearCanvas(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  calcPostions() {
    this.ships.forEach(ship => { 
      ship.x+= ship.vx; ship.y+= ship.vy;
      if (ship.x > 400)  { ship.vx= -ship.vx; }
      else if (ship.x < 0)  { ship.vx= -ship.vx; }
      if (ship.y < 0)  { ship.vy= -ship.vy; }
      else if (ship.y > 400)  { ship.vy= -ship.vy; }
    });
  }

  drawShips(ctx) {
    this.ships.forEach( ship => {
      ctx.fillRect( ship.x, ship.y, ship.width, ship.height); 
    });
  }

  tick() {
    this.clearCanvas( this.ctx, 400, 400);
    this.calcPostions();
    this.drawShips( this.ctx);
  }

  onKeyPress(event) {
    console.log(event.key);
    if (event.key == 'Enter') {
      this.ships[0].vx= 0;
    }
  }

  onClick(event)
  {
    console.log(`!onClick event: ${event.clientX} ${event.clientY}`);
  }

  render() {
    return (
      <canvas onKeyPress= { (event) => this.onKeyPress(event) }
        onClick= {this.onClick} 
        ref= { (canvas) => this.nameCanvas = canvas } 
        width= {400} height= {400} 
        style={{ borderWidth: 2, borderStyle: 'solid', borderColor: 'blue' }}>
      </canvas>
    );
  }
}

