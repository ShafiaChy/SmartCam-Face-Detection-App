# SmartCam - Face Detection App

SmartCam is a simple face detection application that uses TensorFlow.js and BlazeFace models to detect faces in real-time through a webcam.

---

## Installation

To get started with SmartCam, you need to include the necessary script tags for TensorFlow.js and BlazeFace in your HTML file. Add the following tags:

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"></script>
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

2. **Load the BlazeFace Model**
   Once the video element is loaded with data, load the BlazeFace model:

   ```javascript
   video.addEventListener("loadeddata", async () => {
     const model = await blazeface.load();

     setInterval(async () => {
       const predictions = await model.estimateFaces(video);
       detectFaces(predictions);
     }, 100);
   });
   ```

3. **Detect Faces**
   Pass the video feed to the BlazeFace model to detect faces in real-time. The `estimateFaces` function returns an array of predictions, which you can process to highlight detected faces.
    ```javascript
        video.addEventListener("loadeddata", async () => {
            model = await blazeface.load();

            setInterval(detectFaces, 100);
        });
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
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

## Notes

- Ensure your browser supports `getUserMedia` to access the integrated webcam of your PC.


---

