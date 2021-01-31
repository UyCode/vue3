<template>
  <div id="app">
   <!-- <span :title="message">
   Hover your mouse over me for a few seconds to see my dynamically-bound
    title!
     </span>

     <br>

     <a :href="url"> Link </a><br>
     <input v-on:focus="doSomething" />
     <button @click='doSomething'>Button</button>
      <Question></Question>
      <my-comp class="myclass" />
      <Todo />
      <VonEvent></VonEvent>
      <FormInput> </FormInput>-->

      <component-basics></component-basics>


  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
    /*import Question from "./components/Question";
    import myComp from "./components/myComp";
    import ArrayFilter from "./components/ArrayFilter";
    import HelloWorld from './components/HelloWorld.vue'
    import Todo from "./components/Todo";
    import VonEvent from './components/VonEvent'
    import FormInput from './components/FormInput';*/
    import ComponentBasics from "./components/ComponentBasics";

export default {
    components:{
        /*Question,
        myComp,
        ArrayFilter
        VonEvent
        FormInput*/
        ComponentBasics
    },
  data() {
    return {
      message: "You loaded this page on" + new Date().toLocaleString(),
      count: 12,
      url: 'https://baidu.com',
    };
  },

  created() {
    console.log(this.message);

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

    .myclass{
        color: red;
    }
</style>
