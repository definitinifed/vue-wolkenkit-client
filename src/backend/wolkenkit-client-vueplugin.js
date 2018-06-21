import wolkenkit from 'wolkenkit-client';

const plugin = {
  install: function(Vue, options){
    //private
    var myPrivateProperty = 'Private property';

    //instance properties and methods
    Vue.prototype.$myPublicProperty = 'Public Property';

    Vue.prototype.$myAddedMethod = function () {
      return myPrivateProperty;
    };
    Vue.prototype._getData = function (url) {
      return url;
    };

    //static properties and methods
    Vue.myStaticProperty = 'My static prop';
    Vue.myStaticMethod = function () {
      console.log('in');
    }
  }
}

export default plugin;
