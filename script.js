let count = 1; 
document.getElementyById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 1s)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
    }

    document.getElementyById(`radio${count}`).checked = true;
}