class MySet{

    constructor(...elements){
        this.set = new Set(elements);
    }

    print(){
        this.set.forEach(function(element) {console.log(element)} );
    }

    search(element){
        return this.set.has(element);
    }
}

let myset = new MySet(1, 2, 3, 5, 7, 9, 11);
myset.print();
console.log( myset.search(9) );
console.log( myset.search(3) );