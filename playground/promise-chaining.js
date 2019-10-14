require('../src/db/mongoose')
const User =require('../src/models/user')

// 5d2c1df5f177b11cf8cf8d6b
// 5d2c2ab9c632d42a8450df47
// 5d2c2b8b5b72342bf8c08114

// User.findByIdAndUpdate('5d2c2b8b5b72342bf8c08114', { age: 100}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 100 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


// 5d2c2ab9c632d42a8450df47

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d2c2ab9c632d42a8450df47', 127).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})