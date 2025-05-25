function addTask() {
       const taskText=document.getElementById("taskInput").value;
          if(taskText==="") return;
            const li=document.createElement("li");
             li.textContent=taskText;
                const deletebtn=document.createElement("button");
                deletebtn.textContent="Delete";
                deletebtn onclick=function() {
                    li.remove();
                }
                li.appendChild(deletebtn);
                document.getElementById("taskList").appendChild(li);
                document.getElementById("taskInput").value= "";
            }
        
