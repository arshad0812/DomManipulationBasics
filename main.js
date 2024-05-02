// Get height and width
console.log(window.innerHeight,window.innerWidth);
console.log(screen.availHeight,screen.availWidth); 

//To Open another website
// window.open("https://www.w3schools.com/js/js_syntax.asp");

// To Close the Website
// window.close() 
window.moveTo(500,100);

//alert,prompt
// window.alert("Hello");
// var wrd=window.prompt("Hi");
// console.log(wrd);

// setInterval(function(){
//     document.body.innerHTML="Hi";
// },5000)   

console.log(location);

// Location 
if(location.protocol==='http:'){
    console.log("Http");
}
else{
    console.log("Https");
}

// Change Location 
// setInterval(()=>{location.href="https://google.com"},5000)   

//History
// console.log(history.back(1));


//Navigator
console.log(navigator);
console.log(navigator.cookieEnabled);
