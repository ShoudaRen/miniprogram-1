Page({
  data: {
    currentTime: '21:59',
    groups: [
      {
        id: 1,
        avatar: '🍽️',
        name: '周末聚餐小分队',
        lastActivity: '3小时前',
        amount: '+¥128.50'
      },
      {
        id: 2,
        avatar: '🏝️',
        name: '旅行基金',
        lastActivity: '昨天',
        amount: '-¥325.00'
      },
      {
        id: 3,
        avatar: '🏢',
        name: '合租公寓费用',
        lastActivity: '3天前',
        amount: '+¥210.75'
      },
      {
        id: 4,
        avatar: '💼',
        name: '项目组经费',
        lastActivity: '上周',
        amount: '-¥105.20'
      }
    ]
  },

  onLoad() {
    this.updateTime()
  },

  onShow() {
    this.updateTime()
  },

  updateTime() {
    try {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      this.setData({
        currentTime: `${hours}:${minutes}`
      })
    } catch (error) {
      console.error('更新时间失败:', error)
      this.setData({
        currentTime: '00:00'
      })
    }
  },

  onCreateGroup() {
    wx.showToast({
      title: '创建群组功能开发中',
      icon: 'none'
    })
  },

  onGroupTap(e) {
    const groupId = e.currentTarget.dataset.id
    wx.showToast({
      title: `群组 ${groupId} 详情页开发中`,
      icon: 'none'
    })
  }
}) 