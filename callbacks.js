class Clock {
    constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      this.printTime()
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      // Format the time in HH:MM:SS
      const time = [this.hours, this.minutes, this.seconds].join(":");
      console.log(time);
    }

    _tick() {
      // 1. Increment the time by one second." 23:59:59"
      // 2. Call printTime.
      this.seconds += 1
      if(this.seconds === 60){
          this.seconds = 0;
          this.minutes += 1;
          if(this.minutes === 60){
              this.minutes = 0;
              this.hours += 1;
              if(this.hours === 24){
                this.hours = 0;
              }
          }
      }
      this.printTime()
    }

}

const clock = new Clock(23,59,55);
