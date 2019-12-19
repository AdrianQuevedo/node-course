// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x 

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Adrian', 'Camila', 'Ariel'],
    printGuestList() {
        const that = this
        console.log('Guest list for '+ this.name)
        this.guestList.forEach((guest) =>{
            console.log(guest + 'is attending ' + that.name)
        })
    }
}

event.printGuestList()