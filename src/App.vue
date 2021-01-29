<template>
  <div>
    <span :title="message"> Hover your mouse over me for a few seconds to see my dynamically-bound
    title!
    
     </span>

     <br>

     <a :[attrName]="url"> Link </a><br>
     <input v-on:focus="doSomething" />
     <button @click='doSomething'>Button</button>



    <!-- <p> {{ message.split('').reverse().join('') }}</p> -->

  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      message: "You loaded this page on" + new Date().toLocaleString(),
      count: 12,
      url: 'https://baidu.com',
      attrName: 'href'
    };
  },

  created() {
    console.log(this.count);

  },

  methods:{
    doSomething(){
      alert("fucused")
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
