const tableElement = document.querySelector("#table");


for(let i = 1; i <= 100 ; i++) {

    
    const newElement = document.createElement("div");


    newElement.innerHTML = i;
    newElement.className = "square";
    newElement.style.color = "blue"; 
    newElement.style.backgroundColor = "fuchsia";
    newElement.style.fontSize = "24px";
    newElement.style.border = "none";

    
    if(i % 3 == 0) {
        newElement.className += " three";
        newElement.style.backgroundColor = "lightblue";
        let three = newElement.textContent = "Fizz" 
    }

    if(i % 5 == 0) {
        newElement.className += " five";
        let three = newElement.textContent = "Buzz"
        newElement.style.color = "black";
        newElement.style.backgroundColor = "aqua";
    }

    if(i % 15 == 0) {
        newElement.className += " fifteen";
        let three = newElement.textContent = "FizzBuzz"
        newElement.style.color = "black";
        newElement.style.backgroundColor = "blue";
    }
    
    tableElement.append(newElement);

}