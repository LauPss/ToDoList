export default function TaskChecklistRenderer (TaskObject, index) {
	const checklistItems = TaskObject.checklist;
	const taskContainer = document.getElementById(index);
	
	if (checklistItems.length !== 0) {
		const checklistContainer = document.createElement("ol");
		checklistContainer.classList.add("details");
		checklistContainer.classList.add("hidden");
		taskContainer.appendChild(checklistContainer);
		checklistItems.forEach(item => {
			const listItem = document.createElement("li");
			const checkbox = document.createElement("input");
			const itemText = document.createElement("p");
			
			checklistContainer.classList.add("checklist");
			checkbox.type = "checkbox";
			itemText.innerText = item;
			
			checklistContainer.appendChild(listItem);
			listItem.appendChild(checkbox);
			listItem.appendChild(itemText);
			
			checkbox.addEventListener("change", (e) => {
				listItem.classList.toggle("completedCheck");
			});
		});
	}
}
