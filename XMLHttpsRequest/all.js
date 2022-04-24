// 1.把API的URL用變數先存起來，等待取用
let dataUrl =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// 2.new 出一個 XMLHttpRequest 物件(以此物件的方法進行資料請求)
let xhr = new XMLHttpRequest();

// 3.以GET方法開啟一個請求
//open('Method',API的URL,預設值為true非同步進行)
xhr.open("GET", dataUrl, true);

// 4.送出請求(若為GET參數不填或填null)
xhr.send();

// 5 或直接用 onload => 資料接收/送出成功後執行的function
// 寫一個function處理狀態改變時
// 0=執行前    1=讀取中   2=已讀取  3=資訊交換中  4=完成
// status(HTTP狀態碼):200 正常完成
xhr.onload = function () {
  // 如果完成(readyState=4 , 且HTTP狀態正常 status=200)
  if (this.readyState === 4 && this.status === 200) {
    // 將接回的資料存到變數 data
    // 把抓到的資料物件化或陣列化，加以運用
    let data = JSON.parse(this.responseText);
    console.log("查看data: ", data);
    let str = "";
    data.forEach(function (item) {
      str += `<div class="card border-dark mb-3">
      <div class="card-header">${item.sarea}</div>
      <div class="card-body text-dark">
        <p class="card-text">${item.sna}</p>
      </div>
    </div>`;
    });
    //選取 DOM，並渲染至網頁
    const list = document.querySelector(".list");
    list.innerHTML = str;
  } else {
    console.log("資料錯誤");
  }
};
