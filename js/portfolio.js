// intro random bg
const bg = document.querySelector(".intro .bg");
const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${randomImage}`;

bg.appendChild(bgImage);

// intro 글자
const introTitle = document.querySelector(".i-title");
const portfolio = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];

//console.log(portfolio);

for (let i = 0; i < portfolio.length; i++) {
  const span = document.createElement("span");
  span.innerText = portfolio[i];
  introTitle.appendChild(span);
}

// intro 년도
const currentYear = document.querySelector(".currentYear");
const data = new Date();
const year = data.getFullYear();
currentYear.innerText = year;

console.dir(year);

// education
const aboutEdu = document.querySelector(".edu ul");
const education = [
  {
    eduDate: "2021 06. ~ 2021 09.",
    text1: "디지털 교과서 양산 작업",
    text2: "",
  },
  {
    eduDate: "2020 09.",
    text1: "종로 하이미디어 컴퓨터디자인 학원",
    text2: "스마트기기반응형 UI/UX 웹디자인&웹퍼블리셔 수료",
  },
  {
    eduDate: "2019 02.",
    text1: "이룸 미술학원 재직",
    text2: "건국대학교 현대미술학과 졸업",
  },
];

console.log(education);

const LI_ELEMENT_NUM = 3;
const P_ELEMENT_NUM = 2;

for (let i = 0; i < LI_ELEMENT_NUM; i++) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");

  aboutEdu.appendChild(li);

  li.appendChild(span);
  const spanText = aboutEdu.querySelectorAll("span");
  spanText[i].innerText = education[i].eduDate;

  li.appendChild(div);

  for (let i = 0; i < P_ELEMENT_NUM; i++) {
    const p = document.createElement("p");
    div.appendChild(p);
  }

  const firstP = aboutEdu.querySelectorAll("p:nth-child(1)");
  const secondP = aboutEdu.querySelectorAll("p:nth-child(2)");
  console.dir(firstP);
  firstP[i].innerText = education[i].text1;
  secondP[i].innerText = education[i].text2;
}

// 스크롤
$(function () {
  $(window).scroll(function () {
    // about
    var top1 = $(window).scrollTop();
    var aboutT = $(".about").offset().top;
    // port1
    var portT = $(".port1").offset().top;
    // sub
    //var subT = $(".sub").offset().top;
    // port2
    var port2T = $(".port2").offset().top;
    // port3
    var port3T = $(".port3").offset().top;

    if (top1 > aboutT - 400) {
      $(".about").addClass("active");
    } else {
      $(".about").removeClass("active");
    }

    // port1
    if (top1 > portT - 600) {
      $(".port1").addClass("active");
    } else {
      $(".port1").removeClass("active");
    }

    // sub
    // if (top1 > subT - 600) {
    //   $(".sub").addClass("active");
    // } else {
    //   $(".sub").removeClass("active");
    // }

    // port2
    if (top1 > port2T - 600) {
      $(".port2").addClass("active");
    } else {
      $(".port2").removeClass("active");
    }

    // port3
    if (top1 > port3T - 600) {
      $(".port3").addClass("active");
    } else {
      $(".port3").removeClass("active");
    }
  });

  $(".port3 .list").on("mouseenter focus", function () {
    $(this).addClass("over");
  });
  $(".port3 .list").on("mouseleave blur", function () {
    $(this).removeClass("over");
  });
});
