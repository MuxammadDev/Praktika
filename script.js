"use strict";

let numberOfNews;

function startProject() {
  while (numberOfNews) {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
  }
  while (numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");
  }
}
startProject();

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNews() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
      b = prompt("Unga qancha baho bergan bo'lar edingiz?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalNewsDB.news[a] = b;
      console.log("tayyor");
    } else {
      console.log("Error");
      i--;
    }
  }
}

rememberNews();

function showPersonalLevel() {
  if (personalNewsDB.count < 10) {
    console.log("Juda oz sonli yangiliklar o'qilibdi");
  } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
    console.log("Siz klassik tomoshabinsiz");
  } else if (personalNewsDB.count > 30) {
    console.log("Siz yangilklar ishqibozisiz.");
  } else {
    console.log("Xato yuz berdi");
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalNewsDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalNewsDB.genres[i - 1] = prompt(
      `Sizning sevimli janringiz nomer: ${i}`
    );
  }
}

writeYourGenres();

showMyDB(personalNewsDB.privat);
