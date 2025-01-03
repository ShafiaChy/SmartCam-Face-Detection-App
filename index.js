let video = document.getElementById("webcam");
let model; // to store the blazeface model
let bell = new Audio('bell.mp3');
let bellRung = false; // a flag is being used to prevent the bell from ringing continuously

//request access to the webcam
const webCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream; //display the webcam feed in the video element 
    });
};

const detectFaces = async () => {
    //checks for the face in the video
  const prediction = await model.estimateFaces(video);

//   if an array detected set the flag to true so that bell doesnot ring continuously
  if (prediction.length > 0 && !bellRung) {
    bell.play();
    bellRung = true; 
    
  } else if (prediction.length === 0) {
    bellRung = false; 
  }
};


webCamera();

//waits for the video data to be loaded, then loads the BlazeFace model for face detection. Once the model is ready, it starts calling the detectFaces
video.addEventListener("loadeddata", async () => {
  model = await blazeface.load();

  setInterval(detectFaces, 100);
});
