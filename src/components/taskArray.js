import ChecklistObject from "./checklistObject.js";
import TaskObject from "./taskObject.js";

const item1 = ChecklistObject("Chapter 1", true);
const item2 = ChecklistObject("Chapter 2", false);
const item3 = ChecklistObject("Article", false);

const chapters = [item1, item2, item3];

const task1 = TaskObject("Study for the test", "From the book + exercise book + article", "2021-08-21", "high", "From page 15 to page 75", chapters, false);
const task2 = TaskObject("Mom\'s birthday party", "Location: Jidoor, gallery.", "2021-08-29", "medium", "The present is in the bottom drawer.", [], false);
const task3 = TaskObject("Go for a walk", "Remember to buy milk and bread on the way back.", "2021-08-15", "low", "Stay outside for at least 1h30m.", [], true);

export const TaskList = [task1, task2, task3];
