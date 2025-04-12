// pages/friends/friends.js
Page({
  data: {
    currentTime: '21:59',
    friends: []
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
  }
}) 