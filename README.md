# SmartCam - Face Detection App

SmartCam is a simple face detection application that uses TensorFlow.js and BlazeFace models to detect faces in real-time through a webcam.

---

## Installation

To get started with SmartCam, you need to include the necessary script tags for TensorFlow.js and BlazeFace in your HTML file. Add the following tags:

```html
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_detection"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
    
    <!-- You must explicitly require a TF.js backend if you're not using the TF.js union bundle. -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/face-detection"></script>
```

Place these script tags above the script file containing your custom JavaScript code.

---

## Usage

### Steps to Implement:

1. **Request Access to Webcam**
   Use the following code snippet to request access to the user's webcam:

   ```javascript
   const webCamera = () => {
     navigator.mediaDevices
       .getUserMedia({
         video: { width: 600, height: 400 },
         audio: false,
       })
       .then((stream) => {
         video.srcObject = stream; // Display the webcam feed in the video element
       });
   };
   ```

2. **Load the MediaPipe Model**
   Once the video element is loaded with data, specify the MediaPipe Face Detector as the model to use:

   ```javascript
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

   ```




### Explanation

### Key Functions:

- **`webCamera`**
  - Requests permission to access the user's webcam.
  - Displays the video feed in a `<video>` element by setting its `srcObject` property.

- **`blazeface.load`**
  - Loads the pre-trained BlazeFace model for face detection.

- **`model.estimateFaces(video)`**
  - Processes the video stream and detects faces, returning prediction data.

### Integration:

- Add the above script tags for TensorFlow.js and BlazeFace in your HTML file.
- Place your JavaScript code in a separate file and include it after the script tags in your HTML file.

---

### Example HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartCam</title>
  
</head>
<body>
  <video id="video" autoplay playsinline width="600" height="400"></video>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_detection"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/face-detection"></script>
    <script src="index.js"></script>
</body>
</html>
```

---

## Notes

- Ensure your browser supports `getUserMedia` to access the integrated webcam of your PC.
- used tensorflow simple face detection for JavaScript https://github.com/tensorflow/tfjs-models/tree/master/face-detection
- used mediapipe cdn https://github.com/tensorflow/tfjs-models/tree/master/face-detection/src/mediapipe

---

