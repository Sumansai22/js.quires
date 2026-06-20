let user = {
    name: "Rahul",
    email: "abc@gmail.com"
};

document.getElementById("title").innerText = "Q22 - Object Property Check";

document.getElementById("output").innerHTML = user.hasOwnProperty("email");