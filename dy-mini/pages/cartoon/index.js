const { globalData: { authMap } } = getApp();
const { authorized } = getApp()

Page({
  data: {
    imageList: [],
    image: ''
  },
  handleUpload() {
    authorized()

    tt.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imageList: res.tempFiles,
        });
        tt.downloadFile({
          url: res.tempFilePaths[0],
          success: (res) => {
            if (res.statusCode === 200) {
              // 下载的图片存到本地的地址
              tt.uploadFile({
                url: 'http://localhost:7002/api/cartoon',
                filePath: res.tempFilePath, // 上传文件的地址
                name: "pin",
                header: {
                  "content-type": "multipart/form-data",
                  "x-csrf-token": "_1593514233357_3744"
                },
                success: ({data}) => {
                  const img = (JSON.parse(data)).data.image
                  this.setData({
                    image: 'data:image/png;base64,' + img,
                  });
                },
                fail: (err) => {
                  console.log("上传失败", err);
                },
              });

            }
          },
          fail: (res) => {
            console.log("下载失败", res.errMsg);
          },
        });
      },
      fail(err) { },
    });
  }
})