'use strict'

function MyArray() {

    this.array = [];
    for(var i = 0; i < arguments.length; i++) {
        this.array.push(arguments[i]);
    }
    console.log(this.array);
}

MyArray.prototype.print = function() {
    this.array.forEach(function(a) {console.log(a)} );
}

MyArray.prototype.search = function(searchElement) {
    for(var i = 0; i < this.array.length; i++) {
        if(this.array[i] == searchElement) {
            return i;
        }
    }

    return -1;
}

MyArray.prototype.sort = function() {
    this.array.sort();
}

var planguages = new MyArray("C", "C++", "Java", "Javascript", "Python");
planguages.print();
console.log(planguages.search("Python"));
planguages.sort();
planguages.print();