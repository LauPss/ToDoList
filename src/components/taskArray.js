import TaskObject from "./taskObject.js";

const task1 = TaskObject("Feed the cats", "Give the kitties a snacc.", "12:00", "medium", "15g each.", ["Franklin", "Trevor"]);
const task2 = TaskObject("Programme for at least 1h", "Work on the ToDo List.", "10:00", "high", "Remember to use npx webpack after every change to a .js file.", []);
const task3 = TaskObject("Take the dog out for a walk", "Remember to take the shortcut.", "16:00", "low", "Stay outside for at least 1h30m.", []);

export const TaskList = [task1, task2, task3];
