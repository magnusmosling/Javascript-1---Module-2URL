






// const button = document.querySelector(".button");

// button.onclick = function(){
//     console.log("I am a button");
// }







// function button(){
//     document.querySelector().innerHTML = count;
// }

// function count(){
//     const newInterval = setInterval(function(){
//         count+=1
//         countSpan.innerHTML=count

//         if (count === 7) {
//             clearInterval(newInterval)   
//         }
//     }, Interval);

// }








const button = document.querySelector('button');
const countSpan = document.querySelector(".count")
let count = 0

// button.onclick = count();

// function count(){
//     const countSpan = document.querySelector(".count")
//     let count = 0
//     const newInterval = setInterval(function(){
//         count+=1
//         countSpan.innerHTML=count

//         if (count === 7) {
//             clearInterval(newInterval)   
//         }
//     }, Interval);

// }



let Interval = 1000;

const myInterval = function(){
    const newInterval = setInterval(function(){
    count+=1
    countSpan.innerHTML=count

    if (count === 7) {
        clearInterval(newInterval)   
    }
}, Interval);
}



