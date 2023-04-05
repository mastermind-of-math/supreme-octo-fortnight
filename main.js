let images = ['computer.jpg', 'cup.jpg', 'dog.jpg', 'house.jpg', 'Tree.jpg', "earth.jpg", "https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo_of_Google_Lens.svg"];
let gl = ["Computer", "Fiesta Cup 7.75 oz", "Golden Retriever", "House", "Single Oak Tree in Spring", "The Blue Marble", "4 / 6"];
let ml = ["computer", "cup, coffee mug", "dog", "house", "tree", "planet", "0 / 6"];
let wn = ["Nobody", "Google Lens", "Google Lens", "Nobody", "Google Lens", "Google Lens", "Google Lens"]
let selected = 0;

function update(){
    let simages = images[selected];
    let sgl = gl[selected];
    let sml = ml[selected];
    let swn = wn[selected];
    document.getElementById("wnd").innerText = swn + " is more accurate";
    document.getElementById("mnd").innerText = "MobileNet: " + sml;
    document.getElementById("gld").innerText = "Google Lens: " + sgl;
    document.getElementById("img").src = simages;
    document.getElementById("num").innerText = selected + 1 + " / 7"
}

update()

function trans(am){
    selected = selected + am
    if(selected === -1){
        selected = 6;
    }
    selected = selected % 7;
    update()
}