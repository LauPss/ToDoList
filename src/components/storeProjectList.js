export default function StoreProjectList (list) {
	const strJSON = JSON.stringify(list); 
	localStorage.setItem("storedArray", strJSON);
}
