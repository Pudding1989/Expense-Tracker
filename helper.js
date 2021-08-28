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
    //直接強行直接去掉後面的，把「-」換成「/」
    return date.toJSON().substring(0, 10).replace(/-/g,'/')
  }
}
