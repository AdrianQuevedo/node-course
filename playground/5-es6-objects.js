// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.4
}

const {label:labelProduct, stock, rating = 5} = product

console.log(labelProduct)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)