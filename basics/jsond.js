let customer = {
    id:'1',
    name:'John',
    email:'john@email.com'
};

console.log(customer);
console.log(customer.id, customer.name, customer.email);

let c = {...customer};
console.log(c);

let c2 = {...customer, email:'johnx@msn.com'};
console.log(c2);


let book = { title: 'How to React', author: 'John', author: 'Phil' };
console.log(book);

let {title,author} = book;
console.log(title);

let customers = [
    {   id:'1',   name:'John',    email:'john@email.com'},
    {   id:'2',   name:'Jonny',    email:'jonny@email.com'},
    {   id:'3',   name:'Janardhan',    email:'janardhan@email.com'}
];

let ncust = customers.filter( (c) => c.name == 'John' );
console.log('john filter :')
console.log(ncust);

let twocusts = customers.filter( (c) => (c.name == 'John') || (c.id == '2')  );

console.log('john or 2: ')
console.log(twocusts);

let n = [1,2,3];

n.splice(1,1);
console.log(n);