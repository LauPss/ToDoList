import ListCleaner from "../renderers/listCleaner.js";
import TaskRenderer from "../renderers/taskRenderer.js";

export default function EditTask(list, i) {
	const taskContainer = document.getElementById(i);
	const labelTitle = document.createElement("label");
	const labelDescr = document.createElement("label");
	const labelDate = document.createElement("label");
	const labelPriority = document.createElement("label");
	const labelNotes = document.createElement("label");
	const inputTitle = document.createElement("input");
	const inputDescr = document.createElement("input");
	const inputDate = document.createElement("input");
	const inputLow = document.createElement("input");
	const inputMedium = document.createElement("input");
	const inputHigh = document.createElement("input");
	const inputNotes = document.createElement("input");
	const checklistOl = document.createElement("ol");
	const addLiButton = document.createElement("button");
	const updateButton = document.createElement("button");
	const backButton = document.createElement("button");
	
	taskContainer.innerHTML = "";
	
	labelTitle.innerText = "Title:";
	labelDescr.innerText = "Description:";
	labelDate.innerText = "Due Date:";
	labelPriority.innerText = "Priority:";
	labelNotes.innerText = "Notes:";
	addLiButton.innerText = "Add Checklist Item";
	updateButton.innerText = "Save Changes";
	backButton.innerText = "Back";
	
	inputTitle.value = list[i].title;
	inputDescr.value = list[i].description;
	inputDate.value = list[i].dueDate;
	inputNotes.value = list[i].notes;
	
	const oldPriorityValue = list[i].priority;
	const Priorities = ["low", "medium", "high"];
	Priorities.forEach(priority => {
		const priorityLevelLabel = document.createElement("label");
		const priorityInput = document.createElement("input");
		
		priorityLevelLabel.name = "priority";
		priorityInput.name = "priority";
		
		priorityLevelLabel.innerText = priority;
		priorityInput.type = "radio";
		priorityInput.value = priority;
		
		priorityLevelLabel.appendChild(priorityInput);
		labelPriority.appendChild(priorityLevelLabel);
		
		if (priorityInput.value === oldPriorityValue) {
			priorityInput.checked = true;
		}
	});

	taskContainer.appendChild(labelTitle);
	taskContainer.appendChild(labelDescr);
	taskContainer.appendChild(labelDate);
	taskContainer.appendChild(labelPriority);
	taskContainer.appendChild(labelNotes);
	labelTitle.appendChild(inputTitle);
	labelDescr.appendChild(inputDescr);
	labelDate.appendChild(inputDate);
	labelNotes.appendChild(inputNotes);
	taskContainer.appendChild(checklistOl);
	checklistOl.appendChild(addLiButton);
	taskContainer.appendChild(updateButton);
	taskContainer.appendChild(backButton);
	
	addLiButton.addEventListener("click", (e) => {
		const listItem = document.createElement("li");
		const input = document.createElement("input");
		
		input.classList.add("editChecklistItems");
		
		checklistOl.appendChild(listItem);
		listItem.appendChild(input);
	});
	
	if (list[i].checklist.length > 0) {
		const checklist = list[i].checklist;
		checklist.forEach(item => {
			const listItem = document.createElement("li");
			const input = document.createElement("input");
			
			input.classList.add("editChecklistItems");
			input.value = item;
			
			checklistOl.appendChild(listItem);
			listItem.appendChild(input);
		});
	}
	
	backButton.addEventListener("click", (e) => {
		ListCleaner();
		TaskRenderer(list);
	});
	
	updateButton.addEventListener("click", (e) => {
		const inputPriority = taskContainer.querySelector("input[name=priority]:checked");
		const checklistItems = taskContainer.querySelectorAll(".editChecklistItems");
		
		const checklist = [];
		if (checklistItems.length > 0) {
			checklistItems.forEach(item => {
				if (item.value !== "") {
					const val = item.value;
					checklist.push(val);
				}
			});
		}
		
		list[i].title = inputTitle.value;
		list[i].description = inputDescr.value;
		list[i].dueDate = inputDate.value;
		list[i].priority = inputPriority.value;
		list[i].notes = inputNotes.value;
		list[i].checklist = checklist;
		
		ListCleaner();
		TaskRenderer(list);
	});
}
