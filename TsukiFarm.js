//(made by Sylvie) 🏳️‍⚧️
//disord @syiv 
//top ten "id rather do it in js" codes

let currentWebsiteVersion = "2.2";
let startingFarm = "`/2.1.0/gg52/-ad2f-cobodof-eobbdof-gobodof-id0bd0dbf-kd1bodof/-bbfd2jbld2nd2pbrd2td2vlx-dqdqfd3hqjd2lqnqpd2rqtqvlx-fbbodofohd2jolonoporotovbx-he1bqdqfbhqjblqnqpbrqtqve3x-jodofohd1jolonoporotov-lbbqdqfd0hqjd1lqnqpbrqtqvbx-ne1bodofbhd1jblonoporotove3x-pqdqfd2hqjd1lqnqpbrqtqv-rbbodofohd1jolonoporotovbx-te1bqdqfbhqjblqnqpd0rqtqvd3x-vodofohd1jolonopbre3t-xbbqdqfbhqjblqnqpd3r/-bd2bd2d-dobod-fobbd-hobod///-bobodofoh-dobbdbfoh-fobodofoh-hd0bd0dd0fd0h/`"
startingFarm = "";
startingFarm = window.location.search

let tutorialFarm = "`/2.1.0/ag10//-bqlmnbpd3r-dqlfn-hll-jlj/////`"
let pausedFarm = ""


let chosenFarmSpot = 12;
let previousPlot = chosenFarmSpot;
let chosenFarmSpotDirection = 0;

let orbs = 0;
let chosenHoe = 0;
let chosenSickle = 0;
let chosenMoon = 0;
let chosenMoonYield = 0;
let sickleYield = chosenSickle;

let revealWateredSelected = false;
let revealFertSelected = false;
let revealUVSelected = false;

let helpShown = false;

let toggleCount = 4;
let consumableSelected = true;
let fertCostSelected = true;
let strangeSelected = true;
let sickleSelected = true;
var toggleList = [
    consumableSelected,
    fertCostSelected,
    strangeSelected,
    sickleSelected
]

let baseStrangeRate = .0015;
let baseOrbPrice = 10000;

var plotCount = [];
let groups = [];

//randomize this to be between 10 and 50 centered on 30 
let luck = 30;
setLuck();
const maxLuck = 250;

let canRedo = false;
let undoRedoPosition = 0;
let highestRedoPosition = 0;
var undoRedoList = []; 
undoRedoList.length = 1000;
for(let i = 0; i < undoRedoList.length; i++){
    undoRedoList[i] = "";
}

//variables for the brute force thing
let winnerWinner = 0;
let winnerStructure = "";
let currentStructure = "";
var endgameIDs = [
    1,4,16,14
];//16,14,4,1

/////////////////////////////////////////////
// Structure: 2d array:  
//   x = part of structure
//   z = empty   
//   {w,u,f,s,p,b} = structure effect{watered, uv'd, fertilized, strawberried, planted, breed spot}     
//   Default facing UP
//
// Name
// time, value, price, minYield, maxYield
/////////////////////////////////////////////
let clear = new plot(
    [['x']],
    'Empty',    
    0,0,0,0,0);
let sprinkler = new plot(
    [['w','w','w'],
     ['w','x','w'],
     ['w','w','w']],
    'Sprinkler',    
    0,0,0,0,0);
let laneSprinkler = new plot(
    [['w','z','w'],
     ['w','x','w'],
     ['w','x','w'],
     ['w','x','w'],
     ['w','z','w']],  
    'LaneSprinkler',
    0,0,0,0,0);
    laneSprinkler.isDirectional = true;
let megagrow = new plot(
    [['u'],
     ['u'],
     ['u'],
     ['x']],  
    'MegaGrow',
    0,0,0,0,0);
    megagrow.isDirectional = true;
let gigagrow = new plot(
    [['u','u','u','u'],
     ['u','u','u','u'],
     ['z','x','x','z']],  
    'GigaGrow',
    0,0,0,0,0);
    gigagrow.isDirectional = true;
let goatFert = new plot(
    [['f','f','f'],
     ['f','x','f'],
     ['f','f','f']],  
    'GoatFert',
    0,0,0,0,0);
let bullFert = new plot(
    [['f','f','f','f'],
     ['f','x','x','f'],
     ['f','x','x','f'],
     ['f','f','f','f']],  
    'BullFert',
    0,0,0,0,0);
let elephantFert = new plot(
    [['f','f','f','f','f'],
     ['f','x','x','x','f'],
     ['f','x','x','x','f'],
     ['f','x','x','x','f'],
     ['f','f','f','f','f']],  
    'ElephantFert',
    0,0,0,0,0);
let plantFlower = new plot(
    [['p','p','p'],
     ['p','x','p'],
     ['p','p','p']],  
     'Plant',
    0,0,0,0,0);
    plantFlower.canFreePlace = true;
let fourLeafClover = new plot(
    [['b','z','b'],
     ['z','x','z'],
     ['b','z','b']],  
    '4 Leaf Clover',
    0,0,0,0,0);
    fourLeafClover.canFreePlace = true;
let sixteenLeafClover = new plot(
    [['b','z','b'],
     ['z','x','z'],
     ['b','z','b']],  
    '16 Leaf Clover',
    0,0,0,0,0);
    sixteenLeafClover.canFreePlace = true;
let sixtyfourLeafClover = new plot(
    [['b','z','b'],
     ['z','x','z'],
     ['b','z','b']],  
    '64 Leaf Clover',
    0,0,0,0,0);
    sixtyfourLeafClover.canFreePlace = true;
let emptyPlot = new plot(
    [['x']],  
    'Farm',
    2,0,0,0,0);
    emptyPlot.isCrop = true; //the usual check to see if there is a min yield wont work here so I have to let it know
let carrot = new plot(
    [['x']],  
    'Carrot',
    2,1,0,20,20);
let grape = new plot(
    [['x']],  
    'Grape',
    2,4,0,6,6);
    grape.isSeedCapped = true;
let gloamroot = new plot(
    [['x']],  
    'Gloamroot',
    2,5,0,5,5);//can be ten max with moon..
    gloamroot.isSeedCapped = true;
let strawberry = new plot(
    [['s','s','s'],
     ['s','x','s'],
     ['s','s','s']],  
    'Strawberry',
    2,2,0,5,5);
    strawberry.isSeedCapped = true;
let turnip = new plot(
    [['x']],  
    'Turnip',
    2,1,0,12,32);
    turnip.isSeedCapped = true;
let potato = new plot(
    [['x']],  
    'Potato',
    1,1,0,11,11);
    potato.isSeedCapped = true;
let onion = new plot(
    [['x']],  
    'Onion',
    3,3,0,6,6);
    onion.isSeedCapped = true;
let pumpkin = new plot(
    [['x']],  
    'Pumpkin',
    2,100,50,1,1);
let melon = new plot(
    [['x']],  
    'Melon',
    6,200,60,1,1);

let plotList = [        // I HATEEEE having IDs so much but idk how to move on from them for now...ugh
    clear,              //0
    sprinkler,          //1
    laneSprinkler,      //2
    megagrow,           //3
    gigagrow,           //4
    goatFert,           //5
    bullFert,           //6
    elephantFert,       //7
    plantFlower,        //8
    fourLeafClover,     //9
    sixteenLeafClover,  //10
    sixtyfourLeafClover,//11
    emptyPlot,          //12
    carrot,             //13
    grape,              //14
    gloamroot,          //15
    strawberry,         //16
    turnip,             //17
    onion,              //18
    potato,             //19
    pumpkin,            //20
    melon               //21
];

/////////////////////////////////////////////

function makeGroups() {
    groups.length = data.groups.length;
    for(var l = 0; l < data.groups.length; l++){//width and height are swapped here 
        groups[l] = new group(data.groups[l].width, data.groups[l].height, data.groups[l].heightOffset, data.groups[l].widthOffset);
        for(var b = 0; b < data.groups[l].blanks.length; b++)
        {
            groups[l].plots[data.groups[l].blanks[b].x][data.groups[l].blanks[b].y] = -1;
        }
    }
}



function numberWithCommas(x) {//thanks stackoverflow i love you
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}



