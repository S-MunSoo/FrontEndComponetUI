// Write Javascript code here!

const items = document.querySelector(".item");
const wrapper = document.querySelector(".wrapper");

// 내부 classlist 클릭시 동작 구현 이벤트 버블링,캡쳐링에 대한 학습
// 이벤트리스너에 등록은 최소한으로 등록해야한다.
// wrapper.addEventListener("click", function (e) {
//   // 현재 클릭한 대상이 e.target 이다
//   const targetElem = e.target;
//   // wrapper 에서 버블링이 더이상 일어나지 않게끔 방지 해주는 역활(확산 방지)
//   e.stopPropagation();
//   // targetElem이 클래스리스트에 아이템 클래스를 갖고 있지 않으면 동작하지 않는다.
//   if (!targetElem.classList.contains("item")) return;
//   targetElem.classList.toggle("open");
//   items.forEach(function (elem) {
//     if (elem !== targetElem) elem.classList.remove("open");
//   });
// });

// 외부의 클릭햇을때 사라지는 동작 구현

document.body.addEventListener("click", function (e) {
  const targetClassList = e.target.classList;
  // e.target.classList 가 contains 가지고 있다면 동작 구현 하지 않는다.
  if (targetClassList.contains("context")) return;
  // context 일때는 아무 동작하지 않고 바로 종료 해버리고

  if (targetClassList.contains("item")) {
    // item 일때는 해당 item에 오픈클래스를 넣어주고 나머지는 지워주고 종료
    targetClassList.toggle("open");
    items.forEach(function (elem) {
      if (elem !== e.target) elem.classList.remove("open");
    });
    return;
  }
  // 목록 이외의 어떤 부분을 클릭하면 item의 open클래스를 전부 지워준다
  items.forEach(function (elem) {
    elem.classList.remove("open");
  });
});
