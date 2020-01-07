const readl=require('readline');
const fs=require('fs');

var rl=readl.createInterface({input: process.stdin, output: process.stdout})


var str="1:write\n 2:read \n 3:append "
console.log(str);

rl.question("enter file name  :",function(filename)
{
    fs.writeFileSync(filename,"");
   

    rl.on('line',function(choice){ 
                
    switch(choice){
   
    case "1":
            rl.question("enter data  :",function(data)
            {
                fs.writeFileSync(filename,data);
            });   
            
    break;

    case "2":
            
             var data1=fs.readFileSync(filename);
             console.log("file contains  :"+data1.toString());
           
    break;

    case "3":

        let promise = new Promise(function(resolve, reject) { 
         
            resolve(rl.question("enter data to be append:",function(data)
            {
                fs.appendFileSync('ak.txt',data)  
            }))

           // reject(new error("Error accured"))

        })


            /*
            resolve(rl.question("enter data to be append:")); 
          })

          .then(function(result){
              console.log(result)
              fs.appendFileSync('ak.txt',result)  
          })

        */



       /* rl.question("enter data to be append:",function(data)
        {
            fs.appendFileSync('ak.txt',data)  
        })*/
    
}
            });


});

//rl.close('close')  