buildFarm();
function buildFarm(){
    console.log(strawberry.isClover)
    
    makeGroups();
    let charCode = "A".charCodeAt(0);
    let farm = document.getElementById("Farm");

    let gridDiv = document.createElement("div");// i had to split it up unto visual and buttons
    gridDiv.id = "gridDiv";
    farm.appendChild(gridDiv);
        let plotsDiv = document.createElement("div");
        plotsDiv.id = "plotsDiv";
        gridDiv.appendChild(plotsDiv);
        let placerDiv = document.createElement("div");
        placerDiv.id = "placerDiv";
        gridDiv.appendChild(placerDiv);

    for(let l = 0; l < groups.length; l++){// these are the places the board gets written to
        let letta = String.fromCharCode(charCode + l);
        let g = document.createElement("table");
        g.id = "group"+letta;
        g.className = "gridTable";
        g.style.position = "relative";
        g.style.left = data.groups[l].left;
        g.style.top = data.groups[l].top;
        plotsDiv.appendChild(g);
        for(let i=0; i<groups[l].height; i++){
            let row = document.createElement("tr");
            g.appendChild(row);
            for(let j=0; j<groups[l].width; j++){
                let td = document.createElement("td");
                let plot = document.createElement("div");
                plot.id = "plot"+letta+i+","+j;
                plot.className = "plot";
                plot.style.filter = "";
                plot.dataset.x = j;
                plot.dataset.y = i;
                if(groups[l].plots[i][j] == -1){
                    plot.className = "plotNull";
                }
                else{
                    plot.className = "plot";
                }
                td.appendChild(plot);
                row.appendChild(td);
            }
        }
    }

    for(let l = 0; l < groups.length; l++){// this is the duplicate invisible board on top that gets clicked
        let letta = String.fromCharCode(charCode + l);
        let g = document.createElement("table");
        g.id = "pGroup"+letta;
        g.className = "placerTable";
        g.style.position = "relative";
        g.style.left = data.groups[l].left;
        g.style.top = data.groups[l].top;
        placerDiv.appendChild(g);
        for(let i=0; i<groups[l].height; i++){
            let row = document.createElement("tr");
            g.appendChild(row);
            for(let j=0; j<groups[l].width; j++){
                let td = document.createElement("td");
                let plot = document.createElement("div");
                plot.id = "placer"+letta+i+","+j;
                plot.className = "plot";
                plot.style.filter = "";
                plot.dataset.x = j;
                plot.dataset.y = i;
                if(groups[l].plots[i][j] == -1){
                }
                else{
                    plot.className = "plot";
                    plot.onclick = function(){
                        undoRedoList[undoRedoPosition] = "";
                        undoRedoList[undoRedoPosition] = printFarmstructure();
                        canRedo = false;
                        highestRedoPosition = undoRedoPosition;
                        undoRedoPosition++
                        groups[l].updatePlot(chosenFarmSpot, chosenFarmSpotDirection, i, j, letta);
                        calculateBoard();
                    }
                }
                td.appendChild(plot);
                row.appendChild(td);
            }
        }
    }
    
    

    let uiDiv = document.createElement("div");
    uiDiv.id = "uiDiv";
    farm.appendChild(uiDiv);
    uiDiv.style.display = "";

    //if i create a div with 0x0 dimensions and put everything in there, everything after this wont shift around when the 
    //display shows up.. heh yeah i am a genius please praise me heh heh
    //////////////////////////////breed stuffs///////////////////////////////////
    let breedDiv = document.createElement("div");
    breedDiv.id = "breedDiv";
    uiDiv.appendChild(breedDiv);
        let breedDisplay = document.createElement("div");
        breedDisplay.id = "breedDisplay";
        breedDiv.appendChild(breedDisplay);
            let breedTableDiv = document.createElement("div");
            breedTableDiv.id = "breedTableDiv";
            breedDisplay.appendChild(breedTableDiv);
                let breedParentCountDiv = document.createElement("div");
                breedParentCountDiv.id = "breedParentCountDiv";
                breedParentCountDiv.className = "breedDisplayImgDiv";
                breedDisplay.appendChild(breedParentCountDiv);
                    let breedParentCount = document.createElement("div");
                    breedParentCount.id = "breedParentCount";
                    breedParentCountDiv.appendChild(breedParentCount);
                    breedParentCount.innerHTML = "#";
                let breedSpotImgDiv = document.createElement("div");
                breedSpotImgDiv.id = "breedSpotImgDiv";
                breedSpotImgDiv.className = "breedDisplayImgDiv";
                breedDisplay.appendChild(breedSpotImgDiv);
                    let breedSpotImg = document.createElement("img");
                    breedSpotImg.id = "breedSpotImg";
                    breedSpotImgDiv.appendChild(breedSpotImg);
                    breedSpotImg.src = "images/farmPlots/alone.png";
                let breedChanceImgDiv = document.createElement("div");
                breedChanceImgDiv.id = "breedChanceImgDiv";
                breedChanceImgDiv.className = "breedDisplayImgDiv";
                breedDisplay.appendChild(breedChanceImgDiv);
                    let breedChanceImg = document.createElement("img");
                    breedChanceImg.id = "breedChanceImg";
                    breedChanceImgDiv.appendChild(breedChanceImg);
                    breedChanceImg.src = "images/farmPlots/heart.png";
                
                let breedableCounter = 0;
                for(let i = 0; i < plotList.length; i++){
                    if(plotList[i].isBreedable){
                        let c = document.createElement("div");
                        c.className = "breedDisplayImgDiv";
                        c.id = "bdid" + i;      //breed display img div
                        c.innerHTML = "<img class=\"bdImg\" src=\"images/farmPlots/" + plotList[i].namae + ".png\">";
                        c.style.top  = (3.6 + breedableCounter * 4.1) + "vw";
                        c.style.left = (.4) + "vw";
                        breedTableDiv.appendChild(c);
                        
                        breedableCounter++;
                    }
                }
                let breedTable = document.createElement("table");
                breedTable.id = "breedTable";
                breedTableDiv.appendChild(breedTable);
                breedableCounter = 0;
                for(let i = 0; i < plotList.length; i++){
                    if(plotList[i].isBreedable){
                        let row = document.createElement("tr");
                        breedTable.appendChild(row);
                        for(let j=0; j<3; j++){
                            let td = document.createElement("td");
                            let breedTableCell = document.createElement("div");
                            breedTableCell.id = "breedTable" + i + "," + j;
                            breedTableCell.className = "breedTableCell";
                            td.appendChild(breedTableCell);
                            row.appendChild(td);
                        }
                        breedableCounter++;
                    }
                }
            let breedProfitTableDiv = document.createElement("div");
            breedProfitTableDiv.id = "breedProfitTableDiv";
            breedDisplay.appendChild(breedProfitTableDiv);
                let breedProfitTable = document.createElement("table");
                breedProfitTable.id = "breedProfitTable";
                breedProfitTableDiv.appendChild(breedProfitTable);
                breedProfitTableDiv.style.display = "none"
                breedableCounter = 0;
                for(let i = 0; i < plotList.length; i++){
                    if(plotList[i].isBreedable){
                        let row = document.createElement("tr");
                        breedProfitTable.appendChild(row);
                        for(let j=0; j<3; j++){
                            let td = document.createElement("td");
                            let breedTableCell = document.createElement("div");
                            breedTableCell.id = "breedProfitTable" + i + "," + j;
                            breedTableCell.className = "breedProfitTableCell";
                            if(j%2 == 1){
                                breedTableCell.style.borderColor = "#de7373";
                                breedTableCell.style.backgroundColor = "#f2ded6";
                            }else{
                                breedTableCell.style.borderColor = "#bfc673";
                                breedTableCell.style.backgroundColor = "#eef2d6";
                            }
                            td.appendChild(breedTableCell);
                            row.appendChild(td);
                        }
                        breedableCounter++;
                    }
                }
                //document.getElementById("playerStrangerateScore").innerHTML = Math.round(100000 * cloverStrangeEffect) / 1000 + "%";
                //document.getElementById("playerCloverTimeScore").innerHTML = Math.round(100000 * (1/cloverTimeEffect)) / 1000 + "%";
            let cloverEffectsDiv = document.createElement("div");
            cloverEffectsDiv.id = "cloverEffectsDiv";
            breedDisplay.appendChild(cloverEffectsDiv);
                let cloverEffects = document.createElement("div");
                cloverEffects.id = "cloverEffects";
                cloverEffectsDiv.appendChild(cloverEffects);
                    let strangeRateLabel = document.createElement("div");
                    strangeRateLabel.id = "strangeRateLabel";
                    strangeRateLabel.innerHTML = "Strange Rate: ";
                    cloverEffects.appendChild(strangeRateLabel);
                    let timeRateLabel = document.createElement("div");
                    timeRateLabel.id = "timeRateLabel";
                    timeRateLabel.innerHTML = "Clover Time: ";
                    cloverEffects.appendChild(timeRateLabel);

                    let strangeRateScore = document.createElement("div");
                    strangeRateScore.id = "strangeRateScore";
                    strangeRateScore.innerHTML = Math.round(100000 * baseStrangeRate) / 1000 + "%";
                    cloverEffects.appendChild(strangeRateScore);
                    let timeRateScore = document.createElement("div");
                    timeRateScore.id = "timeRateScore";
                    timeRateScore.innerHTML = "100%";
                    cloverEffects.appendChild(timeRateScore);

    //////////////////////////////erase farm stuffs///////////////////////////////////
    let eraseFarmDiv = document.createElement("div");
    eraseFarmDiv.id = "eraseFarmDiv";
    uiDiv.appendChild(eraseFarmDiv);
        let eraseFarmImg = document.createElement("img");
        eraseFarmImg.id = "eraseFarmImg";
        eraseFarmDiv.appendChild(eraseFarmImg);
        eraseFarmImg.src = "images/farmPlots/Remove.png";
        eraseFarmImg.onclick = function(){
            undoRedoList[undoRedoPosition] = "";
            undoRedoList[undoRedoPosition] = printFarmstructure();
            canRedo = false;
            highestRedoPosition = undoRedoPosition;
            undoRedoPosition++
            for(let l=0; l<6; l++){
                groups[l].clearfarm(String.fromCharCode(charCode + l));
            }
            calculateBoard();
        }

    //////////////////////////////undoRedo stuffs///////////////////////////////////
    let undoRedoDiv = document.createElement("div");
    undoRedoDiv.id = "undoRedoDiv";
    uiDiv.appendChild(undoRedoDiv);
        let undoRedo = document.createElement("div");
        undoRedo.id = "undoRedo";
        undoRedoDiv.appendChild(undoRedo);
            let undoBox = document.createElement("div");
            undoBox.id = "undoBox";
            undoRedo.appendChild(undoBox);
                let undoImg = document.createElement("img");
                undoImg.id = "undoImg";
                undoImg.src = "images/farmPlots/undo.png";
                undoBox.appendChild(undoImg);
                undoBox.onclick = function(){
                    if(undoRedoPosition > 0){
                        undoRedoList[undoRedoPosition] = printFarmstructure();
                        undoRedoPosition--;
                        canRedo = true;
                        readFarmstructure(undoRedoList[undoRedoPosition]);
                        calculateBoard();
                    }
                }

            let redoBox = document.createElement("div");
            redoBox.id = "redoBox";
            undoRedo.appendChild(redoBox);
                let redoImg = document.createElement("img");
                redoImg.id = "redoImg";
                redoImg.src = "images/farmPlots/redo.png";
                redoBox.appendChild(redoImg);
                redoBox.onclick = function(){
                    if(canRedo){
                        if(undoRedoPosition == highestRedoPosition){
                            canRedo = false;
                        }
                        undoRedoList[undoRedoPosition] = printFarmstructure();
                        undoRedoPosition++;
                        readFarmstructure(undoRedoList[undoRedoPosition]);
                        calculateBoard();
                    }
                }

    //////////////////////////////save/load stuffs///////////////////////////////////
    let saveLoadDiv = document.createElement("div");
    saveLoadDiv.id = "saveLoadDiv";
    uiDiv.appendChild(saveLoadDiv);
        let saveLoad = document.createElement("div");
        saveLoad.id = "saveLoad";
        saveLoadDiv.appendChild(saveLoad);
            let loadIconBox = document.createElement("div");
            loadIconBox.id = "loadIconBox";
            saveLoad.appendChild(loadIconBox);
                let loadIcon = document.createElement("img");
                loadIcon.id = "loadIcon";
                loadIcon.src = "images/farmPlots/loadIcon.png";
                loadIconBox.appendChild(loadIcon);

            let farmIconBox = document.createElement("div");
            farmIconBox.id = "farmIconBox";
            saveLoad.appendChild(farmIconBox);
                let farmIcon = document.createElement("img");
                farmIcon.id = "farmIcon";
                farmIcon.src = "images/farmPlots/farmIcon.png";
                farmIconBox.appendChild(farmIcon);

            let importBox = document.createElement("div");
            importBox.id = "importBox";
            importBox.contentEditable = true;
            importBox.spellcheck = false;
            saveLoad.appendChild(importBox);
            let currentBox = document.createElement("div");
            currentBox.id = "currentBox";
            saveLoad.appendChild(currentBox);
            currentBox.onclick = function(){
                navigator.clipboard.writeText(currentBox.textContent);
            }
            //currentBox.innerHTML = "";

            let importButtonBox = document.createElement("div");  readFarmstructure
            importButtonBox.id = "importButtonBox";
            saveLoad.appendChild(importButtonBox);
            importButtonBox.onclick = function(){
                undoRedoList[undoRedoPosition] = "";
                undoRedoList[undoRedoPosition] = printFarmstructure();
                canRedo = false;
                highestRedoPosition = undoRedoPosition;
                undoRedoPosition++
                readFarmstructure(document.getElementById("importBox").innerHTML);
                calculateBoard();
            }
                let importButton = document.createElement("img");
                importButton.id = "importButton";
                importButton.src = "images/farmPlots/import.png";
                importButtonBox.appendChild(importButton);

    ///////////////////////////hoe stufs///////////////////////////////////
    let hoeDisplayDiv = document.createElement("div");
    hoeDisplayDiv.id = "hoeDisplayDiv";
    uiDiv.appendChild(hoeDisplayDiv);
        let hoeDropDownDiv = document.createElement("div");
        hoeDisplayDiv.appendChild(hoeDropDownDiv);
        hoeDropDownDiv.id = "hoeDropDownDiv"; 
        hoeDropDownDiv.innerHTML = "<img id=\"hoedropDownImg\" src=\"images/farmPlots/dropDownArrow.png\">";
        hoeDropDownDiv.onclick = function(){
            hoeSelectorDiv.style.display = "";
            calculateBoard();
        } 
        let hoeTool = document.createElement("div");
        hoeTool.id = "hoeTool";
        hoeDisplayDiv.appendChild(hoeTool);
        hoeTool.innerHTML = "<img class=\"hoeToolImg\" src=\"images/farmPlots/Hoe0.png\">";
        hoeTool.onclick = function(){
            hoeSelectorDiv.style.display = "";
            calculateBoard();
        } 
        let hoeSelectorDiv = document.createElement("div");
        hoeDisplayDiv.appendChild(hoeSelectorDiv);
        hoeSelectorDiv.id = "hoeSelectorDiv";  
        hoeSelectorDiv.style.display = "none";
            for(let i=0; i<=6; i++){
                let c = document.createElement("img");
                c.className = "hoeSelectorImg";
                c.id = "hoeSelector" + i;
                c.src = "images/farmPlots/Hoe" + i + ".png";
                c.style.position = "relative";
                c.style.height = "5.3vw";
                c.style.left = ".5vw";
                c.onclick = function(){
                    chosenHoe = i;
                    hoeSelectorDiv.style.display = "none";
                    hoeTool.innerHTML = "<img class=\"hoeToolImg\" src=\"images/farmPlots/Hoe" + i + ".png\">";
                    calculateBoard();
                }
                hoeSelectorDiv.appendChild(c);
            }

    /////////////////////////////orb stuff////////////////////////////////////
    let orbDisplayDiv = document.createElement("div");
    uiDiv.appendChild(orbDisplayDiv);
    orbDisplayDiv.id = "orbDisplayDiv";   
        let orbPricingDiv = document.createElement("div");
        orbPricingDiv.id = "orbPricingDiv";
        orbDisplayDiv.appendChild(orbPricingDiv);
            let orbPricing = document.createElement("div");
            orbPricing.id = "orbPricing";
            orbPricingDiv.appendChild(orbPricing);
        let sickleOrbDiv = document.createElement("div");
        orbDisplayDiv.appendChild(sickleOrbDiv);
        sickleOrbDiv.id = "sickleOrbDiv";   
        let sickleOrbUpDiv = document.createElement("div");
        orbDisplayDiv.appendChild(sickleOrbUpDiv);
        sickleOrbUpDiv.id = "sickleOrbUpDiv";  
            let sickleOrbUp = document.createElement("div");
            sickleOrbUpDiv.appendChild(sickleOrbUp);
            sickleOrbUp.id = "sickleOrbUp";   
            sickleOrbUp.innerHTML = "+";
            sickleOrbUpDiv.onclick = function(){
                orbs++;
                calculateBoard();
            }
        let sickleOrbDownDiv = document.createElement("div");
        orbDisplayDiv.appendChild(sickleOrbDownDiv);
        sickleOrbDownDiv.id = "sickleOrbDownDiv";   
            let sickleOrbDown = document.createElement("div");
            sickleOrbDownDiv.appendChild(sickleOrbDown);
            sickleOrbDown.id = "sickleOrbDown";   
            sickleOrbDown.innerHTML = "-";
            sickleOrbDownDiv.onclick = function(){
                if(orbs > 0){
                    orbs--;
                }
                calculateBoard();
            }
            let sickleOrbCount = document.createElement("div");
            sickleOrbDiv.appendChild(sickleOrbCount);
            sickleOrbCount.id = "sickleOrbCount";

    /////////////////////////////sickle stuff////////////////////////////////////
    let sickleDisplayDiv = document.createElement("div");
    uiDiv.appendChild(sickleDisplayDiv);
    sickleDisplayDiv.id = "sickleDisplayDiv";
        let sickleDisplay = document.createElement("div");
        sickleDisplayDiv.appendChild(sickleDisplay);
        sickleDisplay.id = "sickleDisplay";
            let sickleDropDownDiv = document.createElement("div");
            sickleDisplay.appendChild(sickleDropDownDiv);
            sickleDropDownDiv.id = "sickleDropDownDiv"; 
            sickleDropDownDiv.innerHTML = "<img id=\"sickledropDownImg\" src=\"images/farmPlots/dropDownArrow.png\">";
            sickleDropDownDiv.onclick = function(){
                sickleSelectorDiv.style.display = "";
            } 
            let sickleImgDiv = document.createElement("div");
            sickleDisplay.appendChild(sickleImgDiv);
            sickleImgDiv.id = "sickleImgDiv";
            sickleImgDiv.onclick = function(){
                sickleSelectorDiv.style.display = "";
            }
            let sickleYieldDiv = document.createElement("div");
            sickleDisplay.appendChild(sickleYieldDiv);
            sickleYieldDiv.id = "sickleYieldDiv"; 
            sickleYieldDiv.innerHTML = "&nbsp+&nbsp" + sickleYield + "&nbsp" + "<img id=\"sickleYieldImg\" src=\"images/farmPlots/yield.png\">";
            
            let sickleSelectorDiv = document.createElement("div");
            sickleDisplay.appendChild(sickleSelectorDiv);
            sickleSelectorDiv.id = "sickleSelectorDiv";  
            sickleSelectorDiv.style.display = "none";
                for(let i=0; i<7; i++){
                    let c = document.createElement("img");
                    c.className = "sickleSelectorImg";
                    c.id = "sickleSelector" + i;
                    c.src = "images/farmPlots/Sickle" + i + ".png";
                    c.style.position = "relative";
                    c.style.width = "5.3vw";
                    c.style.left = ".5vw";
                    c.onclick = function(){
                        chosenSickle = i;
                        sickleSelectorDiv.style.display = "none";
                        sickleImgDiv.innerHTML = "<img id=\"sickleImg\" src=\"images/farmPlots/Sickle" + i + ".png\">";
                        calculateBoard();
                    }
                    sickleSelectorDiv.appendChild(c);
                }
    
    document.getElementById("sickleImgDiv").innerHTML = "<img id=\"sickleImg\" src=\"images/farmPlots/Sickle1.png\">";

    //////////////////////////////reveal stuffs///////////////////////////////////
    let revealDisplayDiv = document.createElement("div");
    revealDisplayDiv.id = "revealDisplayDiv";
    uiDiv.appendChild(revealDisplayDiv);
        let revealDisplay = document.createElement("div");
        revealDisplayDiv.appendChild(revealDisplay);
        revealDisplay.id = "revealDisplay";
            let revealWatered = document.createElement("img");
            revealWatered.id = "revealWatered";
            revealWatered.className = "revealImg";
            revealDisplay.appendChild(revealWatered);
            revealWatered.src = "images/farmPlots/watered.png";
            revealWatered.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
            revealWatered.onclick = function(){
                if(revealWateredSelected == true){
                    revealWateredSelected = false;
                    revealWatered.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                }else{
                    revealWateredSelected = true;
                    revealWatered.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(200%) contrast(100%)";
                }
                calculateBoard();
            }

            let revealFert = document.createElement("img");
            revealFert.id = "revealFert";
            revealFert.className = "revealImg";
            revealDisplay.appendChild(revealFert);
            revealFert.src = "images/farmPlots/fert.png";
            revealFert.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
            revealFert.onclick = function(){
                if(revealFertSelected == true){
                    revealFertSelected = false;
                    revealFert.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                }else{
                    revealFertSelected = true;
                    revealFert.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(200%) contrast(100%)";
                }
                calculateBoard();
            }

            let revealUV = document.createElement("img");
            revealUV.id = "revealUV";
            revealUV.className = "revealImg";
            revealDisplay.appendChild(revealUV);
            revealUV.src = "images/farmPlots/uv.png";
            revealUV.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
            revealUV.onclick = function(){
                if(revealUVSelected == true){
                    revealUVSelected = false;
                    revealUV.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                }else{
                    revealUVSelected = true;
                    revealUV.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(200%) contrast(100%)";
                }
                calculateBoard();
            }

    //////////////////////////////counter stuffs///////////////////////////////////
    let counterDisplayDiv = document.createElement("div");
    counterDisplayDiv.id = "counterDisplayDiv";
    uiDiv.appendChild(counterDisplayDiv);
        let rotationSelectorDiv = document.createElement("div");
        rotationSelectorDiv.id = "rotationSelectorDiv";
        counterDisplayDiv.appendChild(rotationSelectorDiv);
            let rotationSelector = document.createElement("div");
            rotationSelector.id = "rotationSelector";
            rotationSelectorDiv.appendChild(rotationSelector);
                let rotationSelectorUp = document.createElement("img");
                rotationSelectorUp.id = "rotationSelectorUp";
                rotationSelectorUp.className = "rotationSelectorImg";
                rotationSelectorUp.src = "images/farmPlots/Rotate.png";
                rotationSelector.appendChild(rotationSelectorUp);
                let rotationSelectorOverlay = document.createElement("img");
                rotationSelectorOverlay.id = "rotationSelectorOverlay";
                rotationSelectorOverlay.src = "images/farmPlots/Arrow.png";
                rotationSelectorOverlay.style.rotate = "0deg"
                rotationSelector.appendChild(rotationSelectorOverlay);
                rotationSelector.onclick = function(){//GOTTA REWRITE THIS
                    if(chosenFarmSpotDirection == 3){
                        chosenFarmSpotDirection = 0;
                    }else{
                        chosenFarmSpotDirection++;
                    }
                    
                    document.getElementById("rotationSelectorOverlay").style.rotate = (chosenFarmSpotDirection * 90) + "deg";
                }

        let erasePlotDiv = document.createElement("div");
        erasePlotDiv.id = "erasePlotDiv";
        counterDisplayDiv.appendChild(erasePlotDiv);
            let erasePlot = document.createElement("div");
            erasePlot.id = "erasePlot";
            erasePlotDiv.appendChild(erasePlot);
                let erasePlotImg = document.createElement("img");
                erasePlotImg.id = "erasePlotImg";
                erasePlotImg.src = "images/farmPlots/circleX.png";
                erasePlot.appendChild(erasePlotImg);
            erasePlot.onclick = function(){
                chosenFarmSpot = 0;
                if(chosenFarmSpot != previousPlot){
                    erasePlot.style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(150%) contrast(100%)";
                    document.getElementById("cdid" + previousPlot).style.filter = "";
                }
                previousPlot = chosenFarmSpot;
            }


        let counterDisplay = document.createElement("div");
        counterDisplay.id = "counterDisplay";
        counterDisplayDiv.appendChild(counterDisplay);
        
        for(let i = 0; i < plotList.length; i++){
            let c = document.createElement("div");
            c.className = "counterDisplayImgDiv";
            c.id = "cdid" + i;      //counter display img div
            if(i==0){
                c.innerHTML = "<img class=\"cdImg\" src=\"images/farmPlots/Crops.png\">";
            }else{
                c.innerHTML = "<img class=\"cdImg\" src=\"images/farmPlots/" + plotList[i].namae + ".png\">";
                c.onclick = function(){
                    chosenFarmSpot = i;
                    if(chosenFarmSpot != previousPlot){
                        document.getElementById("cdid" + i).style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(150%) contrast(100%)";
                        erasePlot.style.filter = "";
                        document.getElementById("cdid" + previousPlot).style.filter = "";
                    }
                    previousPlot = chosenFarmSpot;
                }
            }
            if(i>=12){
                c.style.top  = (7.2 + i * -4) + "vw";
                c.style.left = (.5 + (i-11) * 4.1) + "vw";
            }else if(i==0){
                c.style.top  = (7.2 + i * -4) + "vw";
                c.style.left = (.5 + 0 * 4.1) + "vw";
            }else{
                c.style.top  = (.4 + i * -4) + "vw";
                c.style.left = (-3.6 + i * 4.1) + "vw";
            }
            counterDisplay.appendChild(c);
        }
        for(let i = 0; i < plotList.length; i++){
            let c = document.createElement("div");
            c.className = "counterDisplayNumDiv";
            c.id = "cdnd" + i;      //counter display number div
            c.innerHTML = "0";
            if(i>=12){
                c.style.top  = (-76.6 + i * -2) + "vw";
                c.style.left = (.5 + (i-11) * 4.1) + "vw";
            }else if(i==0){
                c.style.top  = (-76.6 + i * -2) + "vw";
                c.style.left = (.5 + 0 * 4.1) + "vw";
            }else{
                c.style.top  = (-83.3 + i * -2) + "vw";
                c.style.left = (-3.6 + i * 4.1) + "vw";
            }
            counterDisplay.appendChild(c);
        }
        for(let i = 0; i < plotList.length; i++){
            let c = document.createElement("div");
            c.className = "counterDisplayOrbDiv";
            c.id = "cdod" + i;      //counter display orb div
            c.style.color = "lime";
            if(plotList[i].isSeedCapped){
                c.innerHTML = "/5";
            }else{
                c.innerHTML = "/30";
            }

            if(i==0){
                c.style.top  = (-118.2 + i * -1.8) + "vw";
                c.style.left = (.5 + 0 * 4.1) + "vw";
                counterDisplay.appendChild(c);
            }else if(plotList[i].isCrop){
                c.style.top  = (-98.4 + i * -1.8) + "vw";
                c.style.left = (.5 + (i-11) * 4.1) + "vw";
                counterDisplay.appendChild(c);
            }
        }
        document.getElementById("cdid" + chosenFarmSpot).style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(150%) contrast(100%)";

    //////////////////////////profit display stuffs///////////////////////////////////////
    let profitDisplayDiv = document.createElement("div");
    profitDisplayDiv.id = "profitDisplayDiv";
    uiDiv.appendChild(profitDisplayDiv);
        let titleDisplay = document.createElement("div");
        titleDisplay.id = "titleDisplay";
        profitDisplayDiv.appendChild(titleDisplay);
            let profitTitle = document.createElement("div");
            profitTitle.id = "profitTitle";
            titleDisplay.appendChild(profitTitle);
            profitTitle.innerHTML = "Hourly Profit"

        let profitDisplay = document.createElement("div");
        profitDisplay.id = "profitDisplay";
        profitDisplayDiv.appendChild(profitDisplay);
            let baseProfit = document.createElement("div");
            baseProfit.id = "baseProfit";
            baseProfit.className = "profitText"
            profitDisplay.appendChild(baseProfit);
            baseProfit.innerHTML = "0"
            let consumableProfit = document.createElement("div");
            consumableProfit.id = "consumableProfit";
            consumableProfit.className = "profitText"
            profitDisplay.appendChild(consumableProfit);
            consumableProfit.innerHTML = "0"
            let fertCost = document.createElement("div");
            fertCost.id = "fertCost";
            fertCost.className = "profitText"
            profitDisplay.appendChild(fertCost);
            fertCost.innerHTML = "0"
            let strangeProfit = document.createElement("div");
            strangeProfit.id = "strangeProfit";
            strangeProfit.className = "profitText"
            profitDisplay.appendChild(strangeProfit);
            strangeProfit.innerHTML = "0"
            let sickleProfit = document.createElement("div");
            sickleProfit.id = "sickleProfit";
            sickleProfit.className = "profitText"
            profitDisplay.appendChild(sickleProfit);
            sickleProfit.innerHTML = "0"

        let profitToggleDiv = document.createElement("div");
        profitToggleDiv.id = "profitToggleDiv";
        profitDisplayDiv.appendChild(profitToggleDiv);
            for(let i=0; i<toggleCount; i++){
                let c = document.createElement("div");
                c.className = "profitToggle";
                c.style.backgroundColor = "rgba(30, 30, 30, 0.764)";
                c.id = "profitToggle" + i;
                c.style.width = "8vw";
                c.style.top  = (-21.25+ i*.5) + "vw";
                c.style.left = (0) + "vw";
                profitToggleDiv.appendChild(c);

                    let g = document.createElement("img");
                    g.className = "profitToggleImg";
                    g.id = "profitToggleImg" + i;
                    g.src = "images/farmPlots/on.png";
                    g.style.position = "relative";

                c.onclick = function(){
                    checkToggleList();
                    if(toggleList[i]){
                        c.style.width = "19.2vw";
                        g.src = "images/farmPlots/off.png";
                        toggleList[i] = false;
                    }else{
                        c.style.width = "8vw";
                        g.src = "images/farmPlots/on.png";
                        toggleList[i] = true;
                    }
                    setToggleList();
                    calculateBoard();
                }
                c.appendChild(g);
            }
            let plusMinus = document.createElement("div");
            plusMinus.id = "plusMinus";
            profitDisplayDiv.appendChild(plusMinus);
                for(let i=0; i<toggleCount; i++){
                    let c = document.createElement("div");
                    c.className = "plusMinusText";
                    c.id = "plusMinus" + i;
                    c.innerHTML = "+";
                    c.style.top  = (-21.5 + i*3.4) + "vw";
                    c.style.left = (-10.8) + "vw";
                    if(i==1){
                        c.innerHTML = "-";
                        c.style.left = (-10.95) + "vw";
                    }
                    plusMinus.appendChild(c);
                }

        let profitIconDiv = document.createElement("div");
        profitIconDiv.id = "profitIconDiv";
        profitDisplayDiv.appendChild(profitIconDiv);
        profitIconDiv.style.display = "none"
            for(let i=1; i<toggleCount+1; i++){
                let c = document.createElement("div");
                c.className = "profitIcon";
                c.id = "profitIcon" + i;
                profitIconDiv.appendChild(c);

                    let g = document.createElement("img");
                    g.className = "profitIconImg";
                    g.id = "profitIconImg" + i;
                    //g.src = "images/farmPlots/profit" + i + ".png";
                    g.style.position = "relative";
                    c.append(g)
            }


        let totalDisplayDiv = document.createElement("div");
        totalDisplayDiv.id = "totalDisplayDiv";
        profitDisplayDiv.appendChild(totalDisplayDiv);
            let totalDisplay = document.createElement("div");
            totalDisplay.id = "totalDisplay";
            totalDisplayDiv.appendChild(totalDisplay);
                let totalProfit = document.createElement("div");
                totalProfit.id = "totalProfit";
                totalProfit.className = "profitText"
                totalDisplay.appendChild(totalProfit);
                totalProfit.innerHTML = "0"
                let totalEqual = document.createElement("div");
                totalEqual.id = "totalEqual";
                totalEqual.className = "profitText"
                totalDisplay.appendChild(totalEqual);
                totalEqual.innerHTML = "="
            let fullHarvestTitleDisplay = document.createElement("div");
            fullHarvestTitleDisplay.id = "fullHarvestTitleDisplay";
            totalDisplayDiv.appendChild(fullHarvestTitleDisplay);
                let fullHarvestTitle = document.createElement("div");
                fullHarvestTitle.id = "fullHarvestTitle";
                fullHarvestTitleDisplay.appendChild(fullHarvestTitle);
                fullHarvestTitle.innerHTML = "Full Harvest"
            let fullHarvestDisplay = document.createElement("div");
            fullHarvestDisplay.id = "fullHarvestDisplay";
            totalDisplayDiv.appendChild(fullHarvestDisplay);
                let fullHarvestProfit = document.createElement("div");
                fullHarvestProfit.id = "fullHarvestProfit";
                fullHarvestProfit.className = "profitText"
                fullHarvestDisplay.appendChild(fullHarvestProfit);
                fullHarvestProfit.innerHTML = "0"
                let fullHarvestEqual = document.createElement("div");
                fullHarvestEqual.id = "fullHarvestEqual";
                fullHarvestEqual.className = "profitText"
                fullHarvestDisplay.appendChild(fullHarvestEqual);
                fullHarvestEqual.innerHTML = "="

    //////////////////////////////moon stuffs///////////////////////////////////
    let moonDiv = document.createElement("div");
    moonDiv.id = "moonDiv";
    uiDiv.appendChild(moonDiv);
        let moonBox = document.createElement("div");
        moonBox.id = "moonBox";
        moonDiv.appendChild(moonBox);
        moonBox.innerHTML = "<img class=\"moonSelectorImg\" src=\"images/farmPlots/moon0.png\">";
        moonBox.onclick = function(){
            moonSelectorDiv.style.display = "";
            calculateBoard();
        } 
        let moonSelectorDiv = document.createElement("div");
        moonDiv.appendChild(moonSelectorDiv);
        moonSelectorDiv.id = "moonSelectorDiv";  
        moonSelectorDiv.style.display = "none";
            for(let i=0; i<=8; i++){
                let c = document.createElement("img");
                c.className = "moonSelectorImg";
                c.id = "moonSelector" + i;
                c.src = "images/farmPlots/moon" + i + ".png";
                c.onclick = function(){
                    chosenMoon = i;
                    if(i <= 3){
                        chosenMoonYield = i;
                    }else if(i == 4){
                        chosenMoonYield = 5;
                    }else{
                        chosenMoonYield = 8 - i;
                    }
                    moonSelectorDiv.style.display = "none";
                    moonBox.innerHTML = "<img class=\"moonSelectorImg\" src=\"images/farmPlots/moon" + i + ".png\">";
                    calculateBoard();
                }
                moonSelectorDiv.appendChild(c);
            }

    //////////////////////////////help stuffs///////////////////////////////////
    let helpDiv = document.createElement("div");
    helpDiv.id = "helpDiv";
    uiDiv.appendChild(helpDiv);
        let help = document.createElement("div");
        help.id = "help";
        helpDiv.appendChild(help);
            let helpImg = document.createElement("img");
            helpImg.id = "helpImg";
            help.appendChild(helpImg);
            helpImg.src = "images/farmPlots/helpIcon.png";
            
            let helpOverlayDiv = document.createElement("div");
            helpOverlayDiv.id = "helpOverlayDiv";
            helpDiv.appendChild(helpOverlayDiv);
            helpOverlayDiv.style.display = "none"
                let helpBlurDiv = document.createElement("div");
                helpBlurDiv.id = "helpBlurDiv";
                helpOverlayDiv.appendChild(helpBlurDiv);
                    let helpBlur = document.createElement("div");
                    helpBlur.id = "helpBlur";
                    helpBlurDiv.appendChild(helpBlur);

                let helpCanvasDiv = document.createElement("div");
                helpCanvasDiv.id = "helpCanvasDiv";
                helpOverlayDiv.appendChild(helpCanvasDiv);
                    let helpCanvas = document.createElement("canvas");
                    helpCanvas.id = "helpCanvas";
                    helpCanvas.width = 1000
                    helpCanvas.height = 1000
                    helpCanvasDiv.appendChild(helpCanvas);
                        const cropLine1 = helpCanvas.getContext("2d");
                        cropLine1.className = "helpLine"
                        cropLine1.beginPath();
                        cropLine1.moveTo(490, 60);
                        cropLine1.lineTo(490, 215);
                        cropLine1.strokeStyle = '#ffcccc'
                        cropLine1.lineWidth = 5
                        cropLine1.stroke();
                        const cropLine2 = helpCanvas.getContext("2d");
                        cropLine2.className = "helpLine"
                        cropLine2.beginPath();
                        cropLine2.moveTo(490, 60);
                        cropLine2.lineTo(350, 60);
                        cropLine2.strokeStyle = '#ffcccc'
                        cropLine2.lineWidth = 5
                        cropLine2.stroke();
                            let cropHelp1 = document.createElement("div");
                            cropHelp1.className = "helpTextRight";
                            cropHelp1.id = "breedCountHelp";
                            cropHelp1.innerHTML = "Plot Effects"
                            cropHelp1.style.left = "-49vw"
                            cropHelp1.style.top = "-7.5vw"
                            cropHelp1.style.width = "22vw"
                            helpOverlayDiv.appendChild(cropHelp1);
                            let cropHelp2 = document.createElement("div");
                            cropHelp2.className = "helpSubTextRight";
                            cropHelp2.id = "breedCountHelp";
                            cropHelp2.innerHTML = "Effects will show up on a plot depending on their surroundings"
                            cropHelp2.style.left = "-49vw"
                            cropHelp2.style.top = "-4vw"
                            cropHelp2.style.width = "22vw"
                            helpOverlayDiv.appendChild(cropHelp2);

                        const breedSpotLine1 = helpCanvas.getContext("2d");
                        breedSpotLine1.className = "helpLine"
                        breedSpotLine1.beginPath();
                        breedSpotLine1.moveTo(100, 170);
                        breedSpotLine1.lineTo(100, 240);
                        breedSpotLine1.strokeStyle = '#ffcccc'
                        breedSpotLine1.lineWidth = 5
                        breedSpotLine1.stroke();
                        const breedSpotLine2 = helpCanvas.getContext("2d");
                        breedSpotLine2.className = "helpLine"
                        breedSpotLine2.beginPath();
                        breedSpotLine2.moveTo(100, 240);
                        breedSpotLine2.lineTo(290, 240);
                        breedSpotLine2.strokeStyle = '#ffcccc'
                        breedSpotLine2.lineWidth = 5
                        breedSpotLine2.stroke();
                            let breedHelp1 = document.createElement("div");
                            breedHelp1.className = "helpText";
                            breedHelp1.id = "breedCountHelp";
                            breedHelp1.innerHTML = "Breeding Display"
                            breedHelp1.style.left = "-62vw"
                            breedHelp1.style.top = "10vw"
                            breedHelp1.style.width = "1000vw"
                            helpOverlayDiv.appendChild(breedHelp1);
                            let breedHelp2 = document.createElement("div");
                            breedHelp2.className = "helpSubText";
                            breedHelp2.id = "breedCountHelp";
                            breedHelp2.innerHTML = "This tallies how many [breedable items] you have, their total [breeding spots] and [breeding chances]"
                            breedHelp2.style.left = "-62vw"
                            breedHelp2.style.top = "13.3vw"
                            breedHelp2.style.width = "28vw"
                            helpOverlayDiv.appendChild(breedHelp2);
                        const breedSpotLine3 = helpCanvas.getContext("2d");
                        breedSpotLine3.className = "helpLine"
                        breedSpotLine3.beginPath();
                        breedSpotLine3.moveTo(395, 310);
                        breedSpotLine3.lineTo(405, 350);
                        breedSpotLine3.strokeStyle = '#ffffff'
                        breedSpotLine3.lineWidth = 5
                        breedSpotLine3.stroke();
                        const breedSpotLine4 = helpCanvas.getContext("2d");
                        breedSpotLine4.className = "helpLine"
                        breedSpotLine4.beginPath();
                        breedSpotLine4.moveTo(355, 335);
                        breedSpotLine4.lineTo(418, 380);
                        breedSpotLine4.strokeStyle = '#ffffff'
                        breedSpotLine4.lineWidth = 5
                        breedSpotLine4.stroke();

                        const orbLine = helpCanvas.getContext("2d");
                        orbLine.className = "helpLine"
                        orbLine.beginPath();
                        orbLine.moveTo(50, 390);
                        orbLine.lineTo(245, 390);
                        orbLine.strokeStyle = '#ffcccc'
                        orbLine.lineWidth = 5
                        orbLine.stroke();
                            let orbHelp1 = document.createElement("div");
                            orbHelp1.className = "helpText";
                            orbHelp1.id = "breedCountHelp";
                            orbHelp1.innerHTML = "Orb Display"
                            orbHelp1.style.left = "-62vw"
                            orbHelp1.style.top = "24.4vw"
                            orbHelp1.style.width = "1000vw"
                            helpOverlayDiv.appendChild(orbHelp1);
                            let orbHelp2 = document.createElement("div");
                            orbHelp2.className = "helpSubText";
                            orbHelp2.id = "breedCountHelp";
                            orbHelp2.innerHTML = "Updating this helps show accurate plot limits and tallies orb costs"
                            orbHelp2.style.left = "-62vw"
                            orbHelp2.style.top = "27.8vw"
                            orbHelp2.style.width = "24.5vw"
                            helpOverlayDiv.appendChild(orbHelp2);
                            let orbHelp3 = document.createElement("div");
                            orbHelp3.className = "helpSubText";
                            orbHelp3.id = "breedCountHelp";
                            orbHelp3.innerHTML = "Tap the [-] and [+] buttons!"
                            orbHelp3.style.left = "-62vw"
                            orbHelp3.style.top = "35vw"
                            orbHelp3.style.width = "2400.5vw"
                            helpOverlayDiv.appendChild(orbHelp3);

                        const revealBarLine1 = helpCanvas.getContext("2d");
                        revealBarLine1.className = "helpLine"
                        revealBarLine1.beginPath();
                        revealBarLine1.moveTo(50, 754);
                        revealBarLine1.lineTo(50, 540);
                        revealBarLine1.strokeStyle = '#ffcccc'
                        revealBarLine1.lineWidth = 5
                        revealBarLine1.stroke();
                        const revealBarLine2 = helpCanvas.getContext("2d");
                        revealBarLine2.className = "helpLine"
                        revealBarLine2.beginPath();
                        revealBarLine2.moveTo(50, 540);
                        revealBarLine2.lineTo(235, 540);
                        revealBarLine2.strokeStyle = '#ffcccc'
                        revealBarLine2.lineWidth = 5
                        revealBarLine2.stroke();
                            let revealBarHelp1 = document.createElement("div");
                            revealBarHelp1.className = "helpText";
                            revealBarHelp1.id = "breedCountHelp";
                            revealBarHelp1.innerHTML = "Reveal Bar"
                            revealBarHelp1.style.left = "-62vw"
                            revealBarHelp1.style.top = "39.0vw"
                            revealBarHelp1.style.width = "24.5vw"
                            helpOverlayDiv.appendChild(revealBarHelp1);
                            let revealBarHelp2 = document.createElement("div");
                            revealBarHelp2.className = "helpSubText";
                            revealBarHelp2.id = "breedCountHelp";
                            revealBarHelp2.innerHTML = "Tap an effect to show plots that are missing said effect"
                            revealBarHelp2.style.left = "-62vw"
                            revealBarHelp2.style.top = "42.2vw"
                            revealBarHelp2.style.width = "29.5vw"
                            helpOverlayDiv.appendChild(revealBarHelp2);

                        const saveLoadLine1 = helpCanvas.getContext("2d");
                        saveLoadLine1.className = "helpLine"
                        saveLoadLine1.beginPath();
                        saveLoadLine1.moveTo(70, 830);
                        saveLoadLine1.lineTo(70, 643);
                        saveLoadLine1.strokeStyle = '#ffcccc'
                        saveLoadLine1.lineWidth = 5
                        saveLoadLine1.stroke();
                        const saveLoadLine2 = helpCanvas.getContext("2d");
                        saveLoadLine2.className = "helpLine"
                        saveLoadLine2.beginPath();
                        saveLoadLine2.moveTo(70, 643);
                        saveLoadLine2.lineTo(280, 643);
                        saveLoadLine2.strokeStyle = '#ffcccc'
                        saveLoadLine2.lineWidth = 5
                        saveLoadLine2.stroke();
                            let saveLoadHelp1 = document.createElement("div");
                            saveLoadHelp1.className = "helpText";
                            saveLoadHelp1.id = "breedCountHelp";
                            saveLoadHelp1.innerHTML = "Save/Load Box"
                            saveLoadHelp1.style.left = "-62vw"
                            saveLoadHelp1.style.top = "48.9vw"
                            saveLoadHelp1.style.width = "24.5vw"
                            helpOverlayDiv.appendChild(saveLoadHelp1);
                            let saveLoadHelp2 = document.createElement("div");
                            saveLoadHelp2.className = "helpSubText";
                            saveLoadHelp2.id = "breedCountHelp";
                            saveLoadHelp2.innerHTML = "Paste codes into the [white box] and load them with the [arrow]"
                            saveLoadHelp2.style.left = "-62vw"
                            saveLoadHelp2.style.top = "52vw"
                            saveLoadHelp2.style.width = "31.5vw"
                            helpOverlayDiv.appendChild(saveLoadHelp2);
                            let saveLoadHelp3 = document.createElement("div");
                            saveLoadHelp3.className = "helpSubText";
                            saveLoadHelp3.id = "breedCountHelp";
                            saveLoadHelp3.innerHTML = "Tap the [dark blue box] to save a code to your clipboard"
                            saveLoadHelp3.style.left = "-62vw"
                            saveLoadHelp3.style.top = "56.8vw"
                            saveLoadHelp3.style.width = "31.5vw"
                            helpOverlayDiv.appendChild(saveLoadHelp3);
                        
                        const counterBoxLine1 = helpCanvas.getContext("2d");
                        counterBoxLine1.className = "helpLine"
                        counterBoxLine1.beginPath();
                        counterBoxLine1.moveTo(472, 878);
                        counterBoxLine1.lineTo(400, 878);
                        counterBoxLine1.strokeStyle = '#ffcccc'
                        counterBoxLine1.lineWidth = 5
                        counterBoxLine1.stroke();
                        const counterBoxLine2 = helpCanvas.getContext("2d");
                        counterBoxLine2.className = "helpLine"
                        counterBoxLine2.beginPath();
                        counterBoxLine2.moveTo(400, 878);
                        counterBoxLine2.lineTo(400, 790);
                        counterBoxLine2.strokeStyle = '#ffcccc'
                        counterBoxLine2.lineWidth = 5
                        counterBoxLine2.stroke();
                        const counterBoxLine3 = helpCanvas.getContext("2d");
                        counterBoxLine3.className = "helpLine"
                        counterBoxLine3.beginPath();
                        counterBoxLine3.moveTo(400, 790);
                        counterBoxLine3.lineTo(110, 790);
                        counterBoxLine3.strokeStyle = '#ffcccc'
                        counterBoxLine3.lineWidth = 5
                        counterBoxLine3.stroke();
                            let counterBoxHelp1 = document.createElement("div");
                            counterBoxHelp1.className = "helpText";
                            counterBoxHelp1.id = "breedCountHelp";
                            counterBoxHelp1.innerHTML = "Counter Display/Plot Selector"
                            counterBoxHelp1.style.left = "-62vw"
                            counterBoxHelp1.style.top = "62.8vw"
                            counterBoxHelp1.style.width = "30.5vw"
                            helpOverlayDiv.appendChild(counterBoxHelp1);
                            let counterBoxHelp2 = document.createElement("div");
                            counterBoxHelp2.className = "helpSubText";
                            counterBoxHelp2.id = "breedCountHelp";
                            counterBoxHelp2.innerHTML = "Tap an item in the display to select it, then tap in the grid to place it."
                            counterBoxHelp2.style.left = "-62vw"
                            counterBoxHelp2.style.top = "66vw"
                            counterBoxHelp2.style.width = "27vw"
                            helpOverlayDiv.appendChild(counterBoxHelp2);
                            let counterBoxHelp3 = document.createElement("div");
                            counterBoxHelp3.className = "helpSubText";
                            counterBoxHelp3.id = "breedCountHelp";
                            counterBoxHelp3.innerHTML = "The first tab allows you to rotate an item before placing, and selecting the second tab allows you to erase plots"
                            counterBoxHelp3.style.left = "-62vw"
                            counterBoxHelp3.style.top = "73.5vw"
                            counterBoxHelp3.style.width = "32vw"
                            helpOverlayDiv.appendChild(counterBoxHelp3);
                            let counterBoxHelp4 = document.createElement("div");
                            counterBoxHelp4.className = "helpSubText";
                            counterBoxHelp4.id = "breedCountHelp";
                            counterBoxHelp4.innerHTML = "The white numbers are total plots, and the green/yellow/red ones show what your limits are"
                            counterBoxHelp4.style.left = "-31vw"
                            counterBoxHelp4.style.top = "75vw"
                            counterBoxHelp4.style.width = "26vw"
                            helpOverlayDiv.appendChild(counterBoxHelp4);

                        const cloverEffectsLine1 = helpCanvas.getContext("2d");
                        cloverEffectsLine1.className = "helpLine"
                        cloverEffectsLine1.beginPath();
                        cloverEffectsLine1.moveTo(535, 122);
                        cloverEffectsLine1.lineTo(535, 60);
                        cloverEffectsLine1.strokeStyle = '#ffcccc'
                        cloverEffectsLine1.lineWidth = 5
                        cloverEffectsLine1.stroke();
                        const cloverEffectsLine2 = helpCanvas.getContext("2d");
                        cloverEffectsLine2.className = "helpLine"
                        cloverEffectsLine2.beginPath();
                        cloverEffectsLine2.moveTo(535, 60);
                        cloverEffectsLine2.lineTo(695, 60);
                        cloverEffectsLine2.strokeStyle = '#ffcccc'
                        cloverEffectsLine2.lineWidth = 5
                        cloverEffectsLine2.stroke();
                            let cloverEffectsHelp1 = document.createElement("div");
                            cloverEffectsHelp1.className = "helpText";
                            cloverEffectsHelp1.id = "breedCountHelp";
                            cloverEffectsHelp1.innerHTML = "Clover Effects"
                            cloverEffectsHelp1.style.left = "-20.5vw"
                            cloverEffectsHelp1.style.top = "-7.5vw"
                            cloverEffectsHelp1.style.width = "22.5vw"
                            helpOverlayDiv.appendChild(cloverEffectsHelp1);
                            let cloverEffectsHelp2 = document.createElement("div");
                            cloverEffectsHelp2.className = "helpSubText";
                            cloverEffectsHelp2.id = "breedCountHelp";
                            cloverEffectsHelp2.innerHTML = "Shows the global effects that clovers can change"
                            cloverEffectsHelp2.style.left = "-20.3vw"
                            cloverEffectsHelp2.style.top = "-4vw"
                            cloverEffectsHelp2.style.width = "29.5vw"
                            helpOverlayDiv.appendChild(cloverEffectsHelp2);

                        const helpButtonLine1 = helpCanvas.getContext("2d");
                        helpButtonLine1.className = "helpLine"
                        helpButtonLine1.beginPath();
                        helpButtonLine1.moveTo(800, 100);
                        helpButtonLine1.lineTo(800, 160);
                        helpButtonLine1.strokeStyle = '#ffcccc'
                        helpButtonLine1.lineWidth = 5
                        helpButtonLine1.stroke();
                        const helpButtonLine2 = helpCanvas.getContext("2d");
                        helpButtonLine2.className = "helpLine"
                        helpButtonLine2.beginPath();
                        helpButtonLine2.moveTo(800, 160);
                        helpButtonLine2.lineTo(650, 160);
                        helpButtonLine2.strokeStyle = '#ffcccc'
                        helpButtonLine2.lineWidth = 5
                        helpButtonLine2.stroke();
                            let helpButtonHelp1 = document.createElement("div");
                            helpButtonHelp1.className = "helpTextRight";
                            helpButtonHelp1.id = "breedCountHelp";
                            helpButtonHelp1.innerHTML = "Help! Button"
                            helpButtonHelp1.style.left = "-20vw"
                            helpButtonHelp1.style.top = "2.5vw"
                            helpButtonHelp1.style.width = "22.5vw"
                            helpOverlayDiv.appendChild(helpButtonHelp1);
                            let helpButtonHelp2 = document.createElement("div");
                            helpButtonHelp2.className = "helpSubTextRight";
                            helpButtonHelp2.id = "breedCountHelp";
                            helpButtonHelp2.innerHTML = "\"... ... ...\" "
                            helpButtonHelp2.style.left = "-20vw"
                            helpButtonHelp2.style.top = "5.5vw"
                            helpButtonHelp2.style.width = "22.5vw"
                            helpOverlayDiv.appendChild(helpButtonHelp2);

                        const eraseFarmLine1 = helpCanvas.getContext("2d");
                        eraseFarmLine1.className = "helpLine"
                        eraseFarmLine1.beginPath();
                        eraseFarmLine1.moveTo(902, 98);
                        eraseFarmLine1.lineTo(902, 230);
                        eraseFarmLine1.strokeStyle = '#ffcccc'
                        eraseFarmLine1.lineWidth = 5
                        eraseFarmLine1.stroke();
                        const eraseFarmLine2 = helpCanvas.getContext("2d");
                        eraseFarmLine2.className = "helpLine"
                        eraseFarmLine2.beginPath();
                        eraseFarmLine2.moveTo(902, 230);
                        eraseFarmLine2.lineTo(700, 230);
                        eraseFarmLine2.strokeStyle = '#ffcccc'
                        eraseFarmLine2.lineWidth = 5
                        eraseFarmLine2.stroke();
                            let eraseFarmHelp1 = document.createElement("div");
                            eraseFarmHelp1.className = "helpTextRight";
                            eraseFarmHelp1.id = "breedCountHelp";
                            eraseFarmHelp1.innerHTML = "Erase Farm Button"
                            eraseFarmHelp1.style.left = "-20vw"
                            eraseFarmHelp1.style.top = "9vw"
                            eraseFarmHelp1.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(eraseFarmHelp1);
                            let eraseFarmHelp2 = document.createElement("div");
                            eraseFarmHelp2.className = "helpSubTextRight";
                            eraseFarmHelp2.id = "breedCountHelp";
                            eraseFarmHelp2.innerHTML = "Tap this to clear the Farm"
                            eraseFarmHelp2.style.left = "-20vw"
                            eraseFarmHelp2.style.top = "12.5vw"
                            eraseFarmHelp2.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(eraseFarmHelp2);

                        const hourlyProfitLine1 = helpCanvas.getContext("2d");
                        hourlyProfitLine1.className = "helpLine"
                        hourlyProfitLine1.beginPath();
                        hourlyProfitLine1.moveTo(902, 445);
                        hourlyProfitLine1.lineTo(902, 320);
                        hourlyProfitLine1.strokeStyle = '#ffcccc'
                        hourlyProfitLine1.lineWidth = 5
                        hourlyProfitLine1.stroke();
                        const hourlyProfitLine2 = helpCanvas.getContext("2d");
                        hourlyProfitLine2.className = "helpLine"
                        hourlyProfitLine2.beginPath();
                        hourlyProfitLine2.moveTo(942, 320);
                        hourlyProfitLine2.lineTo(700, 320);
                        hourlyProfitLine2.strokeStyle = '#ffcccc'
                        hourlyProfitLine2.lineWidth = 5
                        hourlyProfitLine2.stroke();
                        const hourlyProfitLine3 = helpCanvas.getContext("2d");
                        hourlyProfitLine3.className = "helpLine"
                        hourlyProfitLine3.beginPath();
                        hourlyProfitLine3.moveTo(942, 770);
                        hourlyProfitLine3.lineTo(942, 320);
                        hourlyProfitLine3.strokeStyle = '#ffcccc'
                        hourlyProfitLine3.lineWidth = 5
                        hourlyProfitLine3.stroke();
                            let hourlyProfitHelp1 = document.createElement("div");
                            hourlyProfitHelp1.className = "helpTextRight";
                            hourlyProfitHelp1.id = "breedCountHelp";
                            hourlyProfitHelp1.innerHTML = "Profit Display"
                            hourlyProfitHelp1.style.left = "-20vw"
                            hourlyProfitHelp1.style.top = "17.8vw"
                            hourlyProfitHelp1.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(hourlyProfitHelp1);
                            let hourlyProfitHelp2 = document.createElement("div");
                            hourlyProfitHelp2.className = "helpSubTextRight";
                            hourlyProfitHelp2.id = "breedCountHelp";
                            hourlyProfitHelp2.innerHTML = "This calculates your profit on the farm"
                            hourlyProfitHelp2.style.left = "-25vw"
                            hourlyProfitHelp2.style.top = "21vw"
                            hourlyProfitHelp2.style.width = "37.5vw"
                            helpOverlayDiv.appendChild(hourlyProfitHelp2);
                            let hourlyProfitHelp3 = document.createElement("div");
                            hourlyProfitHelp3.className = "helpTextRight";
                            hourlyProfitHelp3.id = "breedCountHelp";
                            hourlyProfitHelp3.innerHTML = "[Orange] is for non consumables  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[Red] is for consumables &nbsp&nbsp&nbsp&nbsp&nbsp[Brown] subtracts the cost of fert &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[Purple] adds in strange crops &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[White] is hourly sickle bost"
                            hourlyProfitHelp3.style.left = "-25vw"
                            hourlyProfitHelp3.style.top = "23.7vw"
                            hourlyProfitHelp3.style.width = "37.5vw"
                            helpOverlayDiv.appendChild(hourlyProfitHelp3);
                            let hourlyProfitHelp4 = document.createElement("div");
                            hourlyProfitHelp4.className = "helpSubTextRight";
                            hourlyProfitHelp4.id = "breedCountHelp";
                            hourlyProfitHelp4.innerHTML = "Tap the checkboxes to remove/add a value to the calculation\nAlso! you can choose the moon phase"
                            hourlyProfitHelp4.style.left = "-25vw"
                            hourlyProfitHelp4.style.top = "35.2vw"
                            hourlyProfitHelp4.style.width = "37.5vw"
                            helpOverlayDiv.appendChild(hourlyProfitHelp4);
                            let hourlyProfitHelp5 = document.createElement("div");
                            hourlyProfitHelp5.className = "helpSubTextRight";
                            hourlyProfitHelp5.id = "breedCountHelp";
                            hourlyProfitHelp5.innerHTML = "The first Sum is for [HOURLY] and the second is for a [FULL HARVEST]"
                            hourlyProfitHelp5.style.left = "-25vw"
                            hourlyProfitHelp5.style.top = "42.1vw"
                            hourlyProfitHelp5.style.width = "37.5vw"
                            helpOverlayDiv.appendChild(hourlyProfitHelp5);

                        const hoeLine1 = helpCanvas.getContext("2d");
                        hoeLine1.className = "helpLine"
                        hoeLine1.beginPath();
                        hoeLine1.moveTo(620, 755);
                        hoeLine1.lineTo(620, 640);
                        hoeLine1.strokeStyle = '#ffcccc'
                        hoeLine1.lineWidth = 5
                        hoeLine1.stroke();
                        const hoeLine2 = helpCanvas.getContext("2d");
                        hoeLine2.className = "helpLine"
                        hoeLine2.beginPath();
                        hoeLine2.moveTo(620, 640);
                        hoeLine2.lineTo(894, 640);
                        hoeLine2.strokeStyle = '#ffcccc'
                        hoeLine2.lineWidth = 5
                        hoeLine2.stroke();
                            let hoeHelp1 = document.createElement("div");
                            hoeHelp1.className = "helpTextRight";
                            hoeHelp1.id = "breedCountHelp";
                            hoeHelp1.innerHTML = "Hoe Selector"
                            hoeHelp1.style.left = "-20vw"
                            hoeHelp1.style.top = "48.3vw"
                            hoeHelp1.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(hoeHelp1);
                            let hoeHelp2 = document.createElement("div");
                            hoeHelp2.className = "helpSubTextRight";
                            hoeHelp2.id = "breedCountHelp";
                            hoeHelp2.innerHTML = "Updating this helps show accurate plot limits"
                            hoeHelp2.style.left = "-12vw"
                            hoeHelp2.style.top = "52vw"
                            hoeHelp2.style.width = "24.5vw"
                            helpOverlayDiv.appendChild(hoeHelp2);

                        const sickleLine1 = helpCanvas.getContext("2d");
                        sickleLine1.className = "helpLine"
                        sickleLine1.beginPath();
                        sickleLine1.moveTo(715, 735);
                        sickleLine1.lineTo(894, 735);
                        sickleLine1.strokeStyle = '#ffcccc'
                        sickleLine1.lineWidth = 5
                        sickleLine1.stroke();
                            let sickleHelp1 = document.createElement("div");
                            sickleHelp1.className = "helpTextRight";
                            sickleHelp1.id = "breedCountHelp";
                            sickleHelp1.innerHTML = "Sickle Selector"
                            sickleHelp1.style.left = "-20vw"
                            sickleHelp1.style.top = "57.9vw"
                            sickleHelp1.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(sickleHelp1);
                            let sickleHelp2 = document.createElement("div");
                            sickleHelp2.className = "helpSubTextRight";
                            sickleHelp2.id = "breedCountHelp";
                            sickleHelp2.innerHTML = "Updating this helps show accurate sickle profits"
                            sickleHelp2.style.left = "-12vw"
                            sickleHelp2.style.top = "61vw"
                            sickleHelp2.style.width = "24.5vw"
                            helpOverlayDiv.appendChild(sickleHelp2);

                        const undoRedoLine1 = helpCanvas.getContext("2d");
                        undoRedoLine1.className = "helpLine"
                        undoRedoLine1.beginPath();
                        undoRedoLine1.moveTo(492, 799);
                        undoRedoLine1.lineTo(492, 831);
                        undoRedoLine1.strokeStyle = '#ffcccc'
                        undoRedoLine1.lineWidth = 5
                        undoRedoLine1.stroke();
                        const undoRedoLine2 = helpCanvas.getContext("2d");
                        undoRedoLine2.className = "helpLine"
                        undoRedoLine2.beginPath();
                        undoRedoLine2.moveTo(492, 831);
                        undoRedoLine2.lineTo(894, 831);
                        undoRedoLine2.strokeStyle = '#ffcccc'
                        undoRedoLine2.lineWidth = 5
                        undoRedoLine2.stroke();
                            let undoRedoHelp1 = document.createElement("div");
                            undoRedoHelp1.className = "helpTextRight";
                            undoRedoHelp1.id = "breedCountHelp";
                            undoRedoHelp1.innerHTML = "Undo/Redo Buttons"
                            undoRedoHelp1.style.left = "-20vw"
                            undoRedoHelp1.style.top = "67vw"
                            undoRedoHelp1.style.width = "32.5vw"
                            helpOverlayDiv.appendChild(undoRedoHelp1);
                            let undoRedoHelp2 = document.createElement("div");
                            undoRedoHelp2.className = "helpSubTextRight";
                            undoRedoHelp2.id = "breedCountHelp";
                            undoRedoHelp2.innerHTML = "Made a mistake? Tap these to undo or redo a change"
                            undoRedoHelp2.style.left = "-7vw"
                            undoRedoHelp2.style.top = "70vw"
                            undoRedoHelp2.style.width = "19.5vw"
                            helpOverlayDiv.appendChild(undoRedoHelp2);


        helpDiv.onclick = function(){
            if(helpShown){
                document.getElementById("IMADETHIS").innerHTML = "MADE BY SYLVIE <br>@syiv on Discord"
                readFarmstructure(pausedFarm);
                helpOverlayDiv.style.display = "none"
                helpShown = false;
                calculateBoard();
            }else{
                document.getElementById("IMADETHIS").innerHTML = "MADE BY SYLVIE - Creator<br>How to find me! - @syiv on Discord"
                pausedFarm = printFarmstructure()
                readFarmstructure(tutorialFarm);
                helpOverlayDiv.style.display = ""
                helpShown = true;
                calculateBoard();
            }
        }

    /////////////////////////////////////////////////////////////////
    
    readFarmstructure(startingFarm);
    calculateBoard();
}

