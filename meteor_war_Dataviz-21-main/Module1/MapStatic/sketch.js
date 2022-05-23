//this sketch show how to create a simple visualization mpa using MeteorStrikesDataSet.csv from Nichols Felton Skillshare course
//the dataset format is csv
// this skecth only focus on data display. No Design involved

let worldmap;
let aspectRatio;

//data
let data;

//design
let alpha       = 127;
let colorFell ;
let colorFound;

//IxD
let timeline, timelineLabel;
let maxTone, v;

function preload() {
    worldmap = loadImage('../../Asset/WorldMap.png');
    data = loadTable('../../Dataset/Meteorite_Landings.csv', 'csv', 'header');
}

function setup() {
    aspectRatio = worldmap.width / worldmap.height;
    createCanvas(windowWidth, windowWidth / aspectRatio);

    //design
    colorFell   = color(255, 100, 100, 127);
    colorFound  = color(150, alpha);

    //IxD
    let UI          = createDiv('');
    timeline        = createSlider(0, 2020, 0); 
    timelineLabel   = createSpan("Year: "+timeline.value());
    
    maxTone        = createSlider(1, 100, 0); 
    toneLabel      = createSpan("Max Tone: "+maxTone.value());

    timeline.parent(UI);
    timelineLabel.parent(UI);
    maxTone.parent(UI);
    toneLabel.parent(UI);

    timeline.input(updateTimeline);
    maxTone.input(updateMaxTone);
    
}

function draw() {
    background(220);

    image(worldmap, 0, 0, width, width / aspectRatio);
    noStroke();
    rectMode(CENTER);

    for (let row = 0; row < data.getRowCount(); row++) { 
        let date    = data.getString(row, 5);
        if(date < timeline.value() || date == undefined){
            let mass    = data.getString(row, 2);
            let long    = data.getString(row, 7);
            let lat     = data.getString(row, 6);
            let fell    = (data.getString(row, 3) === 'Fell') ? true : false;

            let x       = map(long, -180, 180, 0, width);
            let y       = map(lat, 90, -90, 0, height);
            let rad     = sqrt(mass) / PI;
            rad         *= 0.025;
            rad         = constrain(rad, 2, width);

            noStroke();
            if(fell){
                fill(colorFell);
            }else{
                fill(colorFound);
            }

            if(date != undefined){
                ellipse(x, y, rad * 2, rad * 2);
            }else{
                rect(x, y, rad * 2, rad * 2);
            }
        }
    }

    //draw text
    for (let row = 0; row < data.getRowCount(); row++) { 
        let date    = data.getString(row, 5);
        if(date < timeline.value() || date == undefined){
            let place   = data.getString(row, 0);
            let mass    = data.getString(row, 2);
            let long    = data.getString(row, 7);
            let lat     = data.getString(row, 6);

            let x       = map(long, -180, 180, 0, width);
            let y       = map(lat, 90, -90, 0, height);
            let rad     = sqrt(mass) / PI;
            rad         *= 0.025;
            rad         = constrain(rad, 2, width);

            if(mass > maxTone.value() * 1000000){
                fill(0);
                noStroke();
                textAlign(LEFT, CENTER)
                text(place+", "+date, x + rad * 1.25 + 10, y);
                stroke(0);
                line(x, y, x + rad * 1.25, y);
            }
        }
    }

    //legend
    noStroke();
    fill(colorFell)
    rect(20, height-20, 20, 20);
    fill(colorFound)
    rect(20, height-40, 20, 20);
    fill(0);
    textAlign(LEFT, CENTER)
    text("Fell", 40, height-20);
    text("Found", 40, height-40);

    noLoop();
}

function updateTimeline(){
    updateAll(timelineLabel, "Year: "+timeline.value(), draw);
}

function updateMaxTone(){
    updateAll(toneLabel, "Max Tone: "+maxTone.value(), draw);
}

function updateAll(label, data, callback){
    label.html(data);
    if (typeof callback == "function") 
                callback()
}