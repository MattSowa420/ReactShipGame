class MyClass extends React.Component {
  render() {
    return (
      <p>Hello {this.props.name}, I am now loaded. </p>
    );
  }
}

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));

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
    this.interval = setInterval(() => this.tick(), 20);
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

class TimerCanvas extends Timer {
  constructor(props) {
    super(props);
    this.ships = [ {x: 23, y: 60, vx: 2, vy: 3}, {x: 49, y: 100, vx: 2, vy: 8} ];
    this.ctx = null;
  }

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d');
    super.componentDidMount();
  }

  clearCanvas(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  calcPostions() {
    this.ships.forEach(ship => { 
      ship.x+=ship.vx; ship.y+=ship.vy;
      if (ship.x>400)  { ship.vx=-ship.vx; }
      if (ship.y>400)  { ship.vy=-ship.vy; }
      if (ship.x<0)  { ship.vx=-ship.vx; }
      if (ship.y<0)  { ship.vy=-ship.vy; }
    });
  }

  drawShips(ctx) {
    this.ships.forEach(ship => {
      ctx.fillRect(ship.x, ship.y, 20, 10); 
    });
  }

  tick() {
    //console.log('tick');
    this.clearCanvas(this.ctx,400,400);
    //this.ctx.clearRect(0, 0, 400, 400);
    this.calcPostions();
    this.drawShips(this.ctx);
  }

  render() {
    return (
      <canvas ref="canvas" width={400} height={400} style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#000000' }}>
      </canvas>
    );
  }
}

ReactDOM.render(<TimerCanvas />, document.getElementById('timer'));