let featuresToggler = document.querySelector(".featuresToggler");
let features = document.querySelector('#features');

let teamToggler = document.querySelector(".teamToggler");
let team = document.querySelector("#team");

let signinToggler = document.querySelector(".signinToggler");
let signin = document.querySelector("#signin");

featuresToggler.addEventListener('click', function (e) {
	e.preventDefault();
	features.scrollIntoView({behavior:'smooth',})
})

teamToggler.addEventListener('click', function (e) {
	e.preventDefault();
	team.scrollIntoView({behavior:'smooth',})
})

signinToggler.addEventListener('click', function (e) {
	e.preventDefault();
	signin.scrollIntoView({behavior:'smooth',})
})