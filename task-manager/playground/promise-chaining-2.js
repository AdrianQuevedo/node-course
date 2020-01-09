require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e17253dab8c7e463c346972').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})