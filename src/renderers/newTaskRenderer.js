import TaskFormRenderer from "./taskFormRenderer.js";

export default function NewTaskRenderer (list) {
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
	
	TaskFormRenderer(list);
	
	const displayController = () => {
		if (newTaskContainer.classList.contains("hideForm") === false) {
			const formContainer = document.getElementById("formContainer");
				
			displayButton.classList.add("hidden");
			formContainer.classList.remove("hidden");
		}
	}	
	displayController();
}
