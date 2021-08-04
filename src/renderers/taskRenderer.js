import EditTask from "../components/editTask.js";
import ShowDetails from "../components/showDetails.js";
import TaskChecklistRenderer from "./taskChecklistRenderer.js";
import TaskObject from "../components/taskObject.js";
import TaskEraser from "../components/taskEraser.js";

export default function TaskRenderer (list) {
	list.forEach((TaskObject, index) => {
		const listContainer = document.getElementById("listContainer");
		const taskHeader = document.createElement("div");
		const container = document.createElement("li");
		const checkbox = document.createElement("input");
		const label = document.createElement("label");
		const dueDate = document.createElement("span");
		const editButton = document.createElement("button");
		const moreButton = document.createElement("button");
		const delButton = document.createElement("button");
		
		container.dataset.indexNumber = index;
		container.classList.add("taskContainer");
		container.id = index;
		
		taskHeader.id = "taskHeader";
		
		checkbox.id = TaskObject.title;
		checkbox.classList.add("taskCheckbox");
		checkbox.name = TaskObject.title;
		checkbox.type = "checkbox";
		checkbox.addEventListener("change", (e) => {
			if (checkbox.checked) {
				container.classList.add("completedTask");
			} else {
				container.classList.remove("completedTask");
			}
		});
		
		label.setAttribute("for", checkbox.id);
		label.innerText = checkbox.id;
		
		dueDate.id = "dueDate";
		dueDate.innerText = TaskObject.dueDate;
		
		editButton.id = "editButton";
		editButton.innerText = "Edit";
		editButton.addEventListener("click", (e) => {
			EditTask(list, index);
		});
		
		moreButton.id = "moreButton";
		moreButton.classList.toggle("hideDetails");
		moreButton.innerText = "+";
		
		delButton.id = "delTaskButton";
		delButton.innerText = "X";
		delButton.addEventListener("click", (e) => {
			TaskEraser(list, index);
		});
		
		taskHeader.appendChild(checkbox);
		taskHeader.appendChild(label);
		taskHeader.appendChild(dueDate);
		taskHeader.appendChild(editButton);
		taskHeader.appendChild(moreButton);
		taskHeader.appendChild(delButton);
		container.appendChild(taskHeader);
		
		const textArray = [TaskObject.description, TaskObject.notes];
		textArray.forEach(value => {
			const valueParag = document.createElement("p");
			valueParag.innerText = value;
			valueParag.classList.add("details");
			valueParag.classList.add("hidden");
			container.appendChild(valueParag);
		});
		
		const PriorityChecker = () => {
			if (TaskObject.priority === "low") {
				container.classList.add("low");
			} else if (TaskObject.priority === "medium") {
				container.classList.add("medium");
			} else if (TaskObject.priority === "high") {
				container.classList.add("high");
			}
		}
		PriorityChecker();
		
		listContainer.appendChild(container);
		
		TaskChecklistRenderer(TaskObject, index);
		
		moreButton.addEventListener("click", (e) => {
			ShowDetails(index);
		})
	});
}


