// pages/goodsLists/goodsLists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    searchContent: '',
    indicatorDots: false,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    greatPics: [
      "../../images/great1.png",
      "../../images/great2.png",
      "../../images/great3.png",
    ],
    navList: [
      {
        url: "../category/category",
        src: "../../images/icon-nav/icon-nav1.png",
        title: "全部分类",
        openType: "switchTab"
      },
      {
        url: "./stores_street/stores_street",
        src: "../../images/icon-nav/icon-nav2.png",
        title: "店铺街",
        openType: "navigate"
      },
      {
        url: "./brands_street/brands_street",
        src: "../../images/icon-nav/icon-nav3.png",
        title: "品牌街",
        openType: "navigate"
      },
      {
        url: "./integral_mall/integral_mall",
        src: "../../images/icon-nav/icon-nav4.png",
        title: "积分商城",
        openType: "navigate"
      },
      {
        url: "./group_purchase/group_purchase",
        src: "../../images/icon-nav/icon-nav5.png",
        title: "团购",
        openType: "navigate"
      },
      {
        url: "./coupons_centre/coupons_centre",
        src: "../../images/icon-nav/icon-nav6.png",
        title: "领券中心",
        openType: "navigate"
      },
      {
        url: "../user/my_orders/my_orders",
        src: "../../images/icon-nav/icon-nav7.png",
        title: "我的订单",
        openType: "navigate"
      },
      {
        url: "../user/user",
        src: "../../images/icon-nav/icon-nav8.png",
        title: "个人中心",
        openType: "switchTab"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var goods = getApp().globalData.goods;
    this.setData({
      goods: goods
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {


  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  buy: function (e) {
    var selectedItem = e.currentTarget.dataset.item;
    var id = selectedItem.id;
    var cart = getApp().globalData.cart;

    var isContains = false;
    cart.forEach(element => {
      if (element.item.id == id) {
        element.count++;
        isContains = true;
        console.log(cart);
        return;
      }
    });

    if (!isContains) {
      var newItem = {
        item: selectedItem,
        count: 1
      }
      cart.push(newItem);
      console.log(cart);
    }

    wx.showToast({
      title: '添加成功',
      duration: 300
    })
  },

  addSearchContent: function (e) {
    let keyWord = e.detail.value ? e.detail.value : null;
    that.setData({
      searchContent: keyWord
    })
  },

  search: function () {
    wx.navigateTo({
      url: '../searchPage/searchPage',
      success: function (res) {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})