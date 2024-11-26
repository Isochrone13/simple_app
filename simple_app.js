const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Ваше случайное число: ${randomNumber}`);
});

app.listen(port, () => {
    console.log(`Генератор случайных чисел запущен http://localhost:${port}`);
});