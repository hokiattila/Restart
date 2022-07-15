const square = function(num) {
    return num * num
}

console.log(square(3))

const square_arrow = (num) => {
    return num * num
}

console.log(square_arrow(3))

// Shorthand syntax
const square_arrow2 = (num) => num * num
console.log(square_arrow2(3))

let event_obj = {
    name: 'Birthday party',
    printGuestList: () => {
        console.log(`Guest list for ${this.name}`) // Arrow functions are not well suited for methods -> undefined
    }
}

let event2_obj = {
    name: 'Birthday party',
    guestLists: ['Andrew','Jen','Mike'],
    printGuestList()  {
        console.log(`Guest list for ${this.name}`) // Arrow functions are not well suited for methods -> undefined
  
     //   this.guestLists.forEach(function(guest) {
       //     console.log(`${guest} is attending ${this.name}`) ---------> no bindings
        //})

        this.guestLists.forEach((guest) => { // arrow functions dont bind their own this bindings
            console.log(`${guest} is attending ${this.name}`)
        })
    }
}

event_obj.printGuestList()
event2_obj.printGuestList()