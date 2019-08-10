<!--  -->
<template>
  <div></div>
</template>

<script>
import homes from './api/index.js'
export default {
  data() {
    return {
	};
  },
  //生命周期 - 创建完成（访问当前this实例�?
  created() {
	//homes().then(res=>{
       //   console.log(res)
     //})
	this.getData()
},
methods:{
	async getData(){
		await homes()
	}
},

  //生命周期 - 挂载完成（访问DOM元素�?
 mounted: {}
};
</script>
<style scoped>
/* @import url(); 引入css�?*/
</style>