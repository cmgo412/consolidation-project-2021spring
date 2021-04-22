
let current = {
    curVal: "v1",
    left: null,
    right: null
    }

current.left = { 
        curVal: "v2",
        left:null ,
        right: null
    }
current.right = {
        curVal: "v3",
        left: null ,
        right: null
    }

function setup() {

}

function moveLeft(event) {
    current = current.left;
    if (current.left == null) {
        let toRemove = document.getElementById("left");
        toRemove.remove();
    }
    if (current.right == null) {
        let toRemove = document.getElementById("right");
        toRemove.remove(); 
    }   


    let mp4 = document.getElementById("mp4");
    mp4.src= "Media/" + current.curVal + ".mp4";

    let webm = document.getElementById("webm");
    webm.src= "Media/" + current.curVal + ".webm";

    let ogv = document.getElementById("ogv/ogg");
    ogv.src= "Media/" + current.curVal + ".OGV";

    let videoSourse = document.getElementById("video");
    videoSourse.load();


}
function moveRight(event) {
    current = current.right;
    if (current.left == null) {
        let toRemove = document.getElementById("left");
        toRemove.remove();
    }
    if (current.right == null) {
        let toRemove = document.getElementById("right");
        toRemove.remove(); 
    }   

    let mp4 = document.getElementById("mp4");
    mp4.src= "Media/" + current.curVal + ".mp4";

    let webm = document.getElementById("webm");
    webm.src= "Media/" + current.curVal + ".webm";

    let ogv = document.getElementById("ogv/ogg");
    ogv.src= "Media/" + current.curVal + ".OGV";

    let videoSourse = document.getElementById("video");
    videoSourse.load();

}


window.addEventListener("load", setup, true); //causes setup to happen