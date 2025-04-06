// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    currentTime: '00:00',
    userInfo: {
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      nickName: '王小明',
      wxid: 'wxm_2023'
    }
  },
  
  onLoad: function() {
    this.updateTime();
  },
  
  onShow: function() {
    this.updateTime();
  },
  
  updateTime: function() {
    try {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      this.setData({
        currentTime: hours + ':' + minutes
      });
    } catch (e) {
      console.error('更新时间出错', e);
      this.setData({
        currentTime: '00:00'
      });
    }
  },
  
  simpleLogin: function() {
    try {
      wx.setStorageSync('userInfo', this.data.userInfo);
      wx.navigateTo({
        url: '../profile/profile'
      });
    } catch (e) {
      console.error('登录失败', e);
      wx.showToast({
        title: '登录失败，请重试',
        icon: 'none'
      });
    }
  },
  
  navigateToPhoneLogin: function() {
    wx.showToast({
      title: '手机号登录功能即将上线',
      icon: 'none'
    });
  },
  
  // 跳转到个人资料页
  navigateToProfile() {
    // 先获取用户信息
    this.getUserProfile();
  },
  
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  
  getUserProfile() {
    // 保存基本用户信息
    try {
      wx.setStorageSync('userInfo', this.data.userInfo);
    } catch (e) {
      console.error('保存用户信息失败', e);
    }
    
    // 跳转到个人资料页
    wx.navigateTo({
      url: '../profile/profile'
    });
  },
})
