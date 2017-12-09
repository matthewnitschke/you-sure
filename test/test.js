const youSure = require('../src/you-sure.js')

youSure("Are you sure you want to delete everything")
.then(() => {
    console.log("Yep")
})
.catch(() => {
    console.log("Nope")
})