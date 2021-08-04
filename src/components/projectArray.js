import ProjectObject from "./projectObject.js";
import { TaskList } from "./taskArray.js";
import TaskObject from "./taskObject.js";

const a = TaskObject("title", "description", "27/07", "medium", "notes", "");
const b = TaskObject("a", "b", "30/01", "low", "notes", "");

const sample = ProjectObject("Sample List", TaskList);
const project1 = ProjectObject("Another List", [a]);
const project2 = ProjectObject("Yet Another List", [b]);

export const ProjectList = [sample, project1, project2];
