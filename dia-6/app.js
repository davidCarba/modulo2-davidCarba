/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

//ejercicio 2

/*let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
}(user.go)();*/ //error

//ejercicio 3

/*let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined*/

//ejercicio 4

/*function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?*/

//ejercicio 5

/*let calculator = {
  read() {
    this.a = +prompt("Introduce a");
    this.b = +prompt("Introduce b");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/

//ejercicio 6

/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep();*/

//ejercicio 3

/*function Accumulator(Value) {
  this.value = Value;

  this.read = function() {
    this.value += +prompt("Numero a sumar", 0);
  };
}

let suma = new Accumulator(1);
suma.read();
suma.read();
alert(suma.value);*/

//ejercicio 4
/*class Clock {
  constructor({ template }) {
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();*/

/*class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this._precision = precision;
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), this._precision);
  }
};*/

//ejercicio 5

/*class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // ok now
alert(rabbit.name); // White Rabbit*/
