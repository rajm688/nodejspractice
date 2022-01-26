const fs = require("fs")
//reading file
// fs.readFile("./text.txt", "utf-8",(err,data)=>{
//     console.log(data)
// })

//writing file
// const text = "Hello there once again"
// fs.writeFile("./awsome.txt",text,(err)=>console.log(err))

//updating File
// const update = "\nthis file has been updated"
// fs.appendFile("./awsome.txt",update,(err)=>console.log(err))

//creating multiple files
// const [, , num] = process.argv
// for(i=1; i<=num; i++){
//    fs.writeFile(`./backup/newfile-${i}`,"God is Great", (err)=>console.log(err))
// }

//deleting files
// fs.unlink(`./backup/newfile-3`,(err)=>console.log("deleted successfully", err))

//reading directory
// fs.readdir("./backup",(err,data)=>{
// console.log(data)
// data.forEach(element => {
//     fs.unlink(`./backup/${element}`,err=>console.log("files deleted"))
// })
// })

//since these functions takes place asynchronously we also have synchronous  commands for these 