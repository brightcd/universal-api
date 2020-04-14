export default function chooseImage(options) {
  if ( options.sourceType && options.sourceType.indexOf('camera') > -1 ) {
    return new Promise(function(resolve, reject) {
      const media = require('@system.media');
      media.takePhoto({
        success: function(res) {
          const { uris = [] } = res;
          let apFilePaths = [];
          if (uris.length > 0) {
            apFilePaths = Object.values(uris);
          }
          resolve(Object.assign({}, {
            data: apFilePaths
          }, res));
        },
        fail: function(data, code) {
          reject({
            'error': code,
            'errorMessage': data
          });
        }
      });
    });
  } else {
    return new Promise(function(resolve, reject) {
      const media = require('@system.media');
      media.pickImages({
        success: function(res) {
          const { uris = [] } = res;
          let apFilePaths = [];
          if (uris.length > 0) {
            apFilePaths = Object.values(uris);
          }
          resolve(Object.assign({}, {
            data: apFilePaths
          }, res));
        },
        fail: function(data, code) {
          reject({
            'error': code,
            'errorMessage': data
          });
        }
      });
    });
  }
}
