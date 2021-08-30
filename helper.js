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
      default: iconHTML = iconSet.pen
        break
    }

    return iconHTML
  },

  //加千分位符號
  addComma: function (currency) {
    return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },

  dateFormat: function (date) {
    //轉成2021-01-01T16:00:00.000Z，再把「-」換成「/」
    return date.toISOString().split('T')[0].replace(/-/g, '/')
  },

  dateISOFormat: function (date) {
    //轉成2021-01-01T16:00:00.000Z，供input的值使用
    return date.toISOString().split('T')[0]
  },

  todayISOFormat: function () {
    return new Date().toISOString().split("T")[0]
  },

  valueEqual: function (one, another) {
    return one === another
  }
}
