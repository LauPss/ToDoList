import { TaskList } from "./taskArray.js";
import ListCleaner from "../renderers/listCleaner.js";
import TaskRenderer from "../renderers/taskRenderer.js";

export default function TaskEraser (list, index) {
	list.splice(index, 1);
	ListCleaner();
	TaskRenderer(list);
}
