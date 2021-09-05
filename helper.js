// 類別圖示font awesome class name
const iconSet = require('./models/icon')

module.exports = {
  toIcon: function (category) {
    let iconHTML = ''

    switch (category) {
      case '家居物業':
        iconHTML = iconSet.house
        break
      case '交通出行':
        iconHTML = iconSet.van
        break
      case '休閒娛樂':
        iconHTML = iconSet.grin
        break
      case '餐飲食品':
        iconHTML = iconSet.tableware
        break
      case '其他':
        iconHTML = iconSet.pen
        break
      // 隱藏版圖示
      case '笑死':
        iconHTML = iconSet.tear
        break
      case '笑瞇瞇':
        iconHTML = iconSet.wink
        break
      case '清單':
        iconHTML = iconSet.list
        break
      case '咖哩':
        iconHTML = iconSet.poo
        break
      case '解鎖':
        iconHTML = iconSet.unlock
        break
      case '購物籃':
        iconHTML = iconSet.shopping
        break
      default: iconHTML = iconSet.pen
        break
    }

    return iconHTML
  },

  // 加千分位符號
  addComma: function (currency) {
    return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },

  dateFormat: function (date) {
    // 轉成 2021-1-1 00:00:00格式，再把「-」換成「/」
    return date.toLocaleString('zh-TW').split(' ')[0].replace(/-/g, '/')
  },

  dateTWFormat: function (date) {
    // 符合 chrome input時間格式 YYYY-MM-DD 格式
    // 轉成 2021/01/01 格式，再把「/」換成「-」供input的值使用
    return date.toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(new RegExp('/', 'g'), '-')
  },

  todayTW: function () {
    return new Date().toLocaleString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(new RegExp('/', 'g'), '-')
  },

  valueEqual: function (one, another) {
    return one === another
  }
}
