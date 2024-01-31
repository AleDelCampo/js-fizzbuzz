const tableElement = document.querySelector("#table");


for(let i = 1; i <= 100 ; i++) {

    
    const newElement = document.createElement("div");


    newElement.innerHTML = i;
    newElement.className = "square";
    newElement.style.color = "blue"; 
    newElement.style.fontSize = "28px";

    
    if(i % 3 == 0) {
        newElement.className += " three";
    }

    
    tableElement.append(newElement);

}