/////////////////////////////////////////////////////////
function setLuck(){
    luck = 70 + (Math.round(2 * (Math.random() * 40)) / 2);
}
/////////////////////////////////////////////////////////
function setToggleList(){
        consumableSelected = toggleList[0];
        fertCostSelected = toggleList[1];
        strangeSelected = toggleList[2];
        sickleSelected = toggleList[3];
}
/////////////////////////////////////////////////////////
function checkToggleList(){
    toggleList = [
        consumableSelected,
        fertCostSelected,
        strangeSelected,
        sickleSelected
    ]
}


/////////////////////////////////////////////////////////
function luckClamp(n){
    n = Math.min(n, 250);
    n = Math.max(0, n);
    return n;
}

/////////////////////////////////////////////////////////
function possibleBreedSpots(l, k, i, j){//groups, plot id, row, col
    var spots = [];
    let x = 0;
    let y = 0;
    
    if(groups[l].canPlace(k, 0, i-2, j)){//up
        if(groups[l].breedSpotList[i-2][j][k] > 0 && !groups[l].isOccupied(i-2, j)){
            spots[x] = y
            x++
        }
    }
    y++

    if(groups[l].canPlace(k, 0, i, j+2)){//right
        if(groups[l].breedSpotList[i][j+2][k] > 0 && !groups[l].isOccupied(i, j+2)){
            spots[x] = y
            x++
        }
    }
    y++

    if(groups[l].canPlace(k, 0, i+2, j)){//down
        if(groups[l].breedSpotList[i+2][j][k] > 0 && !groups[l].isOccupied(i+2, j)){
            spots[x] = y
            x++
        }
    }
    y++

    if(groups[l].canPlace(k, 0, i, j-2)){//left
        if(groups[l].breedSpotList[i][j-2][k] > 0 && !groups[l].isOccupied(i, j-2)){
            spots[x] = y
            x++
        }
    }
    y++

    if(x==0){//something about this feels illegal lmao
        return false;
    }else{
        return spots;
    }
}

