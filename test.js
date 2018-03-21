"use strict";
class PrefixerClassES6 {
    constructor(prefix){
        this.prefix = prefix;
    }
    prefixArray(arr) {
        return arr.map(x => this.prefix + x);
    }
    get something() {return this.prefix + "Test";}
}

const prefixerES6 = new PrefixerClassES6("Hei ");
console.log(prefixerES6.prefixArray(["Mike", "Carla"]));
console.log(prefixerES6.something);


class Rectangle {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    set w(w){
        this.width = w;
    }

    get w() {
        return this.width;
    }

    get area () {
        return this.width * this.height;
    }
}


class Square extends Rectangle {
    constructor(x,y,width){
        super(x,y,width,width);
    }
}

const rect = new Square(10,15,5);
console.log(rect.x + ", area: " + rect.area);

const def = (x, y =2) => x + y;
console.log(def(333));

