<template>
  <div>
    <p>
      Enter the path of the root folder:<br>
      <input type="text" v-model="folderPath"><button @click="selectFolder">OK</button>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        folderPath:""
      }
    },
    methods:{
      selectFolder(){
        //OKボタン押下時にメインプロセスへフォルダパスを通知
        window.electronAPI.getFolderName(this.folderPath);
      }
    }
  }
</script>

<style scoped>
input{
  width:80%;
  padding:5px;
}
button{
  padding:5px 20px;
}
</style>