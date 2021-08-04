export default function FormChecklistRenderer () {
	const checklistContainer = document.getElementById("formChecklistContainer");
	const isChecklistCheckbox = document.getElementById("isChecklistFlag");
	const addBtn = document.createElement("button");
	
	addBtn.classList.add("addItem");
	addBtn.innerText = "Add item";
	addBtn.addEventListener("click", (e) => {
		const itemContainer = document.createElement("li");
		const checklistItem = document.createElement("input");
		checklistItem.classList.add("formChecklistItem");
		itemContainer.appendChild(checklistItem);
		checklistContainer.appendChild(itemContainer);
	});
	
	if (isChecklistCheckbox.checked) {
		checklistContainer.appendChild(addBtn);	
	} else {
		checklistContainer.innerHTML = "";
	}
}
