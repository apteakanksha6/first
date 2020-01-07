
var readline=require('readline');
var fs=require('fs');
var rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout});
var fname;
rl.question('Enter filename : ',function(name){
    fname=name;
    fs.writeFileSync(name,"")      //Create Blank file of given name

    rl.setPrompt("Enter Data to write in file : ")
    rl.prompt();
    rl.on('line',function(input){

        fs.writeFileSync(fname,input)   //Write data into file
        console.log("write successfully");

        outside(fname);            //Merge Two Files

        console.log(fs.readFileSync(fname).toString()) //Read file
        rl.close();   
    })
});
    
function outside(name){
var read=fs.readFileSync('hello.txt')
 fs.appendFileSync(name,read)
 console.log("merging Two files Successfully")
 
}
rl.on('close',()=>console.log("Closed"));