function ajax(option) {
  let xhr = new XMLHttpRequest();
  if (option.type.toUpperCase() === 'POST'){
    xhr.open('post',`${option.url}`);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(option.data)
  }
  if (option.type.toUpperCase() === 'GET'){
    xhr.open(`get?${option.data}`,`${option.url}`);
    xhr.send()
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){   //还有其他成功情况
      option.success()
    } else if (xhr.status === 404){ //还有其他失败情况
      option.failed()
    } else if (option.timeout()){
      
    }
  }
}
let option = {
  url:'',
  type:'post',
  dataType:'json',
  data:'the request body',
  headers: {
    'Content-Type': 'text/xml',
    'XXX': 'YYY',
  },
  success:function () {
    console.log('success')
  },
  failed:function () {
    console.log('failed')
  },
  timeout:function () {
    console.log('time out')
  }
}