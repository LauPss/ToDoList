import FormChecklistRenderer from "./formChecklistRenderer.js";
import StoreNewTask from "../components/storeNewTask.js";

export default function TaskFormRenderer (list, projList) {
	const newTaskContainer = document.getElementById("newTaskContainer");
	const displayBtn = document.getElementById("openFormBtn");
	const formContainer = document.createElement("div");
	const btnContainer = document.createElement("div");
	
	formContainer.classList.add("hidden");
	btnContainer.classList.add("hidden");
	formContainer.id = "formContainer";
	btnContainer.id = "btnContainer";
	
	newTaskContainer.appendChild(formContainer);
	newTaskContainer.appendChild(btnContainer);
	
	const TextProperties = ["title", "description", "notes"];
	TextProperties.forEach(property => {
		const propertyLabel = document.createElement("label");
		const propertyInput = document.createElement("input");
		
		propertyLabel.classList.add("newTaskElements");
		propertyInput.classList.add("newTaskElements");
		propertyInput.id = "input" + property;
		
		propertyLabel.innerText = property + ":";
		
		propertyLabel.appendChild(propertyInput);
		formContainer.appendChild(propertyLabel);
	});
	
	const priorityLabel = document.createElement("label");
	priorityLabel.innerText = "Priority:";
	priorityLabel.name = "priority";
	priorityLabel.classList.add("newTaskElements");
	formContainer.appendChild(priorityLabel);
	
	const Priorities = ["low", "medium", "high"];
	Priorities.forEach(priority => {
		const priorityLevelLabel = document.createElement("label");
		const priorityInput = document.createElement("input");
		
		priorityLevelLabel.name = "priority";
		priorityInput.name = "priority";
		
		priorityLevelLabel.classList.add("newTaskElements");
		priorityInput.classList.add("newTaskElements");
		priorityLevelLabel.classList.add("newTaskPriorities");
		priorityInput.classList.add("newTaskPriorities");
		
		priorityLevelLabel.innerText = priority;
		priorityInput.type = "radio";
		priorityInput.value = priority;
		
		priorityLevelLabel.appendChild(priorityInput);
		priorityLabel.appendChild(priorityLevelLabel);
		
		if (priority === "low") {
			priorityInput.checked = true;
		}
	});
	
	const dueDateLabel = document.createElement("label");
	const dueDateInput = document.createElement("input");
	
	dueDateLabel.classList.add("newTaskElements");
	dueDateInput.classList.add("newTaskElements");
	dueDateInput.id = "inputduedate";
	
	dueDateLabel.innerText = "Due Date:";
	dueDateInput.type = "date";
	
	dueDateLabel.appendChild(dueDateInput);
	formContainer.appendChild(dueDateLabel);
	
	FormChecklistRenderer();
	
	const addBtn = document.createElement("button");
	addBtn.innerText = "Add Task and Close";
	addBtn.id = "addBtn";
	btnContainer.appendChild(addBtn);
	addBtn.addEventListener("click", (e) => {
		const inputTitle = document.getElementById("inputtitle");
		
		if (inputTitle.value.length > 0) {
			displayBtn.classList.remove("hidden");
			formContainer.classList.add("hidden");
			btnContainer.classList.add("hidden");
			newTaskContainer.classList.add("hideForm");
			StoreNewTask(list, projList);
		}
	});
	
	const cancelBtn = document.createElement("button");
	cancelBtn.innerText = "Cancel";
	cancelBtn.id = "cancelBtn";
	btnContainer.appendChild(cancelBtn);
	cancelBtn.addEventListener("click", (e) => {
		displayBtn.classList.remove("hidden");
		formContainer.classList.add("hidden");
		btnContainer.classList.add("hidden");
		newTaskContainer.classList.add("hideForm");
	});
	
}
