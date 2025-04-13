
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

function copyScript() {
    const script = `loadstring(game:HttpGet('https://sussyscript.fun/loader'))()`;
    navigator.clipboard.writeText(script).then(() => {
        alert("Script copied to clipboard!");
    });
}
