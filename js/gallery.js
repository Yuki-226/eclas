"use strict";
{
  const images = [
    {
      src: "img/50537851_786749331658848_5533689218933691485_n.jpg",
      msg1: "Sharp Separate Mascara",
      msg2: "シャープセパレートマスカラ",
      msg3:
        "まつ毛が一本一本数えられそうなくらい繊細にセパレートする仕上がりです。時間が経ってもパンダ目になりません。ウォータープルーフですが38°以上のお湯でOFFできます。",
      msg4: "価格",
      msg5: "2700yen"
    },
    {
      src: "img/65107449_127016215189377_3862999944230669490_n.jpg",
      msg1: "Egutam",
      msg2: "エグータム",
      msg3:
        "ヒアルロン酸、イチョウ葉エキス、ブドウ種子エキスなどを配合したまつげ美容液です。ビューラーやマスカラ、まつげパーマなどによって傷んでしまったまつ毛を補修＆保護。若々しくて、ハリ・ツヤのある伸びやかなまつげへ導きます。",
      msg4: "価格",
      msg5: "2800yen"
    },
    {
      src: "img/62271612_171776077179857_4191454719219652091_n.jpg",
      msg1: "Moist cleansing",
      msg2: "モイストクレンジング",
      msg3:
        "主成分は水と美容液。13種類の美容成分配合で乾燥を防ぎます。W洗顔不要。",
      msg4: "価格",
      msg5: "2500yen"
    },
    {
      src: "img/54247952_574117396405075_7911684444431087793_n.jpg",
      msg1: "Eyelash serum",
      msg2: "アイラッシュセラム",
      msg3:
        "資生堂のまつ毛研究から生まれた独自成分”養生成分”をたっぷり配合。低刺激で安心。",
      msg4: "価格",
      msg5: "2300yen"
    }
  ];

  let currentIndex = 0;

  let mainImage = document.getElementById("main");
  mainImage.src = images[currentIndex].src;

  let mainmsg1 = document.querySelector(".msg > h2");
  mainmsg1.textContent = images[currentIndex].msg1;

  let mainmsg2 = document.querySelector(".msg > h4");
  mainmsg2.textContent = images[currentIndex].msg2;

  let mainmsg3 = document.querySelector(".msg > p");
  mainmsg3.textContent = images[currentIndex].msg3;

  let msg4dt = document.getElementById("price");
  let msg4dd = document.getElementById("price2");
  msg4dt.textContent = images[currentIndex].msg4;
  msg4dd.textContent = images[currentIndex].msg5;

  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image.src;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }
    li.addEventListener("click", () => {
      mainImage.src = image.src;

      const thumbnails = document.querySelectorAll(".thumbnails > li");
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");

      mainmsg1.textContent = image.msg1;
      mainmsg2.textContent = image.msg2;
      mainmsg3.textContent = image.msg3;
      msg4dt.textContent = image.msg4;
      msg4dd.textContent = image.msg5;
    });

    li.appendChild(img);
    document.querySelector(".thumbnails").appendChild(li);
  });
}
