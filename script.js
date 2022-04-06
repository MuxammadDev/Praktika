/* Darsga topshiriq:

1) Tsiklni yordamida foydalanuvchiga yangiliklar haqidagi savollarni avtomatlashtirish

2) Foydalanuvchi javobni bo'sh satr sifatida qoldirmasligi uchun shunday qiling,
javobni bekor qilish yoki 50 belgidan uzunroq yangilik nomini kiritish. Agar bu sodir bo'lsa -
foydalanuvchini yana savollarga qaytaring. (Har qanday satrga quyidagicha kirish mumkin
str.length - va uzunligini oling)

3) Shartlardan foydalanib, personalMovieDB.count-ni tekshiring, agar u 10 dan kam bo'lsa - xabarni ko'rsating
"Juda oz sonli yangiliklar o'qilibdi", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz", agar ko'proq bo'lsa -
- Siz yangilklar ishqibozisiz. Va agar u biron bir variantga mos kelmasa - "Xato yuz berdi"

4) Amaliy mashg'ulot va tsiklni yana ikkita usulda qayta yozing  */

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangiliklar o'qilibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("Siz klassik tomoshabinsiz");
} else if (personalNewsDB.count > 30) {
  console.log("Siz yangilklar ishqibozisiz.");
} else {
  console.log("Xato yuz berdi");
}

console.log(personalNewsDB);
