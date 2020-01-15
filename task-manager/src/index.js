const express = require('express')
require('./db/mongoose')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The server is down for maintenance, please try later.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const main = async () => {
    // const task = await Task.findById('5e1e6d80744f8a0264d221db')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5e1e6d7b744f8a0264d221d9')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()