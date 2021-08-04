import FormChecklistRenderer from "./formChecklistRenderer.js";
import StoreNewTask from "../components/storeNewTask.js";

export default function TaskFormRenderer (list) {
	const newTaskContainer = document.getElementById("newTaskContainer");
	const formContainer = document.createElement("div");
	const displayBtn = document.getElementById("openFormBtn");
	
	formContainer.classList.add("hidden");
	formContainer.id = "formContainer";
	
	newTaskContainer.appendChild(formContainer);
	
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
	
	const checklistContainer = document.createElement("ol");
	const checklistFlagLabel = document.createElement("label");
	const checklistFlag = document.createElement("input");
	
	checklistFlagLabel.classList.add("newTaskElements");
	checklistFlag.classList.add("newTaskElements");
	checklistFlag.id = "isChecklistFlag";
	checklistContainer.id = "formChecklistContainer";
	
	checklistFlagLabel.innerText = "Is it a checklist?";
	checklistFlag.type = "checkbox";
	
	checklistFlagLabel.appendChild(checklistFlag);
	formContainer.appendChild(checklistFlagLabel);
	formContainer.appendChild(checklistContainer);
	
	checklistFlag.addEventListener("change", (e) => {
		FormChecklistRenderer();
	});
	
	const addBtn = document.createElement("button");
	addBtn.innerText = "Add Task and Close";
	addBtn.id = "addBtn";
	formContainer.appendChild(addBtn);
	addBtn.addEventListener("click", (e) => {
		StoreNewTask(list);
		displayBtn.classList.remove("hidden");
		formContainer.classList.add("hidden");
		newTaskContainer.classList.add("hideForm");
	});
	
	const cancelBtn = document.createElement("button");
	cancelBtn.innerText = "Cancel";
	cancelBtn.id = "cancelBtn";
	formContainer.appendChild(cancelBtn);
	cancelBtn.addEventListener("click", (e) => {
		displayBtn.classList.remove("hidden");
		formContainer.classList.add("hidden");
		newTaskContainer.classList.add("hideForm");
	});
	
}
