// 예식 시간 카운트다운
const countDownDate = new Date("June 15, 2023 14:00:00 GMT+0900").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    hours + "시간 " + minutes + "분 " + seconds + "초 남았습니다.";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "이미 시작한 예식입니다.";
  }
}, 1000);
