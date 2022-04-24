
// 1.把API的URL用變數先存起來，等待取用
const dataUrl =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

$.ajax({
  method: 'GET', // 指定請求方法
  url: dataUrl, // 指定API 的 URL 
  dataType: 'json', // API的格式
    success: res =>{ // 成功的話執行
      console.log(res)
      let data = res;
      console.log('查看data: ',data);
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
        },
    error: err =>{ // 失敗的話執行
      console.log(err)
      },
});