/////////////////////////////////////////////////////////
function findParents(l, k, i, j){//groups, plot id, row, col
    var parents = [];
    let y = 0;
    
    
    parents[y] = 0
    if(groups[l].canPlace(k, 0, i-2, j-2)){//up-left
        if(groups[l].plots[i-2][j-2] == k){
            parents[y] = 1
        }
    }
    y++

    parents[y] = 0
    if(groups[l].canPlace(k, 0, i-2, j+2)){//up-right
        if(groups[l].plots[i-2][j+2] == k){
            parents[y] = 1
        }
    }
    y++

    parents[y] = 0
    if(groups[l].canPlace(k, 0, i+2, j+2)){//down-right
        if(groups[l].plots[i+2][j+2] == k){
            parents[y] = 1
        }
    }
    y++

    parents[y] = 0
    if(groups[l].canPlace(k, 0, i+2, j-2)){//down-left
        if(groups[l].plots[i+2][j-2] == k){
            parents[y] = 1
        }
    }
    y++
    
    return parents;
}

/////////////////////////////////////////////////////////
function seedCappedAmmount(){
    let x = Math.ceil((chosenHoe-1)/2)*5+5

    if(chosenHoe == 6){
        x += Math.ceil((orbs-4)/5)*5;
    }

    return x;
}

