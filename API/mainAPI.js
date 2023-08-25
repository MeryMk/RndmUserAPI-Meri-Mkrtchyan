
	const api_url = "https://randomuser.me/api/";
	async function getUser() {
	
	const response = await fetch(api_url);
	
	const data = await response.json();
	console.log(data.results);
	
	const user = data.results[0];
	let { title, first, last } = user.name;
	let { gender, email, phone } = user;
	let image = user.picture.large;
	let image_icon = user.picture.thumbnail;
	let age = user.dob.age;
	let { city, state, country } = user.location;
	
	let fullName = title + ". " + first + " " + last;
	document.title = fullName;
	
	document.getElementById("head").innerHTML = fullName;
	document.getElementById("email").href = "mailto:" + email;
	document.getElementById("email").innerHTML = email;
	document.getElementById("phone").href = "tel:" + phone;
	document.getElementById("phone").innerHTML = phone;
	document.querySelector("#age").textContent = age;
	document.querySelector("#gender").textContent = gender;
	
	document.querySelector("#location").textContent
			= city + ", " + state;
	
	document.querySelector("#country").textContent = country;
	
	let img = document.createElement("img");
	let img_div = document.getElementById("user-img");
	img.src = image;
	img_div.append(img);
	
	const favicon = document.getElementById("favicon");
	favicon.setAttribute("href", image_icon);
    }
    
	getUser();