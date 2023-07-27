const fs = require('fs')


// //core module 

// fs.writeFileSync("read.txt", 'wellcome to day 1 node js')

// fs.appendFileSync("read.txt", ' add append data with new line data on node js :')

// const file_data = fs.readFileSync("read.txt")

// const org_data = file_data.toString()

// console.log(file_data) // shows buffer data s mainly store binary data
// console.log(org_data)


// // // to rename rhe file name
 
// // fs.renameSync('read.txt', 'readwrite.txt')

// // //new practice data folder and add data or delete 
// // fs.mkdirSync('crudData')
// // fs.writeFileSync('crudData/data.txt', 'add data')
// // fs.appendFileSync('crudData/data.txt', 'amd more data')
// // encoding data
// // const data = fs.readFileSync('crudData/data.txt', "utf8")
// // const datawithoutBuffer = data.toString()

// //rename file
// // fs.renameSync('crudData/data.txt', 'crudData/datamodified.txt')
// // console.log(data)

// //delete file
// // fs.unlinkSync('crudData/datamodified.txt')
// fs.rmdirSync('crudData')

// // CRUD