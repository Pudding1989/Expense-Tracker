module.exports = {
  toIcon: function (category) {
    let iconHTML = ''

    switch (category) {
      case '家居物業':
        iconHTML = 'fas fa-house-user'
        break
      case '交通出行':
        iconHTML = 'fas fa-shuttle-van'
        break
      case '休閒娛樂':
        iconHTML = 'fas fa-grin-beam'
        break
      case '餐飲食品':
        iconHTML = 'fas fa-utensils'
        break
      case '其他':
        iconHTML = 'fas fa-pen'
        break
      default: iconHTML = 'fas fa-pen'
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
