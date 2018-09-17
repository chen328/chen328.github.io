function Promise1(executor) {
  let self = this;
  self.status = 'pending';  //promise当前的状态
  self.value = undefined;
  self.onResolvedCallback = []; //还不懂 Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = []; // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value){  //函数内声明resolve
    if (self.status === 'pending'){
      self.status = 'resolved';
      self.data = value;
      for (let i = 0; i < self.onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }

  function reject(value){
    if (self.status === 'pending') {
      self.status = 'rejectd';
      self.data = value;
      for (let i = 0; i < self.onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](value)
      }
    }
  }

  executor(resolve,reject)
}

//then 实现
Promise1.prototype.then = function (onResolve,onReject) {
  let self = this
  let promise2

  //判断then内是否传函数为参数
  onResolve = typeof onResolve === 'function'? onResolve : function () {}
  onReject = typeof onReject === 'function'? onReject : function () {}

  if (self.status === 'resolved') {
    return promise2 = new Promise1(function(resolve, reject) {

    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise1(function(resolve, reject) {

    })
  }

  if (self.status === 'pending') {
    return promise2 = new Promise1(function(resolve, reject) {

    })
  }
}
