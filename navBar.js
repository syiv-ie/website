//(made by Sylvie) 🏳️‍⚧️
//disord @syiv 

let currentPath = (window.location.pathname).split('/')[1].split('.')[0];
let currentUrl = window.location.origin;
let currentIndex = 0;

var pathList = [
    ["index", "Resume"],
    ["TsukiFarm", "Farmulator"]
]
var extraSites = [
    ["https://syiv.art/", "My art"],
    ["https://tsukisodyssey.wiki.gg/wiki/Tsuki%27s_Odyssey_Wiki", "Tsuki Wiki"]
]

let navshowing = false

buildBar();
function buildBar(){
    let topBar = document.getElementById("topBar");


    for(i = 0; i < pathList.length; i++){
        if(pathList[i][0].localeCompare(currentPath) == 0){
            currentIndex = i;
        }
    }

    let topBarBox = document.createElement("div");
    topBarBox.id = "topBarBox";
    topBar.appendChild(topBarBox);

    let pageIconBox = document.createElement("div");
    pageIconBox.id = "pageIconBox";
    topBar.appendChild(pageIconBox);
        let pageIcon = document.createElement("img");
        pageIcon.id = "pageIcon";
        pageIcon.src = "images/Buttons/" + currentPath + ".png"
        pageIconBox.appendChild(pageIcon);

    
    let titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv"; 
    topBar.appendChild(titleDiv);  
        let title = document.createElement("div");
        title.id = "title";
        title.innerHTML = pathList[currentIndex][1];
        titleDiv.appendChild(title);

    let waffleBox = document.createElement("div");
    waffleBox.id = "waffleBox";
    topBar.appendChild(waffleBox);
        let waffleIcon = document.createElement("img");
        waffleIcon.id = "waffleIcon";
        waffleIcon.src = "images/farmPlots/waffle.png";
        waffleBox.appendChild(waffleIcon);

    waffleBox.onclick = function(){
        navshowing = !navshowing;

        if(navshowing){
            topNavigationBox.style.display = "";
        }else{
            topNavigationBox.style.display = "none";
        }
    }

    let topNavigationBox = document.createElement("div");
    topNavigationBox.id = "topNavigationBox";
    topNavigationBox.style.display = "none";
    topBar.appendChild(topNavigationBox);
        for(i = 0; i < extraSites.length; i++){
            let lb = document.createElement("div");
            lb.className = "linkBox"; 
            topNavigationBox.appendChild(lb);  
                let l = document.createElement("a");
                l.id = "link";
                l.href = extraSites[i][0]
                l.innerHTML = extraSites[i][1];
                lb.appendChild(l);
        }
        for(i = 0; i < pathList.length; i++){
            let lb = document.createElement("div");
            lb.className = "linkBox"; 
            topNavigationBox.appendChild(lb);  
                let l = document.createElement("a");
                l.id = "link";
                l.href = pathList[i][0] + ".html"
                l.innerHTML = pathList[i][1];
                lb.appendChild(l);
        }
}