// 这是一个中文注释，测试是否乱码
let tds = document.querySelectorAll('td');
    tds.forEach(item => {
      item.onclick = function() {
        this.style.background = '#222'
    }
})