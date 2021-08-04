export default function LoadProjectList () {
	const strJSON = localStorage.getItem("storedArray");
	const projectArr = JSON.parse(strJSON);
	return projectArr;
}
