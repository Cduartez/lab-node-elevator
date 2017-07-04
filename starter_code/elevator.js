/*jshint esversion:6 */
class Elevator {
  constructor() {
    this.floor = 10;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.timer = setInterval(() => this.update(), 1 * 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
  update() {
    this.log();
  }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    this.floorDown();

  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < this.MAXFLOOR){
      this.floor++;
      console.log("Subiendo");
    } else {
      this.stop();
    }

  }
  floorDown() {
    if (this.floor > 0){
      this.floor--;
      console.log("bajando");
    }else{
      this.stop();
    }
  }
  call(person) {}


}
module.exports = Elevator;
