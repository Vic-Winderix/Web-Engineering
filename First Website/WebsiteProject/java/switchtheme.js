/*Code om de donkere/lichte stand aan te passen geschreven door Kevin Powell - https://www.youtube.com/watch?v=wodWDIdV9BY*/

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle")
var icontheme = document.getElementById("icontheme");
var ethlogo = document.getElementById("ethlogo");

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    icontheme.setAttribute("src", "/WebsiteProject/picture/sun.png")
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
    icontheme.setAttribute("src", "/WebsiteProject/picture/moon.png")
};

if(darkMode === 'enabled'){
    enableDarkMode();
}else{
    disableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled'){
        console.log("darkmode enabled");
        enableDarkMode();
    } else{
        console.log("darkmode disabled");
        disableDarkMode();
    }
});