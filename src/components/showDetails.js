export default function ShowDetails (index) {
	const taskContainer = document.getElementById(index);
	const moreButton = taskContainer.querySelector("#moreButton");
	const details = taskContainer.querySelectorAll(".details");
	
	moreButton.classList.toggle("hideDetails");
	if (moreButton.classList.contains("hideDetails")) {
		moreButton.innerText = "+";
	} else {
		moreButton.innerText = "-";
	}
	
	details.forEach(parag => {
		parag.classList.toggle("hidden");
	});
}
