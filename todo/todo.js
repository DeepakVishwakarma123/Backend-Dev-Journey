const { log } = require("console");
const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    //cheking whether databuffer how looks
   console.log(dataBuffer);
   /*data buffer some part of file in  hard coded values
     like hexa decimal or binary format
   */
    console.log("data buffer ends here!");
    const dataJSON = dataBuffer.toString()
    let tasks =JSON.parse(dataJSON);
    return tasks
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  console.log("loading first time file no data means we get empty array",tasks);
  console.log(tasks);
  
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

// TODO: Remove task by index
function removeTask(indextoremove)
{
//current data inside file
let taskArray=loadTasks()
//specifying the number of item to delete
if(indextoremove<taskArray.length)
{
  taskArray.splice(indextoremove,1)
  saveTasks(taskArray)
  listTasks()
  /*splice overwrites original array by removing specefied index
  element 
  before splice [1,2,3]
  remove index 1 item once 
  after splice orginal array [1,3]
  returns deleted element
  */
}
else{
  console.log("please enter valid index");
}
//splice returns the array after removing an item 
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}