/////////////////////////////////////////////////////////
function plotsAmmount(){
    let x = 30 + chosenHoe*5

    if(chosenHoe == 6){
        x += orbs*2;
    }

    return x;
}

//////////////////////////////////////////////////////////////////////////
function orbUpdate(){
    var orbPrices = [0];
    let totalOrbPrice = 0;

    for(let l=0; l<orbs; l++){
        orbPrices[l] = Math.min((Math.pow(2, l) * baseOrbPrice), 2560000);
        totalOrbPrice += orbPrices[l];
    }

    sickleOrbCount.innerHTML = orbs + "&nbsp<img id=\"sickleOrbImg\" src=\"images/farmPlots/orbIcon.png\">";

    document.getElementById("orbPricing").innerHTML = "$" + numberWithCommas(totalOrbPrice) + "<br>----------------<br>";
    for(let l=0; l<orbs; l++){// i want to put the total at the top.. so idk ggs gotta loop again
        if(l==8 && orbs > 9){
            document.getElementById("orbPricing").innerHTML += "9-" + orbs + ": $" + numberWithCommas(orbPrices[l]) + "<br>";
            l=orbs;
        }else{
            document.getElementById("orbPricing").innerHTML += (l+1) + ": $" + numberWithCommas(orbPrices[l]) + "<br>";
        }
    }


}

