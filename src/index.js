import express from 'express';

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
