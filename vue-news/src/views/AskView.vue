<template>
  <div>
      <div v-for="item in ask">{{item.title}}</div>
  </div>
</template>

<script>
import { fectchAskList } from '../api/index.js';

export default {
  data(){
    return{
      ask:[]
    }
  },
  created(){
    fectchAskList()
      .then(response =>this.ask=response.data)
      .catch(error => console.log(error));
  },
}

</script>

<style>

</style>