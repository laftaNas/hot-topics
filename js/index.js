const container = document.querySelector('.container');
let btn = document.querySelectorAll('.btn');
let url = './content/home.html';

function loadData() {
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
}

function selectContent(e) {
  e.preventDefault();
    let cntLink = e.target;
    url = cntLink.href;
    loadData();
};
    
for(let singleBtn of btn){

singleBtn.addEventListener("click", selectContent);
};

loadData();