function changeImageNext() {
    var image = document.getElementById('myImage');
    if (image.src.match("RE")) {
        image.src = "../img/atomicHeart.jpg";
    } else if(image.src.match("atomic")) {
        image.src = "../img/FFsop.jpg";
    }
    else{
        image.src = "../img/RE4.jpg"
    }
}

function changeImagePrev() {
    var image = document.getElementById('myImage');
    if (image.src.match("RE")) {
        image.src = "../img/FFsop.jpg";
    } else if(image.src.match("atomic")) {
        image.src = "../img/RE4.jpg";
    }
    else{
        image.src = "../img/atomicHeart.jpg"
    }
}