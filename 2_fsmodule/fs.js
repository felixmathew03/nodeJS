const { error } = require("console")
const fs=require("fs")

//write file
fs.writeFile("message.txt","Hello world",(error)=>{
    if (error) {
        console.log("Unable to write file");
    }
})

//write file
fs.writeFile("./pages/wow.txt","Wow world",(error)=>{
    if (error) {
        console.log("Unable to write file");
    }
})


//append file 
fs.appendFile("message.txt","...Have a fabulous day :)",(error)=>{
    if (error) {
        console.log("Unable to append file");
    }
})

//read file
fs.readFile("message.txt","utf-8",(error,data)=>{
    if (error) {
        console.log("Unable to read");
    } else {
        console.log(data);
    }
})

//unlink
fs.unlink("message.txt",(error)=>{
    if (error) {
        console.log("Unable to delete");
    }
})

//create folder
fs.mkdir("pages",(error)=>{
    if (error) {
        console.log("Unable to create folder");
    }
})

// read folder
fs.readdir("pages",(error,data)=>{
    if (error) {
        console.log("Unable to read folder");
    } else {
        console.log(data);
    }
})