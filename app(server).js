const Joi = require('joi');
const shortid = require('shortid');
const express = require('express');

const app = express();
app.use('*', (req, res) => {
  console.log('Был запрос от браузера');
  res.send('<h1>Ну</h1>');
});

const listener = app.listen(4444, () => {
  console.log(`Веб-сервар запущен, порт ${listener.address().port}`);
});
const passwordSchema = Joi.string().min(3).max(10).alphanum();

console.log(passwordSchema.validate('qlklk'));
console.log(shortid.generate());
