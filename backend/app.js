// Express установили через terminal, прописали здесь
const express = require('express');

// Приложение
const app = express();

const db = require('./models/courses.js');

// Плагин app.use + указываем в какой папке брать статический контент
app.use(express.static('public'));

//
db.init()
    .then(()=>{
        // Если все ок, то сервер начинает слушать порт 80
        console.log('Соединились с базой')
        // Указываем на каком порту запустить Node.js приложение
        app.listen(80, ()=>{
            console.log('Сервер запустился на 80 порту')
        });
    });

// get запрос с url (получить все курсы)
app.get('/all_courses', (req, res, next)=>{
    db.getAllCourses()
        .then((arr)=>{
            res.json(arr);
        })
        // если что-то пойдет нетак
        .catch((err)=>{
            console.log(err);
            // ответ
            //.end() - заканчиваем передачу
            res.status(500) .end();
        });

    // формируем ответ
    // переложила данные в Mongo
    /* res.json([
        {
            name: 'Курс по JS',
            description: 'Описание курса по JS',
            price: 60000
        },
        {
            name: 'Курс по Java',
            description: 'Описание курса по Java',
            price: 40000
        },
        {
            name: 'Курс по Kotlin',
            description: 'Описание курса по Kotlin',
            price: 80000
        }
    ]);*/
});