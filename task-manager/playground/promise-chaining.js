require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e15dc06dc19143694dadbaa', { age:1 } ).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e15dc06dc19143694dadbaa', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})