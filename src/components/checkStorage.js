import ListRenderer from "../renderers/listRenderer.js";
import LoadProjectList from "./loadProjectList.js";
import { ProjectList } from "./projectArray.js";
import ProjectListRenderer from "../renderers/projectRenderer.js";

export default function CheckStorage () {
	let projectList;
	
	if (!localStorage.getItem("storedArray")) {
		projectList = ProjectList;
	} else {
		projectList = LoadProjectList();
	}
	
	ProjectListRenderer(projectList);
	
	const firstProjectLi = document.querySelectorAll("li.projContainer").item(0);
	const firstTaskList = projectList[0].tasks;
	
	firstProjectLi.classList.add("selected");
	ListRenderer(firstTaskList);
}
