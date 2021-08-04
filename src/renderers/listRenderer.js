import TaskRenderer from "./taskRenderer.js";
import NewTaskRenderer from "./newTaskRenderer.js";

export default function ListRenderer (list) {
	const content = document.getElementById("content");
	const container = document.createElement("ul");
	const header = document.createElement("li");
	
	container.id = "listContainer";
	content.appendChild(container);
	
	header.id = "listHeader";
	header.innerHTML = "<h2>TASKS</h2>";
	container.appendChild(header);
	
	NewTaskRenderer(list);
	
	TaskRenderer(list);
}
