
let current = { //staying in room vs. leaving room 
    curVal: "choice1_start",
    left: null,
    right: null,
    left_button: "Stay in Your Room",
    right_buttton: "Leave Your Room"
    }

current.left = { //staying in room: using phone vs. laptop
        curVal: "choice2_phone_vs_laptop",
        left:null ,
        right: null,
        left_button: "Use Your Laptop",
        right_buttton: "Use Your Phone"
    }

current.left.left = { //using laptop: playing video games vs. doing work
    curVal: "choice2a_game_vs_work",
    left: null,
    right: null,
    left_button: "Play Video Games",
    right_buttton: "Do Some Work"
}

current.left.left.left = { //bad ending: playing video games
    curVal: "choice2a_video_games",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.left.left.right = { //bad ending: doing work
    curVal: "choice2a_work",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.left.right = { //using phone: cute vs. scary content
    curVal: "choice2b_cute_vs_scary",
    left: null,
    right: null,
    left_button: "Watch Cat Videos",
    right_buttton: "Read Urban Legends"
}

current.left.right.left = { //good ending: cute content
    curVal: "choice2b_cute",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.left.right.right = { //bad ending: scary content
    curVal: "choice2b_scary",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.right = { //leaving room: living room vs. kitchen
        curVal: "choice3_livingroom_vs_kitchen",
        left: null ,
        right: null,
        left_button: "Go to Kitchen",
        right_buttton: "Go to Living Room"
    }

current.right.left = { //kitchen: roommate's food vs. milk
    curVal: "choice3a_milk_vs_food",
    left: null,
    right: null,
    left_button: "Eat Roommate's Food",
    right_buttton: "Drink Some Milk"
}

current.right.left.left = { //bad ending: roommate's food
    curVal: "choice3a_roommate_food",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.right.left.right = { //bad ending: spoiled milk
    curVal: "choice3a_milk",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.right.right = { //living room: watching tv vs. sleeping on couch
    curVal: "choice3b_couch_vs_tv",
    left: null,
    right: null,
    left_button: "Watch TV",
    right_buttton: "Sleep on Couch"
}

current.right.right.left = { //bad ending: watching tv
    curVal: "choice3b_tv",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

current.right.right.right = { //bad ending: sleeping on couch
    curVal: "choice3b_couch",
    left: null,
    right: null,
    left_button: "",
    right_buttton: ""
}

function setup() {

}
function start(event) {
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let start = document.getElementById("start");
    start.remove();
    left.className="button";
    right.className="button";

    let videoSource = document.getElementById("video");
    videoSource.load();

}
function moveLeft(event) {
    current = current.left;

    let left = document.getElementById("left");
    let right = document.getElementById("right");
    left.innerText = current.left_button;
    right.innerText = current.right_buttton;

    if (current.left == null) {
        let toRemove = document.getElementById("left");
        toRemove.remove();
    }
    if (current.right == null) {
        let toRemove = document.getElementById("right");
        toRemove.remove(); 
    }   

    let mp4 = document.getElementById("mp4");
    mp4.src= "Media/footage/" + current.curVal + ".mp4";

    // let webm = document.getElementById("webm");
    // webm.src= "Media/footage/" + current.curVal + ".webm";

    // let ogv = document.getElementById("ogv/ogg");
    // ogv.src= "Media/footage/" + current.curVal + ".OGV";

    let videoSource = document.getElementById("video");
    videoSource.load();


}
function moveRight(event) {
    current = current.right;

    let left = document.getElementById("left");
    let right = document.getElementById("right");
    left.innerText = current.left_button;
    right.innerText = current.right_buttton;

    if (current.left == null) {
        let toRemove = document.getElementById("left");
        toRemove.remove();
    }
    if (current.right == null) {
        let toRemove = document.getElementById("right");
        toRemove.remove(); 
    }   

    let mp4 = document.getElementById("mp4");
    mp4.src= "Media/footage/" + current.curVal + ".mp4";

    // let webm = document.getElementById("webm");
    // webm.src= "Media/" + current.curVal + ".webm";

    // let ogv = document.getElementById("ogv/ogg");
    // ogv.src= "Media/" + current.curVal + ".OGV";

    let videoSource = document.getElementById("video");
    videoSource.load();

}


window.addEventListener("load", setup, true); //causes setup to happen