import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
});

//var url = ''|| '目标路由
'
//目标路由
//璇锋眰home缁勪欢鐨勬暟鎹帴鍙?export let homes = ()=>{
  return axios.get('url')
//homes可为自定义