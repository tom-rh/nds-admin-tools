function getCurrentURL () {
	return window.location.href
}

function getIdUser(){
	const url = getCurrentURL()
	const id = url.split("/").pop().split("-")[1];
	return id;
}

function deleteUser(){
	document.body.innerHTML += '<form id="dynForm" method="post" action="/admin/users/delete/' + getIdUser() + '" data-form-type=""></form>';
	document.getElementById("dynForm").submit();
	console.log("Suppression de l'utilisateur " + getIdUser());
}

var buttonNewVersion = document.querySelector("#main-left > div.personal_info > a")

var aDelQuick = document.createElement("a");
aDelQuick.setAttribute("class", "quickDel");
aDelQuick.innerHTML = "Supprimer";
aDelQuick.setAttribute("style", "color: #FF3333;font-size: 14px;padding-top: 24px;display: inline-block;background-color: #FF8073;margin-left: 5px;");

aDelQuick.addEventListener("click", function(){
	deleteUser();
});

buttonNewVersion.after(aDelQuick);