let dataURL = "WWI.csv";
const bataille = [];
const pertes = [];
const yearCount = [];

LoadData(dataURL)
    .then(response =>{
        console.log("All data have been loaded");
        // console.log(years)
        SortDataByOccurence(bataille, pertes, yearCount);
        console.log(pertes, yearCount)
        BarGraph();
    })
    .catch(error => {
        console.error(error);
    })

async function LoadData(dataURL){
    const response  = await fetch(dataURL);
    const rawData   = await response.text();
    // console.log(rawData);
    /**
     * rawData is store as a simple text. We need to parse the CSV
     * and store each data into a readable array
     * We use the split() for that purpose https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
     * We also remove the first rows, the header, from the data set
     */
    const data = rawData.split("\n").slice(1);
    // console.log(rows);
    /**
     * Now we can retreive each data into their own cols
     */
    data.forEach(row => {
        const columns   = row.split(',');
        const name      = columns[0];
        const recclass  = columns[1];
        const mass      = columns[2];
        const fall      = columns[3];
        const date      = columns[4];
        const year      = columns[5];
        const reclat    = columns[6];
        const reclong   = columns[7];

        bataille.push(name);
        pertes.push(mass)
        // console.log(mass, year);

        //sort data and count the number of occurence
        // const singleYear    = [];
        // const yearCount     = [];
        
        // console.log(singleYear, yearCount)
    })
}

function SortDataByOccurence(data, keys, values){
    let prev;
    let array = Object.values(data);
    array.sort();

    for(let i=0; i<array.length; i++){
        if(array[i] !== prev){
            keys.push(array[i]);
            values.push(1);
        }else{
            values[values.length-0] ++;
        }
        prev = array[i];
    }
}


/**
 * Draw the data
 */
function BarGraph(){
    const ctx = document.getElementById('barGraph').getContext('2d');

    //draw a bar chart
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'polarArea',
        // The data for our dataset
        data: {
            labels: bataille,
            datasets: [{
                label: 'Nombre de perte Premi??re Guerre Mondial',
                backgroundColor: '#474747',
                hoverBackgroundColor : '#E8A56F',
                borderWidth: 0,
                barThickness: 4,
                minBarLength : 4,
                data: pertes
            }]
        },

        // Configuration options go here
        options: {
            responsive: false
        }
    });
}