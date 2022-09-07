// Object property shorthand

const Name = "Andrew"
const userAge = 27

const user = {
    Name,
    age: userAge,
    location: "Philadelphia"
    
}

console.log(user)

// Object destructuring
const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// Standard way -> Lot of code 
// const label = product.label
// const stock = product.stock

const {label} = product
const {price, stock, rating = 5} = product

console.log(label)
console.log(price)
console.log(stock)

// Undefined if we don't give default value
console.log(rating)

const {label: productLabel} = product
console.log(productLabel)

// Function arguments

const transaction = (type, {label, price, stock}) => {
    console.log(`${label} ${price} ${stock}`)
}

transaction('order', product)