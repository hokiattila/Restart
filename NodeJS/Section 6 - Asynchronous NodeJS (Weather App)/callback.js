setTimeout(() => {
    console.log("Two seconds are up.")
},2000)

// The callback synthax doesnt mean it always gets executed asynchronous
const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => name.length <= 4)
console.log(shortNames)

/*
const geocode = (address, callback) => { // NOT RETURNING ANYTHING -> undefined
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        return data
    }, 2000)
}
*/

const geocode = (address, callback) => { 
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


const add = (num, num2, callback) => {
    setTimeout(() => {
        sum = num + num2
        callback(sum)
    },2000)
}

add(1, 4, (sum) => console.log(sum))