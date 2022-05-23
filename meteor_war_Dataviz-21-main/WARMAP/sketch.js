//this sketch show how to create a simple visualization mpa using MeteorStrikesDataSet.csv from Nichols Felton Skillshare course with mappa.js
//the dataset format is csv
// this skecth only focus on data display. No Design involved

//map

const options = {
    lat: 46,
    lng: 2,
    zoom: 5,
    style: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
 }

 //more tile here : https://leaflet-extras.github.io/leaflet-providers/preview/
 
 
 // Create an instance of Leaflet
 const mappa = new Mappa('Leaflet');
 let myMap;
 let canvas;
 
 //data
 let data;
 
 //design
 
 let colorTerrestre ;
 let colorNavale ;
 
 //IxD
 let timeline, timelineLabel;
 let maxTone, v;
 
 function preload() {
     data = loadTable('WWI.csv', 'csv', 'header');
 }
 
 function setup() {
     canvas = createCanvas(windowWidth, windowHeight - 50);
 
     // //design
     colorNavale   = color(51, 116, 255, 127); //bleu
     colorTerrestre = color(255, 51, 51, 127); //rouge
 
     //IxD
     let UI          = createDiv('WWI');
     timeline        = createSlider(1914, 1919, 1915); 
     timelineLabel   = createSpan("Année: "+timeline.value());
     
     maxTone        = createSlider(0, 1060000, 1); 
     toneLabel      = createSpan("Pertes: "+maxTone.value());
 
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
                 let terrestre    = (data.getString(row, 3) === 'terrestre') ? true : false;
 
                 let rad     = sqrt(mass) / PI;
                 rad         *= 0.025;
                 rad         = constrain(rad, 2, width) + myMap.zoom();
 
                 noStroke();
                 if(terrestre){
                     fill(colorTerrestre);
                 }else{
                     fill(colorNavale);
                 }
 
                 if(date != undefined){
                     ellipse(pos.x, pos.y, rad * 2, rad * 2);
                 }else{
                     rect(pos.x, pos.y, rad * 2, rad * 2);
                 }
 
                 if(mass > maxTone.value() * 1){
                     fill(0);
                     noStroke();
                     textAlign(LEFT, CENTER);
                     textSize(8 + myMap.zoom());
                     text(place+", "+date+", Pertes: "+mass, pos.x + rad * 1.25 + 10, pos.y);
                     stroke(0);
                     line(pos.x, pos.y, pos.x + rad * 1.25, pos.y);
                 }
             }
         }
     }
 
 
     //legend
     noStroke();
     fill(colorTerrestre)
     rect(20, height-20, 20, 20);
     fill(colorNavale)
     rect(20, height-40, 20, 20);
     fill(0);
     textAlign(LEFT, CENTER)
     text("Bataille Terrestre", 40, height-20);
     text("Bataille Navale", 40, height-40);
 }
 
 function updateTimeline(){
     updateAll(timelineLabel, "Année: "+timeline.value(), drawDataviz);
 }
 
 function updateMaxTone(){
     updateAll(toneLabel, "Max Pertes: "+maxTone.value(), drawDataviz);
 }
 
 function updateAll(label, data, callback){
     label.html(data);
     if (typeof callback == "function") 
                 callback()
 }