//////////////////////////////////////////////////////////////////////////
function calculateBoard(){
    orbUpdate();
    let minHourlyProfit = 0;
    let maxHourlyProfit = 0;
    let baseProfit = 0;
    let consumableProfit = 0;
    let fertCost = 0;
    let strangeProfit = 0;
    let sickleHourlyProfit = 0;
    let totalProfit = 0;
    let fullHarvest = 0
    let fullConsumableHarvest = 0


    let cloverVal = 0;
    let cloverTotal = 0;
    let cloverTimeEffect = 0;
    let cloverStrangeEffect = 0;
    let cloverTimeCost = 0;
    let cloverConsumableTimeCost = 0;
    let totalPlots = 0;

        
    var breedSpotCount = [];
    var breedChanceCount = [];

    var totalBabies = [];
    var lowestBabies = [];
    var avgBabies = [];
    var highestBabies = [];

    let sickleProfit = 0;
    if(chosenSickle == 6){
        sickleYield = chosenSickle + orbs;
    }else{
        sickleYield = chosenSickle;
    }
    document.getElementById("sickleYieldDiv").innerHTML = "&nbsp+&nbsp" + sickleYield + "&nbsp" + "<img id=\"sickleYieldImg\" src=\"images/farmPlots/yield.png\">";

    for(let l=0; l<plotList.length; l++){
        plotCount[l] = 0;
        breedSpotCount[l] = 0;
        breedChanceCount[l] = 0;
        
        totalBabies[l] = 0;
        lowestBabies[l] = 0;
        avgBabies[l] = 0;
        highestBabies[l] = 0;
    }

    //count totals
    for(let l=0; l<6; l++){
        for(let i=0; i<groups[l].height; i++){
            for(let j=0; j<groups[l].width; j++){
                if(groups[l].plots[i][j] != -1){
                    //document.getElementById("plotB5,3").innerHTML += groups[l].plots[i][j];
    
                    if(plotList[Math.max(0,groups[l].plots[i][j])].isCrop){
                        totalPlots++;
                    }
    
                    plotCount[groups[l].plots[i][j]]++;
                    for(let k=0; k<plotList.length; k++){
                        if(plotList[k].isBreedable && groups[l].breedSpotList[i][j][k] > 0 && !groups[l].isOccupied(i, j)){
                            breedSpotCount[k]++;
                        }
                    }
                    breedChanceCount[groups[l].plots[i][j]] += groups[l].breedChanceList[i][j][groups[l].plots[i][j]];
                }
            }
        }
    }


    //run the breed sims.
    //r is repetitions for redoing the sim
    //k is plot id
    //l is group
    //i is row
    //j is col
    //x is breed chances per clover
    let repetitions = 300
    let luckChangeTotal = 0;
    let luckTotal =0;
    for(let r = 0; r < repetitions; r++){
        var babies = [];
        let startLuck = luck;

        for(let k = 0; k < plotList.length; k++){
            babies[k] = 0;

            if(plotList[k].isBreedable){
                for(let l=0; l<6; l++){
                    for(let i=0; i<groups[l].height; i++){
                        for(let j=0; j<groups[l].width; j++){ 
                            if(plotList[Math.max(0,groups[l].plots[i][j])].isBreedable){
                                let spots = possibleBreedSpots(l,k,i,j);

                                for(let x=0; x<groups[l].breedChanceList[i][j][k]; x++){
    
                                    let roll = Math.pow(Math.random(), luckClamp(luck) * .01);
                                    //console.log(roll)
                                    if(plotList[k].namae.includes("64")){
                                        roll *= 10;//64 nerf
                                    }
    
                                    //ok now check babies
                                    if(spots){
                                        if(roll < .01){//baby
                                            if(roll < .001 && !(plotList[k].namae.includes("64"))){//promote :: 64 cant promote
                                                //gotta make promote to next tier code
        
                                                luck -= 5
                                            }else{
                                                babies[k]++;
        
                                                luck -=2.5
                                            }
                                        }else{//fail
                                            //boowomp
                                            luck += .5
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
            
            totalBabies[k] += babies[k];
            lowestBabies[k] = Math.min(lowestBabies[k], babies[k]);
            highestBabies[k] = Math.max(highestBabies[k], babies[k]);
            avgBabies[k] = totalBabies[k]/repetitions;
        }
    luckChangeTotal+= (luck-startLuck);
    luckTotal+=luck;
        setLuck();//reset luck for next run
    }
    let averageLuckChange = luckChangeTotal/repetitions;
    let averageLuck = luckTotal/repetitions;
    setLuck();//reset luck for next run


    cloverVal = (1 * plotCount[9]) + (16 * plotCount[10]) + (256 * plotCount[11]);
    cloverTotal = plotCount[9] + plotCount[10] + plotCount[11];
    cloverTimeEffect = (Math.pow(cloverTotal, 3) + 2047) / 2047;
    cloverStrangeEffect = (1 + Math.log2(cloverVal + 1)) * baseStrangeRate;

    for(let l=0; l<6; l++){
        for(let i=0; i<groups[l].height; i++){
            for(let j=0; j<groups[l].width; j++){
    
                if(plotList[Math.max(0,groups[l].plots[i][j])].isBreedable){
                    let parents = findParents(l, groups[l].plots[i][j], i, j);
                    for(let p=0; p<parents.length; p++){
                        if(parents[p] == 0){
                            document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML =
                            document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML.replace(
                                "<img class=\"plotBreed" + (p+1) + "\" style=\"filter:invert(77%) sepia(10%) saturate(1308%) hue-rotate(305deg) brightness(416%) contrast(102%)\" src=\"images/farmPlots/heart.png\">",
                                "<img class=\"plotBreed" + (p+1) + "\" style=\"filter:invert(77%) sepia(10%) saturate(1308%) hue-rotate(305deg) brightness(0%) contrast(102%)\" src=\"images/farmPlots/heart.png\">"
                                );
                        }else{
                            document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML =
                            document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML.replace(
                                "<img class=\"plotBreed" + (p+1) + "\" style=\"filter:invert(77%) sepia(10%) saturate(1308%) hue-rotate(305deg) brightness(0%) contrast(102%)\" src=\"images/farmPlots/heart.png\">",
                                "<img class=\"plotBreed" + (p+1) + "\" style=\"filter:invert(77%) sepia(10%) saturate(1308%) hue-rotate(305deg) brightness(416%) contrast(102%)\" src=\"images/farmPlots/heart.png\">"
                                );
                        }
                    }
                }
                if(groups[l].breedTotal[i][j] > 0 && groups[l].canPlace(0, 0, i, j) && !groups[l].isOccupied(i, j)){
                    document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML = 
                        "<img class=\"breedDot\" src=\"images/farmPlots/alone.png\">";
                }else if(groups[l].breedTotal[i][j] == 0 && groups[l].canPlace(0, 0, i, j) && !groups[l].isOccupied(i, j)){
                    document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML =
                    document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).innerHTML.replace(
                        "<img class=\"breedDot\" src=\"images/farmPlots/alone.png\">",
                        ""
                        );
                }

                if(plotList[Math.max(0,groups[l].plots[i][j])].isCrop){
                    if(revealWateredSelected && groups[l].watered[i][j] == 0){
                        document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).style.filter = "invert(0%) sepia(0%) saturate(200%) hue-rotate(350deg) brightness(150%) contrast(100%)";
                    }else if(revealFertSelected && groups[l].fert[i][j] == 0){
                        document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).style.filter = "invert(0%) sepia(0%) saturate(200%) hue-rotate(350deg) brightness(150%) contrast(100%)";
                    }else if(revealUVSelected && groups[l].uv[i][j] == 0){
                        document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).style.filter = "invert(0%) sepia(0%) saturate(200%) hue-rotate(350deg) brightness(150%) contrast(100%)";
                    }else{
                        document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).style.filter = "";
                    }

                    let yieldBoost = 1;
                    let timeBoost = 1;
                    let strawberryBoost = 1;
                    let strawberryHourlyRepeat = 1;

                    let sickleBoost = sickleYield;
                    let minProfit = plotList[groups[l].plots[i][j]].minYield;
                    let maxProfit = plotList[groups[l].plots[i][j]].maxYield;

                    if((plotList[groups[l].plots[i][j]].namae).localeCompare('Onion') == 0){
                        minProfit = plotList[groups[l].plots[i][j]].minYield + groups[l].planted[i][j];
                        maxProfit = plotList[groups[l].plots[i][j]].minYield + groups[l].planted[i][j];
                    }

                    if((plotList[groups[l].plots[i][j]].namae).localeCompare('Gloamroot') == 0){
                        minProfit = plotList[groups[l].plots[i][j]].minYield + chosenMoonYield;
                        maxProfit = plotList[groups[l].plots[i][j]].minYield + chosenMoonYield;
                    }

                    if(groups[l].uv[i][j] > 0){
                        if(plotList[groups[l].plots[i][j]].isConsumable){
                            timeBoost /= 1.25;
                        }else{
                            yieldBoost += .25;
                        }
                    }
                    if(groups[l].fert[i][j] > 0){////rounding doesn make sense if i dont do this?? coco help meee
                        if(plotList[groups[l].plots[i][j]].isConsumable){
                            timeBoost /= 1.5;
                        }else{
                            yieldBoost += .499;
                        }
                    }
                    if(groups[l].watered[i][j] > 0){
                        timeBoost *= .8;
                    }

                    if(groups[l].strawberried[i][j] > 0 && !(plotList[groups[l].plots[i][j]].isStrawberry)){
                        let minutes = 0;
                        let ogMinutes = 0;
                        do{
                            ogMinutes += 30;
                            minutes += 30;
                            if((ogMinutes % (plotList[16].time * 60)) == 0){
                                minutes += 30*groups[l].strawberried[i][j];
                            }
                        }while(!(minutes%(plotList[groups[l].plots[i][j]].time*60) == 0 && ogMinutes%(plotList[groups[l].plots[i][j]].time*60) == 0 && 
                                ogMinutes >= (plotList[16].time * 60)));
                        strawberryBoost = Math.ceil(minutes / (plotList[groups[l].plots[i][j]].time*60));
                        strawberryHourlyRepeat = Math.ceil(ogMinutes / (plotList[groups[l].plots[i][j]].time*60));
                        //document.getElementById("plotB5,5").innerHTML = strawberryBoost +","+ strawberryHourlyRepeat +","+ minutes +","+ ogMinutes;
                    }
                    
                    let strawberryLoops = Math.floor((plotList[groups[l].plots[i][j]].time + (groups[l].strawberried[i][j] * .5)) / plotList[groups[l].plots[i][j]].time)

                    sickleBoost = Math.round(yieldBoost*sickleBoost);
                    minProfit = Math.round(yieldBoost*minProfit);
                    maxProfit = Math.round(yieldBoost*maxProfit);

                    if(plotList[Math.max(0,groups[l].plots[i][j])].isConsumable){
                        fullConsumableHarvest += strawberryLoops * ((minProfit + maxProfit)/2) * ((plotList[groups[l].plots[i][j]].value - plotList[groups[l].plots[i][j]].price));
                    }else{
                        fullHarvest += strawberryLoops * ((minProfit + maxProfit)/2) * (plotList[groups[l].plots[i][j]].value);
                    }

                    sickleBoost *= 
                        ((plotList[groups[l].plots[i][j]].value - plotList[groups[l].plots[i][j]].price)); 

                    minProfit *= 
                        ((strawberryBoost/strawberryHourlyRepeat) * 
                        (plotList[groups[l].plots[i][j]].value - plotList[groups[l].plots[i][j]].price)) / 
                        (plotList[groups[l].plots[i][j]].time * timeBoost); 

                    maxProfit *= 
                        ((strawberryBoost/strawberryHourlyRepeat) * 
                        (plotList[groups[l].plots[i][j]].value - plotList[groups[l].plots[i][j]].price)) / 
                        (plotList[groups[l].plots[i][j]].time * timeBoost); 
                        
                    if(!(plotList[groups[l].plots[i][j]].isConsumable)){
                        sickleProfit += sickleBoost;
                    }
                    minHourlyProfit += minProfit;
                    maxHourlyProfit += maxProfit;

                    if(plotList[Math.max(0,groups[l].plots[i][j])].isConsumable){
                        consumableProfit += (minProfit + maxProfit)/2;
                        cloverConsumableTimeCost += (minProfit + maxProfit)/(2*(cloverTimeEffect)) - (minProfit + maxProfit)/2;
                    }else{
                        baseProfit += (minProfit + maxProfit)/2;
                        cloverTimeCost += (minProfit + maxProfit)/(2*(cloverTimeEffect)) - (minProfit + maxProfit)/2;
                    }
                }else{
                    document.getElementById("plot" + String.fromCharCode("A".charCodeAt(0) + l) + i + "," + j).style.filter = "";
                }
            }
        }
    }

    strangeProfit = ((baseProfit * ((1 - cloverStrangeEffect) + (5 * cloverStrangeEffect))) - baseProfit) + cloverTimeCost;
    fertCost = (((plotCount[5] * 1) + (plotCount[6] * 3 / 4) + (plotCount[7] * 9 / 9)) * 500 / 24);
    sickleHourlyProfit = sickleProfit/6

    totalProfit = baseProfit;
    if(consumableSelected){
        fullHarvest += fullConsumableHarvest
        totalProfit += consumableProfit;
        strangeProfit += (consumableProfit * ((1 - cloverStrangeEffect) + (5 * cloverStrangeEffect))) - consumableProfit ;
        strangeProfit += cloverConsumableTimeCost;
    }
    if(fertCostSelected){
        totalProfit -= fertCost;
    }
    if(strangeSelected){
        totalProfit += strangeProfit;
        fullHarvest *= (1 - cloverStrangeEffect) + (5 * cloverStrangeEffect);
        sickleProfit *= (1 - cloverStrangeEffect) + (5 * cloverStrangeEffect);
        sickleHourlyProfit *= (1 - cloverStrangeEffect) + (5 * cloverStrangeEffect);
    }
    if(sickleSelected){
        fullHarvest += sickleProfit;
        totalProfit += sickleHourlyProfit;
    }

    document.getElementById("currentBox").innerHTML = printFarmstructure();

    document.getElementById("baseProfit").innerHTML = (Math.round(100 * baseProfit) / 100)
    document.getElementById("consumableProfit").innerHTML = (Math.round(100 * consumableProfit) / 100)

    if(fertCost > 0){//its greater than 0 here because fert cost is positive in calculations but negative in display.. 
        document.getElementById("profitToggle1").style.backgroundColor = "rgba(164, 78, 78, 0.764)"
    }else{
        document.getElementById("profitToggle1").style.backgroundColor = "rgba(30, 30, 30, 0.764)"
    }
    document.getElementById("fertCost").innerHTML = (Math.round(100 * fertCost) / 100)

    if(strangeProfit < 0){
        document.getElementById("plusMinus2").innerHTML = "-"
        document.getElementById("plusMinus2").style.left = (-10.95) + "vw";
        document.getElementById("profitToggle2").style.backgroundColor = "rgba(164, 78, 78, 0.764)"
    }else{
        document.getElementById("plusMinus2").innerHTML = "+"
        document.getElementById("plusMinus2").style.left = (-10.8) + "vw";
        document.getElementById("profitToggle2").style.backgroundColor = "rgba(30, 30, 30, 0.764)"
    }
    document.getElementById("strangeProfit").innerHTML = Math.abs(Math.round(100 * strangeProfit) / 100)

    document.getElementById("sickleProfit").innerHTML = (Math.round(100 * sickleHourlyProfit) / 100);
    document.getElementById("totalProfit").innerHTML = (Math.round(100 * totalProfit) / 100);
    document.getElementById("fullHarvestProfit").innerHTML = (Math.round(100 * fullHarvest) / 100);
    
    document.getElementById("strangeRateScore").innerHTML = Math.round(100000 * cloverStrangeEffect) / 1000 + "%";
    document.getElementById("timeRateScore").innerHTML = Math.round(100000 * (1/cloverTimeEffect)) / 1000 + "%";

    document.getElementById("cdnd0").innerHTML = totalPlots;
    document.getElementById("cdnd1").innerHTML = plotCount[1];
    document.getElementById("cdnd2").innerHTML = plotCount[2]/3;
    document.getElementById("cdnd3").innerHTML = plotCount[3];
    document.getElementById("cdnd4").innerHTML = plotCount[4]/2;
    document.getElementById("cdnd5").innerHTML = plotCount[5];
    document.getElementById("cdnd6").innerHTML = plotCount[6]/4;
    document.getElementById("cdnd7").innerHTML = plotCount[7]/9;
    document.getElementById("cdnd8").innerHTML = plotCount[8];
    document.getElementById("cdnd9").innerHTML = plotCount[9];
    document.getElementById("cdnd10").innerHTML = plotCount[10];
    document.getElementById("cdnd11").innerHTML = plotCount[11];
    document.getElementById("cdnd12").innerHTML = plotCount[12];
    document.getElementById("cdnd13").innerHTML = plotCount[13];
    document.getElementById("cdnd14").innerHTML = plotCount[14];
    document.getElementById("cdnd15").innerHTML = plotCount[15];
    document.getElementById("cdnd16").innerHTML = plotCount[16];
    document.getElementById("cdnd17").innerHTML = plotCount[17];
    document.getElementById("cdnd18").innerHTML = plotCount[18];
    document.getElementById("cdnd19").innerHTML = plotCount[19];
    document.getElementById("cdnd20").innerHTML = plotCount[20];
    document.getElementById("cdnd21").innerHTML = plotCount[21];

    //document.getElementById("breedProfitTable10,2").innerHTML = averageLuckChange;
    //document.getElementById("breedProfitTable9,2").innerHTML = averageLuck;

    for(let i = 0; i < plotList.length; i++){
        //c.style.color = "lime";
        let breedableCounter = 0;
        if(plotList[i].isBreedable){
            document.getElementById("breedTable" + i + ",0").innerHTML = plotCount[i];
            document.getElementById("breedTable" + i + ",1").innerHTML = breedSpotCount[i];
            document.getElementById("breedTable" + i + ",2").innerHTML = breedChanceCount[i];
            document.getElementById("breedProfitTable" + i + ",0").innerHTML = (Math.round(10 * avgBabies[i]) / 10);
            document.getElementById("breedProfitTable" + i + ",1").innerHTML = highestBabies[i];
            breedableCounter++;
        }

        if(i==0){
            document.getElementById("cdod" + i).innerHTML = "/" + plotsAmmount();
            if(totalPlots < plotsAmmount()){
                document.getElementById("cdod" + i).style.color = "lime";   
            }else if(totalPlots == plotsAmmount()){
                document.getElementById("cdod" + i).style.color = "yellow";   
            }else if(totalPlots > plotsAmmount()){
                document.getElementById("cdod" + i).style.color = "red";  
            }
        }else if(plotList[i].isCrop){
            if(plotList[i].isSeedCapped){
                document.getElementById("cdod" + i).innerHTML = "/" + seedCappedAmmount();
                if(plotCount[i] < seedCappedAmmount()){
                    document.getElementById("cdod" + i).style.color = "lime";   
                }else if(plotCount[i] == seedCappedAmmount()){
                    document.getElementById("cdod" + i).style.color = "yellow";   
                }else if(plotCount[i] > seedCappedAmmount()){
                    document.getElementById("cdod" + i).style.color = "red";   
                }
            }else{
                document.getElementById("cdod" + i).innerHTML = "/" + plotsAmmount();
                if(totalPlots < plotsAmmount()){
                    document.getElementById("cdod" + i).style.color = "lime";   
                }else if(plotCount[i] == plotsAmmount()){
                    document.getElementById("cdod" + i).style.color = "yellow";   
                }else if(plotCount[i] > plotsAmmount()){
                    document.getElementById("cdod" + i).style.color = "red";  
                }
            }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function printFarmstructure(){
    let rowPopulated = false;
    let farmStructure = "/" + currentWebsiteVersion + "/" + 
    String.fromCharCode("a".charCodeAt(0) + chosenHoe) + 
    String.fromCharCode("a".charCodeAt(0) + chosenSickle) + 
    String.fromCharCode("a".charCodeAt(0) + chosenMoon) + 
    orbs + 
    "/" 
    for(let l=0; l<6; l++){
        for(let i=0; i<groups[l].height; i++){
            for(let j=0; j<groups[l].width; j++){
                if(groups[l].iSource[i][j] == i && groups[l].jSource[i][j] == j && groups[l].plots[i][j] > 0){
                    if(!(rowPopulated)){
                        farmStructure += "-" + String.fromCharCode("a".charCodeAt(0) + i);
                        rowPopulated = true;
                    }

                    if((plotList[groups[l].plots[i][j]].isDirectional)){
                        farmStructure += String.fromCharCode(
                            "a".charCodeAt(0) + groups[l].plots[i][j]) + 
                            groups[l].direction[i][j] + 
                            String.fromCharCode("a".charCodeAt(0) + j);
                    }else{
                        farmStructure += String.fromCharCode(
                            "a".charCodeAt(0) + groups[l].plots[i][j]) + 
                            String.fromCharCode("a".charCodeAt(0) + j);
                    }
                }
            }
            rowPopulated = false;
        }
        farmStructure += "/";
    }

    return "`" + farmStructure + "`";
}

function readFarmstructure(farmCode0){//haha i hate error handling haha
    const farmImport = farmCode0.split("/");

    //if its not even a correct value
    if(farmImport.length == 1){
        return;
    }

    //if its not in a correct version to read it, i dont want to.... ok
    if((farmImport[1]).localeCompare("2.0.0") == 0){
        read1(farmImport);
    }else if((farmImport[1]).localeCompare("2.1.0") == 0){
        read2(farmImport);
    }else if((farmImport[1]).localeCompare("2.2") == 0){
        read3(farmImport);
    }else{
        return;
    }
}
function read1(farmImport){
    let plots1 = [        // 
        clear,              //0
        sprinkler,          //1
        megagrow,           //3
        gigagrow,           //4
        goatFert,           //5
        bullFert,           //6
        elephantFert,       //7
        plantFlower,        //8
        laneSprinkler,      //2
        fourLeafClover,     //9
        sixteenLeafClover,  //10
        sixtyfourLeafClover,//11
        emptyPlot,          //12
        carrot,             //13
        grape,              //14
        gloamroot,          //15
        strawberry,         //16
        turnip,             //17
        potato,             //19
        onion,              //18
        pumpkin,            //20
        melon               //21
    ];
    let idSwap = [0,1,3,4,5,6,7,8,2,9,10,11,12,13,14,15,16,17,19,18,20,21]

    for(let l=0; l<6; l++){
        groups[l].clearfarm(String.fromCharCode("A".charCodeAt(0) + l));
    }

    for(let l=0; l<6; l++){
        let g = farmImport[l+2];

        if(g.localeCompare("") != 0){
            const plotImport = g.split("-");

            for(let k=1; k<plotImport.length; k++){//start at 1 because split will count before the first - as well
                const plotData = plotImport[k].split("");
                let x = 1;
                let i = (plotData[0]).charCodeAt(0) - 97;

                do{
                    if((plots1[(plotData[x]).charCodeAt(0) - 97]).isDirectional){
                        groups[l].updatePlot(
                            idSwap[((plotData[x]).charCodeAt(0) - 97)], 
                            parseInt(plotData[x+1]), 
                            i, 
                            ((plotData[x+2]).charCodeAt(0) - 97), 
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 3;
                    }else{
                        groups[l].updatePlot(
                            idSwap[((plotData[x]).charCodeAt(0) - 97)], 0, 
                            i, 
                            ((plotData[x+1]).charCodeAt(0) - 97),
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 2;
                    }
                }while(x<plotData.length);
            }
        }
    }
}
function read2(farmImport){
    for(let l=0; l<6; l++){
        groups[l].clearfarm(String.fromCharCode("A".charCodeAt(0) + l));
    }

    const tools = farmImport[2].split("");
    chosenHoe = ((tools[0]).charCodeAt(0) - 97)
    chosenSickle = ((tools[1]).charCodeAt(0) - 97)

    orbs = parseInt(farmImport[2].slice(2, farmImport[2].length))

    document.getElementById("hoeTool").innerHTML = "<img class=\"hoeToolImg\" src=\"images/farmPlots/Hoe" + chosenHoe + ".png\">";
    document.getElementById("sickleImgDiv").innerHTML = "<img id=\"sickleImg\" src=\"images/farmPlots/Sickle" + chosenSickle + ".png\">";

    for(let l=0; l<6; l++){
        let g = farmImport[l+3];

        if(g.localeCompare("") != 0){
            const plotImport = g.split("-");

            for(let k=1; k<plotImport.length; k++){//start at 1 because split will count before the first - as well
                const plotData = plotImport[k].split("");
                let x = 1;
                let i = (plotData[0]).charCodeAt(0) - 97;

                do{
                    if((plotList[(plotData[x]).charCodeAt(0) - 97]).isDirectional){
                        groups[l].updatePlot(
                            ((plotData[x]).charCodeAt(0) - 97), 
                            parseInt(plotData[x+1]), 
                            i, 
                            ((plotData[x+2]).charCodeAt(0) - 97), 
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 3;
                    }else{
                        groups[l].updatePlot(
                            ((plotData[x]).charCodeAt(0) - 97), 0, 
                            i, 
                            ((plotData[x+1]).charCodeAt(0) - 97),
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 2;
                    }
                }while(x<plotData.length);
            }
        }
    }
}
function read3(farmImport){
    for(let l=0; l<6; l++){
        groups[l].clearfarm(String.fromCharCode("A".charCodeAt(0) + l));
    }

    const tools = farmImport[2].split("");
    chosenHoe = ((tools[0]).charCodeAt(0) - 97)
    chosenSickle = ((tools[1]).charCodeAt(0) - 97)
    chosenMoon = ((tools[2]).charCodeAt(0) - 97)
    document.getElementById("moonBox").innerHTML = "<img class=\"moonSelectorImg\" src=\"images/farmPlots/moon" + chosenMoon + ".png\">";
    document.getElementById("hoeTool").innerHTML = "<img class=\"hoeToolImg\" src=\"images/farmPlots/Hoe" + chosenHoe + ".png\">";
    document.getElementById("sickleImgDiv").innerHTML = "<img id=\"sickleImg\" src=\"images/farmPlots/Sickle" + chosenSickle + ".png\">";

    orbs = parseInt(farmImport[2].slice(3, farmImport[2].length))

    for(let l=0; l<6; l++){
        let g = farmImport[l+3];

        if(g.localeCompare("") != 0){
            const plotImport = g.split("-");

            for(let k=1; k<plotImport.length; k++){//start at 1 because split will count before the first - as well
                const plotData = plotImport[k].split("");
                let x = 1;
                let i = (plotData[0]).charCodeAt(0) - 97;

                do{
                    if((plotList[(plotData[x]).charCodeAt(0) - 97]).isDirectional){
                        groups[l].updatePlot(
                            ((plotData[x]).charCodeAt(0) - 97), 
                            parseInt(plotData[x+1]), 
                            i, 
                            ((plotData[x+2]).charCodeAt(0) - 97), 
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 3;
                    }else{
                        groups[l].updatePlot(
                            ((plotData[x]).charCodeAt(0) - 97), 0, 
                            i, 
                            ((plotData[x+1]).charCodeAt(0) - 97),
                            String.fromCharCode("A".charCodeAt(0) + l));
                        x += 2;
                    }
                }while(x<plotData.length);
            }
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////






















/*
//retired code i might want to reference again.. maybe



    //document.getElementById("1").innerHTML = printFarmstructure();
    if(maxHourlyProfit > winnerWinner){
        winnerWinner = maxHourlyProfit;
        winnerStructure = printFarmstructure()
        //document.getElementById("1").innerHTML = winnerWinner;
        //console.log(winnerWinner + ":" + winnerStructure);
        
    }

    if((chosenFarmPlot == 0) && this.breedTotal[rowOffset + row*2][colOffset + col*2] > 0){
        document.getElementById("plot" + letta + (rowOffset + row*2) + "," + (colOffset + col*2)).innerHTML += 
                    "<img class=\"breedDot\" src=\"/images/farmPlots/alone.png\">";
    }

    //document.getElementById("plotSelector" + plotList[12].namae).style.filter = "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(200%) contrast(200%)";

    //document.getElementById("plotSelectorSprinkler").onclick = function(){chosenFarmSpot = 1}
    for(let i = 0; i < plotList.length; i++){
        //document.getElementById("plotB5,"+i).innerHTML += i + "," + namae;
        document.getElementById("plotSelector" + plotList[i].namae).onclick = function(){
            chosenFarmSpot = i;
            if(chosenFarmSpot != previousPlot){
                document.getElementById("plotSelector" + plotList[i].namae).style.filter = "invert(0%) sepia(0%) saturate(50%) hue-rotate(0deg) brightness(200%) contrast(100%)";
                document.getElementById("plotSelector" + plotList[previousPlot].namae).style.filter = "";
            }
            previousPlot = chosenFarmSpot;
        }
    }


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Didnt end up continuting this///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function bruteForce(){// the best endgame farm is out there and ill find it soon
    let gID = 0;//group
    let rID = 0;//row
    let cID = 0;//col
    var farmCode = [['']];


    farmCode.length = gID+1;
    farmCode[gID].length = (groups[gID].height * groups[gID].width);
    

    for(let n=2677810000; n<(Math.pow(endgameIDs.length, (groups[gID].height * groups[gID].width)-2)); n++){///number
        let remainder = 0;
        let result = n;

        currentStructure = "";
        for(let d=2; d<(farmCode[gID].length); d++){//digit
            remainder = result%(endgameIDs.length);
            result = (result-remainder)/(endgameIDs.length);

            cID = d%(groups[gID].width)
            rID = (d-cID)/(groups[gID].width)
            if(groups[gID].plots[rID][cID] != -1){
                groups[gID].updatePlot(endgameIDs[remainder], 0, rID, cID, String.fromCharCode("A".charCodeAt(0) + gID));
            }

            farmCode[gID][d] = remainder;
            currentStructure = currentStructure + "," + farmCode[gID][d];
        }
        calculateBoard();

        if(n%30000 == 0){
            console.log("::" + n + ":" + currentStructure);
        }
    }

    ///this is great... in theory... but my pc only has so much ram.... and storage....
    console.log(winnerWinner + ":" + winnerStructure);
    console.log("000:" + printFarmstructure());
    if(rID >= groups[gID].height){
        return;
    }

    
    if(groups[gID].plots[rID][cID] != -1){
        for(let l=0; l<endgameIDs.length; l++){

            groups[gID].updatePlot(endgameIDs[l], 0, rID, cID, String.fromCharCode("A".charCodeAt(0) + gID));
            calculateBoard();
            
            
            if(cID+1 == groups[gID].width){
                bruteForce(gID, rID+1, 0);
            }else{
                bruteForce(gID, rID, cID+1);
            }
            

        }
    }
    if(cID+1 == groups[gID].width){
        bruteForce(gID, rID+1, 0);
    }else{
        bruteForce(gID, rID, cID+1);
    }
}

function fillFarmWith(fillPlot){//write all grapes
    let charCode = "A".charCodeAt(0);
    let l=0;
    //for(let l=0; l<6; l++){
        for(let i=0; i<groups[l].height; i++){
            for(let j=0; j<groups[l].width; j++){
                if(groups[l].plots[i][j] != -1){
                    groups[l].updatePlot(1, 0, i, j, String.fromCharCode("A".charCodeAt(0) + l));
                }
            }
        }
    //}
}
/////////////////////////////////////////////////////////////////////////////////////////



//desperate attempt to prevent the errors from copy pasting the encoded 
//text in the input box.  nothing worked man. it was a good idea man. if 
//you feed the encoder back through itself in reverse it gives you the 
//correct output man. fuck. whatever.. 
document.addEventListener('copy', function(e) {
    const text_only = document.getSelection().toString();
    const clipdata = e.clipboardData || window.clipboardData;  
    clipdata.setData('text/plain', text_only);
    clipdata.setData('text/html', text_only);
    e.preventDefault();
  });

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////idk bruh....
function encode(input, base, goal){
    const crypt = input.split("");
    let x = "";
    let middle = BigInt(0);
    let expo = BigInt(1);

    if(base == goal){
        return input;
    }else{
        for(let i=(crypt.length-1); i>=0; i--){
            middle = middle + (BigInt((crypt[i]).charCodeAt(0) - 45) * expo);
            expo = expo * BigInt(base);
            //console.log(middle + " md");
            //console.log(expo + " ex");
        }
        do{
            //console.log(input + "," + x + "," + middle);
            let y = Number(middle % BigInt(goal));
            x = (String.fromCharCode((y) + 45)) + x;
            //console.log(x + " XX");
            //console.log(input + "," + x + "," + middle);
            middle = (middle- BigInt(y))/BigInt(goal)
        }while(middle > 0);
        return x;
    }
}



//we need this part in order to calculate which hoe to show
if((plotList[groups[l].plots[i][j]]).isSeedCapped){
    //console.log(groups[l].plots[i][j]);
    if(plotCount[groups[l].plots[i][j]] > biggestSeedCappedTotal){
        biggestSeedCappedTotal = plotCount[groups[l].plots[i][j]];
    }
}
//console.log(biggestSeedCappedTotal);/


    ////////////////////////////////hoe stuff//////////////////////////////////////////////////
    //this technically has an issue where if its going off the seed count, when it starts needing orbs, 
    //it resets the hoe level back to 0.. the fix would be to add a check to see if it went past the 
    //max seeds for a hoe, but it doesnt need that fix because the  "if highestOrb" corrects the
    //display anyway..  leaving this here in case we need highestHoe(me) later on for some calculation

    for(let l=0; l<=6; l++){//there are 7 hoes, 0-6  
        if(l == (Math.floor((biggestSeedCappedTotal-1)/5) * 2) ||
           l == Math.ceil((totalPlots-30)/5)){
            if(l > highestHoe){
                highestHoe = l;
                //console.log(highestHoe);
            }
        }
    }
    highestOrb = Math.max((Math.ceil((biggestSeedCappedTotal-20)/5)*5) , Math.ceil((totalPlots-60)/2));

    for(let l=0; l<highestOrb; l++){
        orbPrices[l] = Math.min((Math.pow(2, l) * baseOrbPrice), 2000000);
        totalOrbPrice += orbPrices[l];
    }
    //console.log(totalOrbPrice);

    ////////////////////////////////////////////////////////////////////////////////////////////


/*
    document.getElementById("hoeTool").innerHTML = "<img id=\"hoeToolImg\" src=\"/images/farmPlots/Hoe" + highestHoe + ".png\">";
    if(highestOrb > 0){
        document.getElementById("hoeTool").innerHTML = "<img id=\"hoeToolImg\" src=\"/images/farmPlots/Hoe" + 6 + ".png\">";//obsidian hoe
        document.getElementById("hoeTool").innerHTML += "<img id=\"orbAdd\" src=\"/images/farmPlots/orbAdd.png\">";
        document.getElementById("hoeTool").innerHTML += "<img id=\"orbImg\" src=\"/images/farmPlots/orb.png\">";
        document.getElementById("hoeTool").innerHTML += "<div id=\"orbCount\">" + highestOrb + "</div>";
    }   

    
    document.getElementById("orbPricing").innerHTML = totalOrbPrice + "<br>-----------------<br>";
    for(let l=0; l<highestOrb; l++){// i want to put the total at the top.. so idk ggs gotta loop again
        document.getElementById("orbPricing").innerHTML += (l+1) + ":" + orbPrices[l] + "<br>";
    }

    

//this bit sets up the "gold clover club (gcc for short)" easter egg where you click a certain plot 3 times with a 16 leaf"
its outdated but i might bring it back idk

document.getElementById("gcc4Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/4 Leaf Clover.png\">";
document.getElementById("gcc16Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/16 Leaf Clover.png\">";
document.getElementById("gcc64Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/64 Leaf Clover.png\">";
function goldCloverClub(){
    if(gccToggle){
        document.getElementById("gcc4Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/4 Leaf Clover.png\">";
        document.getElementById("gcc16Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/16 Leaf Clover.png\">";
        document.getElementById("gcc64Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/64 Leaf Clover.png\">";
        gccToggle = false;
        gccKey = 0;
    }else{
        document.getElementById("gcc4Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/Gold4LeafClover.png\">"
        document.getElementById("gcc16Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/Gold16LeafClover.png\">"
        document.getElementById("gcc64Leaf").innerHTML = "<img class=\"counterBoximg\" src=\"/images/farmPlots/Gold64LeafClover.png\">"
        gccToggle = true;
        gccKey = 0;
    }
}
///////////////////////////////////////////////////////////////////////////////////

document.getElementById("toolBarHider").onclick = function(){
        ///////////////////////////////////////////////
        //fillFarmWith(14);
        //bruteForce();   //im trying
        ///////////////////////////////////////////////
        if(isHidden){
            document.getElementById("toolBar").style.display = ""
            //document.getElementById("toolBar").src = ""   //i wanna try changing it to "show" or something...idk
            isHidden = false;
        }else{
            document.getElementById("toolBar").style.display = "none"
            isHidden = true;
        }
    }
    document.getElementById("toolBarFlipper").onclick = function(){
        if(isRight){
            //document.getElementById("instructions").innerHTML = "jkytfkfgkhfkfkyg"
            document.getElementById("toolBarGroup").style.right = ""
            document.getElementById("toolBarGroup").style.left = "1vw"
            document.getElementById("toolBarGroup").style.direction = ""
            //document.getElementById("toolBarGroup").style.display = "none"
            isRight = false;
        }else{
            document.getElementById("toolBarGroup").style.left = ""
            document.getElementById("toolBarGroup").style.right = "1vw"
            document.getElementById("toolBarGroup").style.direction = "rtl"
            isRight = true;
        }
    }




//const cropCountingBoxes = document.getElementsByClassName("counterBox2");
//const cropCountingimgBoxes = document.getElementsByClassName("counterBox2img");

//let cropListSelected = false;
document.getElementById("cropListSelect").onclick = function(){
        cropListSelected = document.getElementById("cropListSelect").checked;
        if(cropListSelected == true){
            for (let i = 0; i < cropCountingBoxes.length; i++) {
                cropCountingBoxes[i].style.display = "";
            }
            for (let i = 0; i < cropCountingimgBoxes.length; i++) {
                cropCountingimgBoxes[i].style.display = "";
            }
        }else{
            for (let i = 0; i < cropCountingBoxes.length; i++) {
                cropCountingBoxes[i].style.display = "none";
            }
            for (let i = 0; i < cropCountingimgBoxes.length; i++) {
                cropCountingimgBoxes[i].style.display = "none";
            }
        }
        calculateBoard();
    }

*/
