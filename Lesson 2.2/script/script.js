





const button = document.querySelector('button');
const countSpan = document.querySelector(".count")
let count = 0





const myInterval = function(){
    const newInterval = setInterval(function(){
    count+=1
    countSpan.innerHTML=count

    if (count === 7) {
        clearInterval(newInterval)   
    }
}, 1000);
}


button.onclick = myInterval();
