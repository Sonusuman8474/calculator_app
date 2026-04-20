const express = require('express');
const app = express();
const port = 3000;

app.get('/video', (req, res) => {
  res.json({
    videoUrl: 'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});