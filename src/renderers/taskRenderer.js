import EditTask from "../components/editTask.js";
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { parseISO } from 'date-fns';
import ShowDetails from "../components/showDetails.js";
import StoreProjectList from "../components/storeProjectList.js";
import TaskChecklistRenderer from "./taskChecklistRenderer.js";
import TaskObject from "../components/taskObject.js";
import TaskEraser from "../components/taskEraser.js";

export default function TaskRenderer (list, projList) {
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
		
		if (TaskObject.completion === true) {
			checkbox.checked = true;
			container.classList.add("completedTask");
		}
		
		checkbox.addEventListener("change", (e) => {
			if (checkbox.checked === true) {
				TaskObject.completion = true;
				container.classList.add("completedTask");
			} else {
				TaskObject.completion = false;
				container.classList.remove("completedTask");
			}
			StoreProjectList(projList);
		});
		
		label.setAttribute("for", checkbox.id);
		label.innerText = checkbox.id;
		
		dueDate.id = "dueDate";
		const parsedDate = parseISO(TaskObject.dueDate);
		dueDate.innerText = formatDistanceToNow(
			parsedDate, 
			{addSuffix: true}
		);
		
		editButton.id = "editButton";
		editButton.innerText = "📝";
		editButton.addEventListener("click", (e) => {
			EditTask(projList, list, index);
		});
		
		moreButton.id = "moreButton";
		moreButton.classList.toggle("hideDetails");
		moreButton.innerText = "+";
		
		delButton.id = "delTaskButton";
		delButton.innerText = "X";
		delButton.addEventListener("click", (e) => {
			TaskEraser(list, index);
			StoreProjectList(projList);
		});
		
		taskHeader.appendChild(checkbox);
		taskHeader.appendChild(label);
		taskHeader.appendChild(dueDate);
		taskHeader.appendChild(editButton);
		taskHeader.appendChild(moreButton);
		taskHeader.appendChild(delButton);
		container.appendChild(taskHeader);
		
		const dateString = "Due date: " + format(parsedDate, "PPPP") + ".";
		const textArray = [dateString, TaskObject.description, TaskObject.notes];
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
		
		TaskChecklistRenderer(TaskObject, index, projList);
		
		moreButton.addEventListener("click", (e) => {
			ShowDetails(index);
		})
	});
}


