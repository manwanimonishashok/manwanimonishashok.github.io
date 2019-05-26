class ColorConsole {

    constructor(color) {
        this.color = color;

    }

    log(text) {
       let color = {
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m"

        }
        if (this.color == "red") {
            return console.log(color.red, text)
        }

        if (this.color == "green") {
            return console.log(color.green, text);
        }

        if (this.color == "yellow") {

            return console.log(color.yellow, text);

        }
    }
}

let myConsolered = new ColorConsole("red");
myConsolered.log("Attain University");

let myConsoleyellow = new ColorConsole("yellow");
myConsoleyellow.log("Attain University");

let myConsolegreen = new ColorConsole("green");
myConsolegreen.log("Attain University");
