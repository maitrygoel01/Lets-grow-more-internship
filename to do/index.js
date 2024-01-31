const addBtn =document.querySelector("#add-btn");
const newTaskInput =document.querySelector("#wrapper input");
const  tasksContainer=document.querySelector("#tasks");
const error =document.getElementById("error");
const countValue =document.querySelector(".count-value");

let taskCount = 0;
const countValue = document.getElementById("countn"); // Replace with the actual ID of your count element
const error = document.getElementById("error"); // Replace with the actual ID of your error element

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
};

const addTask = () => {
    const newTaskInput = document.getElementById("yourInputId"); // Replace with the actual ID of your input element
    const taskName = newTaskInput.value.trim();

    error.style.display = "none";

    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

 
};


    const task = `<div class="task ">
     <input type ="checkbox" class="task-check">
     <span class="taskname">${taskName}</span>
     <button class ="edit">
     <i class="fa-solid fa-pen-to-square"></i>
     </button>
     <button class ="delete">
     <i class="fa-solid fa-trash"></i>
     </button>
    </div>`;

    tasksContainer.insertAdjacentHTML("beforeend",task);

    const deleteButtons=document.querySelectorAll(".delete");
    deleteButtons.forEach(button =>{
        button.onclick = () =>{
             button.parentNode.remove();
             taskCount =-1;
             displayCount(taskCount);
        };
    });
    const editButtons = document.querySelectorAll(".edit");
    const newTaskInput = document.getElementById("TaskInput"); 
    let targetElement;
    
    editButtons.forEach((editBtn) => {
        editBtn.onclick = (e) => {
            targetElement = e.target;
    
            if (!(e.target.className == "edit")) {
                targetElement = e.target.parentElement;
            }
    
            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
    });
    
 
 const tasksCheck =document.querySelectorAll(".task-check");
 tasksCheck.forEach((checkBox)=>{
    checkBox.onChange=() => {
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkbox.checked){
            taskCount -=1;

        }

        else{
            taskCount +=1;
        }
        displayCount(taskCount);
    };
 });
 taskCount +=1;
 displayCount(taskCount);
 newTaskInput.value="";
};

addBtn.addEventListener("click", addTask);





