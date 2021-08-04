import TaskObject from "./taskObject.js";
import TaskRenderer from "../renderers/taskRenderer.js";
import ListCleaner from "../renderers/listCleaner.js";

export default function StoreNewTask (list) {
	const addBtn = document.getElementById("addBtn");
	const inputTitle = document.getElementById("inputtitle");
	const inputDescription = document.getElementById("inputdescription");
	const inputDueDate = document.getElementById("inputduedate");
	const inputPriority = document.querySelector("input[name=priority]:checked");
	const inputNotes = document.getElementById("inputnotes");
	const checklistContainer = document.getElementById("formChecklistContainer");
	const checklistFlag = document.getElementById("isChecklistFlag");
	const checklistItems = document.querySelectorAll(".formChecklistItem");
	
	const checklist = [];
	if (checklistItems.length > 0) {
		checklistItems.forEach(item => {
			const val = item.value;
			checklist.push(val);
		});
	}
	
	const clearAll = () => {
		const defaultPriority = document.querySelector("input[name=priority][value=low]");
		
		defaultPriority.checked = true;
		checklistFlag.checked = false;
		
		inputTitle.value = ""; 
		inputDescription.value = "";
		inputDueDate.value = ""; 
		inputNotes.value = "";
		
		checklistContainer.innerHTML = "";
		checklist = [];
	}
	
	if (inputTitle.value.length > 0) {
		const newTask = TaskObject(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value, inputNotes.value, checklist);
		list.push(newTask);
		ListCleaner();
		TaskRenderer(list);
		clearAll();
	}
	
}
