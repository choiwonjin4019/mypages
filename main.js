// 모든 이미지 요소를 선택합니다.
const images = document.querySelectorAll("img");

// 이미지가 클릭되었을 때의 이벤트 핸들러를 정의합니다.
function handleClick(event) {
  // 이미지의 크기를 1.2배로 늘립니다.
  this.style.transform = "scale(1.2)";
  // 클릭된 이미지의 하이퍼링크로 이동합니다.
  window.location.href = this.parentElement.href;
}

// 각 이미지 요소에 클릭 이벤트 핸들러를 등록합니다.
images.forEach((image) => {
  image.addEventListener("click", handleClick);
});
