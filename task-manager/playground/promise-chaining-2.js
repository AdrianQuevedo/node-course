require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e17253dab8c7e463c346972').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((count) => {
//     console.log(count)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e172532ab8c7e463c346971').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})