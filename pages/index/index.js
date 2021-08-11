// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    msg: "",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    list: [
      {
        title: "保险经纪人", 
        description: "我和你朋友圈里那些卖保险的不一样",
        price: 88, 
        image: "https://img.coolcr.cn/2021/08/11/4f8ccdf093de1.jpg", 
        local_image: "pages/images/insurance.jpg"
      }, 

      {
        title: "纹身师", 
        description: "患抑郁症的客人靠纹身来代替自我伤害",
        price: 188, 
        image: "https://img.coolcr.cn/2021/08/11/34970db31ea48.jpg", 
        local_image: "pages/images/tattoo.jpg"
      }, 

      {
        title: "陶瓷艺术家", 
        description: "闭上眼，感受细泥在指尖划过的那种感觉",
        price: 148, 
        image: "https://img.coolcr.cn/2021/08/11/8cca6d85dbd5c.jpg", 
        local_image: "pages/images/pottery.jpg"
      }, 

      {
        title: "独立音乐人", 
        description: "这一届的年轻人还在为工作焦虑，99年的她已经靠音乐养活了自己",
        price: 288, 
        image: "https://img.coolcr.cn/2021/08/11/200e0ac7c0022.jpg", 
        local_image: "pages/images/sing.jpg"
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.setData({msg: 'Hello World hhh'})
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
