//trying to get some real feel!
let fileModule=require('fs')

let processArgumentArray=process.argv
console.log(processArgumentArray);

let imageFileFormat=processArgumentArray[2]
let imagePath=processArgumentArray[3]
let imageName=processArgumentArray[4]


function readImage()
{   
        // file exists we can,t get error
        let dataBufferImage=fileModule.readFileSync(imagePath)
        return dataBufferImage
}

//this thing i can also do i don,t think so chatgpt suggested
function writefile()
{
  if(imageFileFormat==="png" || imageFileFormat==="jpg" || imageFileFormat==="bmp")
  {
 let bufferval=readImage()
 fileModule.writeFileSync(`/home/deepak/Desktop/${imageName}.${imageFileFormat}`,bufferval) 
  }
  else{
    let date=new Date()
    let dateWithTime=date.toLocaleString()
    let logErrorData=`${dateWithTime}      -invalid format tried ${imageFileFormat}`
    fileModule.writeFileSync("/home/deepak/Desktop/logReport.txt",logErrorData,{flag:"a+"})
  }
}

writefile()