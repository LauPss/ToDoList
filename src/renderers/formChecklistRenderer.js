export default function FormChecklistRenderer () {
	const formContainer = document.getElementById("formContainer");
	const checklistContainer = document.createElement("ol");
	const addBtn = document.createElement("button");
	
	checklistContainer.id = "formChecklistContainer";
	
	addBtn.classList.add("addItem");
	addBtn.innerText = "Add Checklist Item";
	formContainer.appendChild(addBtn);
	formContainer.appendChild(checklistContainer);
	
	addBtn.addEventListener("click", (e) => {
		const itemContainer = document.createElement("li");
		const checklistItem = document.createElement("input");
		const delBtn = document.createElement("button");
		
		delBtn.innerText = "X";
		delBtn.classList.add("delChecklistItem");
		
		checklistItem.classList.add("formChecklistItem");
		itemContainer.appendChild(checklistItem);
		itemContainer.appendChild(delBtn);
		checklistContainer.appendChild(itemContainer);
		
		delBtn.addEventListener("click", (e) => {
			itemContainer.remove();
		});
	});
}
