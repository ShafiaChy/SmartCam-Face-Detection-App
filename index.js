let video = document.getElementById("webcam");
let bell = new Audio('bell.mp3');
let bellRung = false; // a flag is being used to prevent the bell from ringing continuously


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


webCamera();

video.addEventListener("loadeddata", async () => {

const model = faceDetection.SupportedModels.MediaPipeFaceDetector; // specifies the MediaPipe Face Detector as the model to use

const detectorConfig = {
  runtime: 'mediapipe', //for using the MediaPipe library
  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_detection', //cdn for loading to load the necessary assets for the model
}; 
try {
  const detector = await faceDetection.createDetector(model, detectorConfig);

  const detectFaces = async () => {
    const face = await detector.estimateFaces(video);

    if (face?.length > 0 && !bellRung) {
      bell.play();
      bellRung = true; 
      console.log("Faces detected:", face,bellRung)
      
      
    } else if(face.length==0){
      bellRung = false; 
      console.log("No faces detected",bellRung);
      
    }

  
  };

  setInterval(detectFaces, 100);
} catch (error) {
  console.error("Error loading detector:", error);
}

});

