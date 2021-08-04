import DisplayFirstProject from "../components/displayFirstProject.js";
import ListRenderer from "./listRenderer.js";
import StoreProjectList from "../components/storeProjectList.js";
import TaskRenderer from "./taskRenderer.js";

export default function UpdateProjectList (list) {
	const projectUl = document.getElementById("projectUl");
	
	const outdatedList = document.querySelectorAll(".projContainer");
	outdatedList.forEach(item => {
		item.remove();
	});
	
	list.forEach((project, index) => {
		const projectContainer = document.createElement("li");
		const projectTitle = document.createElement("h3");
		const deleteBtn = document.createElement("button");
		
		projectContainer.classList.add("projContainer");
		deleteBtn.classList.add("delProjBtn");
		projectTitle.innerText = project.title;
		deleteBtn.innerText = "X";
		
		projectUl.appendChild(projectContainer);
		projectContainer.appendChild(projectTitle);	
		projectContainer.appendChild(deleteBtn);
		
		projectTitle.addEventListener("click", (e) => {
			const listContainer = document.getElementById("listContainer");
			const projContainers = document.querySelectorAll(".projContainer");
			
			projContainers.forEach(container => {
				container.classList.remove("selected");
			});
			
			projectContainer.classList.add("selected");
			listContainer.remove();
			ListRenderer(project.tasks);
		});
		
		deleteBtn.addEventListener("click", (e) => {
			list.splice(index, 1);
			StoreProjectList(list);
			UpdateProjectList(list);
			DisplayFirstProject(list);
		});
	});	
	
}
