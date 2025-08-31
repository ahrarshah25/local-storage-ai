console.log("JS Connected Success!");







document.getElementById("submitBtn").addEventListener("click", () => {
    const input = document.getElementById("userInput").value.toLowerCase();
let response = "";

if(input === "hello"){
    response = "Hello How Can I Assist You Sir!";
}else if(input === "your owner"){
    response = "AS Developers!";
}else {
    response = "API Failed!"
}




document.getElementById("response").innerText = response;
});