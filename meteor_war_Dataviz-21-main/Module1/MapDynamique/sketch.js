//this sketch show how to create a simple visualization mpa using MeteorStrikesDataSet.csv from Nichols Felton Skillshare course with mappa.js
//the dataset format is csv
// this skecth only focus on data display. No Design involved

//map
const options = {
   lat: 46,
   lng: 2,
   zoom: 5,
   style: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
}
//more tile here : https://leaflet-extras.github.io/leaflet-providers/preview/


// Create an instance of Leaflet
const mappa = new Mappa('Leaflet');
let myMap;
let canvas;

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
    data = loadTable('../../Dataset/Meteorite_Landings.csv', 'csv', 'header');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight - 50);

    // //design
    colorFell   = color(255, 100, 100, 127);
    colorFound  = color(150, alpha);

    //IxD
    let UI          = createDiv('');
    timeline        = createSlider(0, 2020, 2020); 
    timelineLabel   = createSpan("Year: "+timeline.value());
    
    maxTone        = createSlider(0, 100, 1); 
    toneLabel      = createSpan("Max Tone: "+maxTone.value());

    timeline.parent(UI);
    timelineLabel.parent(UI);
    maxTone.parent(UI);
    toneLabel.parent(UI);

    timeline.input(updateTimeline);
    maxTone.input(updateMaxTone);

    
    //map
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    myMap.onChange(drawDataviz);
    
}

function drawDataviz() {
    clear();

    noStroke();
    rectMode(CENTER);

    for (let row = 0; row < data.getRowCount(); row++) { 
        let date    = data.getString(row, 5);
        if(date < timeline.value() || date == undefined){
            
            const long  = Number(data.getString(row, 7));
            const lat   = Number(data.getString(row, 6));
            if(myMap.map.getBounds().contains({lat: lat, lng: long})){
            
                const pos   = myMap.latLngToPixel(lat, long);
                
                let place   = data.getString(row, 0);
                let mass    = data.getString(row, 2);
                let fell    = (data.getString(row, 3) === 'Fell') ? true : false;

                let rad     = sqrt(mass) / PI;
                rad         *= 0.025;
                rad         = constrain(rad, 2, width) + myMap.zoom();

                noStroke();
                if(fell){
                    fill(colorFell);
                }else{
                    fill(colorFound);
                }

                if(date != undefined){
                    ellipse(pos.x, pos.y, rad * 2, rad * 2);
                }else{
                    rect(pos.x, pos.y, rad * 2, rad * 2);
                }

                if(mass > maxTone.value() * 1000000){
                    fill(0);
                    noStroke();
                    textAlign(LEFT, CENTER);
                    textSize(8 + myMap.zoom());
                    text(place+", "+date+", mass: "+mass+"g", pos.x + rad * 1.25 + 10, pos.y);
                    stroke(0);
                    line(pos.x, pos.y, pos.x + rad * 1.25, pos.y);
                }
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
}

function updateTimeline(){
    updateAll(timelineLabel, "Year: "+timeline.value(), drawDataviz);
}

function updateMaxTone(){
    updateAll(toneLabel, "Max Tone: "+maxTone.value(), drawDataviz);
}

function updateAll(label, data, callback){
    label.html(data);
    if (typeof callback == "function") 
                callback()
}