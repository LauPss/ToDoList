import ProjectObject from "../components/projectObject.js";
import StoreProjectList from "../components/storeProjectList.js";
import UpdateProjectList from "./updateProjectList.js";

export default function ProjectListRenderer (list) {
	const contentDiv = document.getElementById("content");
	const navBar = document.createElement("nav");
	const projectUl = document.createElement("ul");
	const title = document.createElement("h2");
	const addContainer = document.createElement("li");
	const addProjBtn = document.createElement("button");
	const labelProjTitle = document.createElement("label");
	const inputProjTitle = document.createElement("input");
	const confirmAddBtn = document.createElement("button");
	const cancelBtn = document.createElement("button");
	
	title.innerText = "PROJECTS";
	addProjBtn.innerText = "+";
	labelProjTitle.innerText = "Project Title:";
	confirmAddBtn.innerText = "Confirm New Project";
	cancelBtn.innerText = "Cancel";
	
	navBar.id = "navBar";
	projectUl.id = "projectUl";
	addContainer.id = "addContainer";
	addProjBtn.id = "openProjForm";
	addContainer.classList.add("hideForm");
	labelProjTitle.classList.add("hidden");
	confirmAddBtn.classList.add("hidden");
	cancelBtn.classList.add("hidden");
	
	contentDiv.appendChild(navBar);
	navBar.appendChild(projectUl);
	projectUl.appendChild(title);
	projectUl.appendChild(addContainer);
	addContainer.appendChild(addProjBtn);
	addContainer.appendChild(labelProjTitle);
	labelProjTitle.appendChild(inputProjTitle);
	addContainer.appendChild(confirmAddBtn);
	addContainer.appendChild(cancelBtn);
	
	UpdateProjectList(list);
	
	addProjBtn.addEventListener("click", (e) => {
		addContainer.classList.remove("hideForm");
		addProjBtn.classList.add("hidden");
		labelProjTitle.classList.remove("hidden");
		confirmAddBtn.classList.remove("hidden");
		cancelBtn.classList.remove("hidden");
	});
	
	confirmAddBtn.addEventListener("click", (e) => {
		if (inputProjTitle.value !== "") {
			const newProject = ProjectObject(inputProjTitle.value, []);
			
			addContainer.classList.add("hideForm");
			addProjBtn.classList.remove("hidden");
			labelProjTitle.classList.add("hidden");
			confirmAddBtn.classList.add("hidden");
			cancelBtn.classList.add("hidden");
			
			list.push(newProject);
			StoreProjectList(list);
			UpdateProjectList(list);
			inputProjTitle.value = "";
		}
	});
	
	cancelBtn.addEventListener("click", (e) => {
		addContainer.classList.add("hideForm");
		addProjBtn.classList.remove("hidden");
		labelProjTitle.classList.add("hidden");
		confirmAddBtn.classList.add("hidden");
		cancelBtn.classList.add("hidden");
		inputProjTitle.value = "";
	});
}
