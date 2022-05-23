//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

/**
 * 1 - Call a file with the Fetch(file) function
 * 2 - Retreive the asynchronous response (Promises) and manage error
 * 3 - Read, cast and store the Data Stream (text, blob, json...)
 * 4 - Use the data
 */

 let imgURL = "../../Asset/meteor.png";

 console.log("Load data")

 LoadData(imgURL)
    .then(response => {
        console.log("All data has been loaded")
    })
    .catch(error => { //handle error
        console.error(error);
    });;

 async function LoadData(imgURL){
     const response = await fetch(imgURL); //using await replace the .then(). It wait until the reponse is loaded to store it into the varibale
     const blob     = await response.blob();
     document.getElementById("img-holder").src = URL.createObjectURL(blob);
 }


 /**
  * The following example show how to use fetch method and handle the promises in the various setp describe on the top on this file
  */
//  fetch(imgURL) //1 - Load data using fetch
//     .then(response => { // 2- Handle the response (promises) given by the Fetch function
//         console.log(response);
//         return response.blob(); //3 - Read the data and cast it as a Blob
//     })
//     .then(blob => {
//         console.log(blob); //4 - The data is here
//         document.getElementById("img-holder").src = URL.createObjectURL(blob);
//     })
//     .catch(error => { //handle error
//         console.error(error);
//     });

 /*
 NOTE : 
 response => {} est equivalent à function(response){}
 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

 fetch(imgURL)
    .then(function(response){
        console.log(response);
        return response.blob;
    });

*/
