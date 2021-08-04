export default function ListCleaner () {
	const outdatedList = document.querySelectorAll(".taskContainer");
	
	outdatedList.forEach(item => {
		item.remove();
	});
}
