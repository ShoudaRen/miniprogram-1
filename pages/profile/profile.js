Page({
  data: {
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
    // 页面显示时做一些初始化工作
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
  
  // 返回上一页
  navigateBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },
  
  // 打开设置页面
  openSettings: function() {
    wx.showToast({
      title: '设置',
      icon: 'none'
    });
  }
}) 