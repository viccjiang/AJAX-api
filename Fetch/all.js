// 1.把API的URL用變數先存起來，等待取用
let dataUrl =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

fetch(dataUrl, {})
  .then((response) => {
    // 這裡會得到一個 ReadableStream 的物件
    console.log(response);
    // 可以透過 blob(), json(), text() 轉成可用的資訊
    return response.json();
  })
  .then((jsonData) => {
    let data = jsonData;
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
  })
  .catch((err) => {
    console.log("錯誤:", err);
  });
