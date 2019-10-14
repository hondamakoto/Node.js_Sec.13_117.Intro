require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5d32c7daeadce324f4790ae2
// 5d32c58226cba42cf8069d24
// Task.findByIdAndDelete('5d32c58226cba42cf8069d24').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    // We can use the following statement instead of the above.
    // await Task.findByIdAndDelete(id)

    const count = await Task.countDocuments({ completed: false })
    return count
}

// 5d32c5cf26cba42cf8069d27
// 5d2de0a752b96126cccba8eb
// 5d2de2214954101d8409b2b1
deleteTaskAndCount ('5d2de2214954101d8409b2b1').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
