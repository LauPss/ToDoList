import ChecklistObject from "./checklistObject.js";
import ListCleaner from "../renderers/listCleaner.js";
import StoreProjectList from "../components/storeProjectList.js";
import TaskObject from "./taskObject.js";
import TaskRenderer from "../renderers/taskRenderer.js";

export default function StoreNewTask (list, projList) {
	const addBtn = document.getElementById("addBtn");
	const inputTitle = document.getElementById("inputtitle");
	const inputDescription = document.getElementById("inputdescription");
	const inputDueDate = document.getElementById("inputduedate");
	const inputPriority = document.querySelector("input[name=priority]:checked");
	const inputNotes = document.getElementById("inputnotes");
	const checklistContainer = document.getElementById("formChecklistContainer");
	const checklistItems = document.querySelectorAll(".formChecklistItem");
	
	const checklist = [];
	if (checklistItems.length > 0) {
		checklistItems.forEach(item => {
			if (item.value !== 0) {
				const val = item.value;
				const newItem = ChecklistObject(val, false);
				checklist.push(newItem);
			}
		});
	}
	
	const clearAll = () => {
		const defaultPriority = document.querySelector("input[name=priority][value=low]");
		
		defaultPriority.checked = true;

		inputTitle.value = ""; 
		inputDescription.value = "";
		inputDueDate.value = ""; 
		inputNotes.value = "";
		
		checklistContainer.innerHTML = "";
		checklist = [];
	}
	
	if (inputTitle.value.length > 0) {
		const newTask = TaskObject(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value, inputNotes.value, checklist, false);
		list.push(newTask);
		StoreProjectList(projList);
		ListCleaner();
		TaskRenderer(list);
		clearAll();
	}
}
