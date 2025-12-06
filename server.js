// const fs = require('fs');
           //create a file
// fs.appendFile("hey.txt","ma to acha hu ", function(err){
//       if(err) console.log(err);
//       else console.log("done");
      
// })
              //Rename a file
// fs.rename("hey.txt","hello.txt",function(err){
//    if(err) console.error(err);
//    else console.log("Done");
   
   
// })
              //Copy File
// fs.copyFile("hello.txt","./copy/copy.txt",function (err) {
//         if(err)  console.error(err)
//           else console.log("Done");
          
// })
               //Removes file
// fs.unlink("hello.txt", function(err){
//   if(err) console.error(err)
//     else console.log("Removed");
    
// })

             //Removes folder
// fs.rmdir("./copy",{recursive:true}, function(err){
//   if(err) console.error(err)
//     else console.log("removed");
    
// })

            //Write File
// fs.writeFile("hey.txt","hello h kese hi",function(err){
//           if(err)   console.error(err)
//             else   console.log("Done");
            
// })
 
           //Copy file
// fs.copyFile("hey.txt","./copy/hey.txt",function(err){
//      if(err) console.error(err);
//      else    console.log("Linked");
     
// })

      //Make folder in a directory
// fs.mkdir("./copy",function(err){
//   if(err)   console.error(err);
//   else  console.log("Done");
  
// })



  // Create a server 
// const http = require('http');

// const server = http.createServer(function(req,res){
//          res.end("Hello world!");
// })

// server.listen(3000);


//npm i accessibility@3.0.9


const express = require('express')
const app = express()

    //Middleware
// app.use(function(req,res,next){
//   console.log('middleware chala');
//   next();
// });

// app.use(function(req,res,next){
//   console.log('middleware chala dosre baar chaala');
//   next();
// });


//route creation
app.get('/', function(req, res){
  res.send('Champsndnion')
})

app.get('/profile', function(req, res, next){
  return next(new Error("something wnet wrong"))
})

//Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!, we dont now what ')
})


app.listen(3000)


