let video = document.getElementById("webcam");
let model; // to store the blazeface model
let bell = new Audio('bell.mp3');
let bellRung = false; 

const webCamera = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    });
};

const detectFaces = async () => {
  const prediction = await model.estimateFaces(video, false);

 

  if (prediction.length > 0 && !bellRung) {
    bell.play();
    bellRung = true; 
    
  } else if (prediction.length === 0) {
    bellRung = false; 
  }
};

webCamera();

video.addEventListener("loadeddata", async () => {
  model = await blazeface.load();

  setInterval(detectFaces, 100);
});
