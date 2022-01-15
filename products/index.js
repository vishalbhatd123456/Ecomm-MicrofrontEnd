import faker from 'faker';

let products = '';

for(let i = 0;i<3;i++){
    const name = faker.commerce.productName();
    //join the product
    products+=`<div>${name}</div>`
}

console.log(products);  

// this code when run on the browser will definitely shoot errors, as most of the browsers do NOT support the use of Faker library.
//to overcome this, we can make use of the Webpack
