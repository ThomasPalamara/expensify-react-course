//
// Objet destructuring
//
// const person = {
//     // name:'Thomas',
//     age:'23',
//     location: {
//         city: 'London',
//         temp: 27
//     }
// }

// const {name:firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature)
// console.log(`It's ${temperature} in ${city}.`);

// const book ={
//     title: 'Ego is the ennemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name:publisherName = 'Self Published'} = book.publisher;
// console.log(publisherName);

const address = ['169 harvist road', 'London', 'England', 'NW6 6HB'];

const [, city, state='Scotland'] = address;

console.log(`Your are in ${city} ${state}`);

const item = ['Coffe', '£2.00', '£2.50', '£3.00']

const[itemName,,mediumPrice] = item
console.log(`A medium ${itemName} cost ${mediumPrice}`);