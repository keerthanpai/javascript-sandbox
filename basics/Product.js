//ES6 syntax to create class
class Product {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    display() {
        console.log(this.code + " : " + this.name);
    }

    display2(){
        this.display();
    }
}

let p = new Product('1', 'Marker');
p.display();
p.display2();

