require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e15dc06dc19143694dadbaa', { age:1 } ).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})