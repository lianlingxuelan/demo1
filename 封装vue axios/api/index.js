import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
});

//var url = ''|| 'Ŀ��·��
'
//Ŀ��·��
//请求home组件的数据接�?export let homes = ()=>{
  return axios.get('url')
//homes��Ϊ�Զ���