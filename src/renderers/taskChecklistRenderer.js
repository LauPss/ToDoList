import StoreProjectList from "../components/storeProjectList.js";

export default function TaskChecklistRenderer (TaskObject, index, projList) {
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
			checkbox.classList.add("checklistCheckbox");
			checkbox.type = "checkbox";
			itemText.innerText = item.item;
			
			if (item.completion === true) {
				checkbox.checked = true;
				listItem.classList.add("completedCheck");
			}
			
			checklistContainer.appendChild(listItem);
			listItem.appendChild(checkbox);
			listItem.appendChild(itemText);
			
			checkbox.addEventListener("change", (e) => {
				if (checkbox.checked === true) {
					item.completion = true;
					listItem.classList.add("completedCheck");
				} else {
					item.completion = false;
					listItem.classList.remove("completedCheck");
				}
				StoreProjectList(projList);
			});
		});
	}
}
