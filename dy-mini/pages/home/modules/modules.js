Component({
  data: {
    modules: [
      {
        id: 1,
        name: '智能融脸',
        path: '/pages/melting/index'
      },
      {
        id: 2,
        name: '动漫照片',
        path: '/pages/cartoon/index'
      },
      {
        id: 3,
        name: '智能美妆',
        path: '/pages/melting/index'
      },
      {
        id: 4,
        name: '智能美图',
        path: '/pages/melting/index'
      },
    ]
  },
  methods: {
    handleClickModule(e) {
      const path = e.currentTarget.dataset.path || '/pages/home/index'
      tt.navigateTo({
        url: path
      });
    }
  }
})