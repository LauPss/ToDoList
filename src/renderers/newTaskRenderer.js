import TaskFormRenderer from "./taskFormRenderer.js";

export default function NewTaskRenderer (list, projList) {
	const listContainer = document.getElementById("listContainer");
	const newTaskContainer = document.createElement("li");
	const displayButton = document.createElement("button");
	
	newTaskContainer.id = "newTaskContainer";
	newTaskContainer.classList.add("hideForm");
	
	displayButton.id = "openFormBtn";
	displayButton.innerText = "+";
	displayButton.addEventListener("click", (e) => {
		newTaskContainer.classList.remove("hideForm");
		displayController();
	});
	
	newTaskContainer.appendChild(displayButton);
	listContainer.appendChild(newTaskContainer);
	
	TaskFormRenderer(list, projList);
	
	const displayController = () => {
		if (newTaskContainer.classList.contains("hideForm") === false) {
			const formContainer = document.getElementById("formContainer");
			const btnContainer = document.getElementById("btnContainer");
				
			displayButton.classList.add("hidden");
			formContainer.classList.remove("hidden");
			btnContainer.classList.remove("hidden");
		}
	}	
	displayController();
}
