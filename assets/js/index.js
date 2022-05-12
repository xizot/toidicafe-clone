const texts = [
  "Đi & khám phá điểm hẹn hấp dẫn",
  "Tìm góc cafe - thỏa sức sống ảo",
];

let index = 0;
let currentText = "";
let letter = "";
let count = 0;

const typing = function () {
  if (count == texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter + "|";

  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }

  const timeout = setTimeout(typing, 200);
};

typing();
