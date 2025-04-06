Page({
  data: {
    currentTime: '00:00', // 默认时间
    userInfo: {
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      nickName: '王小明',
      wxid: 'wxm_2023'
    },
    stats: {
      activeGroups: 4,
      friends: 16,
      balance: "¥750"
    },
    menuItems: {
      accountSettings: [
        {
          icon: "💳",
          text: "支付方式",
        },
        {
          icon: "🔔",
          text: "通知设置",
        },
        {
          icon: "🌐",
          text: "货币与语言",
        }
      ],
      historyAndReports: [
        {
          icon: "⏱️",
          text: "交易历史",
        },
        {
          icon: "📊",
          text: "消费报表",
        },
        {
          icon: "📤",
          text: "导出数据",
        }
      ],
      help: [
        {
          icon: "❓",
          text: "常见问题",
        },
        {
          icon: "🎧",
          text: "联系客服",
        },
        {
          icon: "ℹ️",
          text: "关于我们",
        }
      ]
    }
  },
  
  onLoad: function(options) {
    // 设置初始时间
    this.updateTime();
    
    // 尝试获取用户信息
    try {
      const userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
        this.setData({
          'userInfo.avatarUrl': userInfo.avatarUrl || this.data.userInfo.avatarUrl,
          'userInfo.nickName': userInfo.nickName || this.data.userInfo.nickName,
          'userInfo.wxid': userInfo.wxid || this.data.userInfo.wxid
        });
      }
    } catch (e) {
      console.error('获取用户信息失败', e);
    }
  },
  
  onShow: function() {
    // 页面显示时更新时间
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
  
  editProfile: function() {
    wx.showToast({
      title: '编辑资料',
      icon: 'none'
    });
  },
  
  handleBasicMenuItemTap: function(e) {
    const text = e.currentTarget.dataset.text;
    wx.showToast({
      title: '点击了：' + text,
      icon: 'none'
    });
  },
  
  navigateToGroups: function() {
    wx.showToast({
      title: '群组功能即将上线',
      icon: 'none'
    });
  },
  
  navigateToFriends: function() {
    wx.showToast({
      title: '朋友功能即将上线',
      icon: 'none'
    });
  },
  
  navigateToIndex: function() {
    wx.navigateBack({
      delta: 1
    });
  }
}) 