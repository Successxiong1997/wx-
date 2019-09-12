//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    
  },
  onLoad: function () {

  },
  imgshouquan(){
    wx.getSetting({
      success:(res)=>{
        if (!res.authSetting['scope.writePhotosAlbum']){
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success(){
              console.log('OK')
            },
            fail(){
              wx.showModal({
                title: '提示',
                content: '需相册授权才能保存图片',
                success(res){
                  if(res.confirm){
                    wx.openSetting({
                      success(res){
                        if (res.authSetting["scope.writePhotosAlbum"]) {
                          console.log("获取权限成功，再次点击图片保存到相册")
                        } else {
                          console.log("获取权限失败")
                        }
                      }
                    })
                  }else{
                    if(res.cancel){
                      wx.showToast({
                        title: '已拒绝授权',
                      })
                    }
                  }
                }
              })
            }
          })
        }
      }
    })
  },
})

// wx.showModal({
//   title: '提示',
//   content: '保存相册需授权',
//   success(res) {
//     if (res.confirm) {
//       wx.getSetting({
//         success: (res) => {
//           if (!res.authSetting['scope.writePhotosAlbum']) {
//             wx.authorize({
//               scope: 'scope.writePhotosAlbum',
//               success() {
//                 console.log('OK')
//               },
//               fail() {
//                 wx.showToast({
//                   title: '请前往设置授权',
//                 })
//               }
//             })
//           }
//         }
//       })
//     } else {
//       if (res.cancel) {
//         wx.showToast({
//           icon: 'warn',
//           title: '已取消授权',
//         })
//       }
//     }
//   }
// })