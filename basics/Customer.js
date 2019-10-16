//ES5 / Legacy syntax to create class
function Customer(id, name) { 
    this.id = id;
    this.name = name;
    this.display = () => {
        setTimeout( () => {
            console.log(this.id + " : " + this.name);
        },3000);
    }
}

let c = new Customer('1', 'John');
c.display();