song = "";

function preload()
{
  song = loadSound(music.mp3);
}

function setup()
 {

  canvas = createCanvas(300, 300);
  canvas.position(825, 250);

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotPoses);

}

function modelLoaded()
{
  console.log('PoseNet is Initialized')
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
leftWristY = 0;

