import ListRenderer from "../renderers/listRenderer.js";

export default function DisplayFirstProject (list) {
	const oldSelection = document.querySelectorAll("li.projContainer.selected");
	const firstProjectLi = document.querySelectorAll("li.projContainer").item(0);
	const listContainer = document.querySelector("#listContainer");
	const firstProject = list[0];
	
	if (oldSelection.length != 0) {
		oldSelection.forEach(selProj => {
			selProj.classList.remove("selected");
		});
	}
	
	firstProjectLi.classList.add("selected");
	listContainer.remove();
	ListRenderer(firstProject.tasks);
}
