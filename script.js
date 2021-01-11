'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// // start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
              
//         if( a != null && b != null && a != '' && b != '' && a.length < 50){
    
//             personalMovieDB.movies[a] = b;
//             console.log("выполнено");
//         } else {
//             console.log("Лажа");
//             i--;
//         }
    
//     }
// }

// // rememberMyFilms();

// function detectPersonaLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     }else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
//         console.log("Вы классический зритель");
//     }else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     }else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonaLevel();

// function writeYourGenresfor () {
//     for (let i = 1; i <=3 ; i++) {
//          personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     }
// }

// writeYourGenresfor();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();
// const {border, bg} = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

const arr = [1 ,2 ,3 ,6 ,8];
// arr.pop();
// arr.push(10);

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }
arr.forEach (function(item, i, arr){
    console.log(` ${i}: ${item} внутри массива ${arr}`)
})