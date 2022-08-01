function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(510, 510);
    canvas.position(700, 90);
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on("pose", gotPoses);
}
function modeLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background("#000000");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}