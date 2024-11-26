const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Ваше случайное число: ${randomNumber}`);
});

describe('GET /', () => {
    it('должно возвращать случайное число', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toMatch(/Ваше случайное число: \d+/);
    });
});