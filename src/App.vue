<template>
    <div>
      <div>
        <SelectFolder></SelectFolder>
      </div>
      <div>
        <ItemCount :filescount="files.length" v-bind:class="{isHidden: isInitialState}"></ItemCount>
      </div>
      <div>
        <AudioItem v-for="file in files" v-bind:key="file.name" :filename="file.name" :path="file.dir"></AudioItem>
      </div>
    </div>
</template>

<script>
  import SelectFolder from './components/SelectFolder.vue';
  import ItemCount from './components/ItemCount.vue';
  import AudioItem from './components/AudioItem.vue';

  export default{
    data(){
      return {
        folderName:"",
        files:[],
        isInitialState:true
      }
    },
    components:{
      SelectFolder,
      ItemCount,
      AudioItem
    },
    mounted:function(){
      window.electronAPI.returnFiles((event, value) => {
        //メインプロセスから返ってきたファイル一覧を取得
        this.files = value;
        this.isInitialState=false;
      });
    }
  }
</script>

<style scoped>
.isHidden{
  display:none;
}
</style>