//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

/**
 * 1 - Call a file with the Fetch(file) function
 * 2 - Retreive the asynchronous response (Promises) and manage error
 * 3 - Read, cast and store the Data Stream (text, blob, json...)
 * 4 - Use the data
 */

 let dataURL = "../../Dataset/Meteorite_Landings.csv";

 console.log("Load data")

 LoadData(dataURL)
    .then(response => {
        console.log("All data has been loaded")
    })
    .catch(error => { //handle error
        console.error(error);
    });;

 async function LoadData(imgURL){
     const response = await fetch(imgURL); //using await replace the .then(). It wait until the reponse is loaded to store it into the varibale
     const data     = await response.text();
     document.getElementById("txt-holder").innerHTML  = data;
 }


