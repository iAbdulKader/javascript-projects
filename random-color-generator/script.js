function generateColor(){
  let codes =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  
 let color = "#";
 
 for(let i = 0; i < 6; i++){
   let randomNum = Math.round(Math.random() * 15);
   
   let colorIndex = codes[randomNum];
   
   color += colorIndex;
 }
 
 document.body.style.backgroundColor = color;
 
 document.getElementById("color-text").style.color = color;
 
 document.getElementById("color-text").innerHTML = color;
 
}

function copy() {
    /* Get the text field */
    var copyText = document.getElementById('color-text').innerText;
    
    var hiddenText = document.getElementById("hiddenTextArea");
    
    hiddenText.value = copyText;
    
    /* Select the text field */
    hiddenText.select();
    hiddenText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    var tooltip = document.getElementById("myHoverText");
    tooltip.innerHTML = "Copied";

}

function outFunc() {
    var tooltip = document.getElementById("myHoverText");
    tooltip.innerHTML = "Copy to clipboard";
}
