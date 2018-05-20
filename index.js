function getFirstSelector(selector) {
  let element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  let element = document.getElementById('nested').querySelector('.target');
  return element;
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < elements.length; i++) {
    let number = parseInt(elements[i].innerHTML);
    number += n;
    elements[i].innerHTML = number;
  }
}

function deepestChild() {
  let divGrandNode = document.getElementById("grand-node");
	let divs = divGrandNode.querySelectorAll('div');
	let divsNum = divs.length;
	let lastDiv = divsNum - 1;
	let deepest = divs[lastDiv];
	return deepest;
	
}