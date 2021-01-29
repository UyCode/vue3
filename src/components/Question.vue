<template>
  <div>
       <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            question:'',
            answer: 'Questions usually contain a question mark. ;-)'
        }
    },

    watch:{
        question(newQuestion, oldQuestion) {
            if(newQuestion.indexOf('?') > -1){
                this.getAnswer
            }
        }
    },

    methods:{
        getAnswer(){
            this.answer = 'Thinking...';
        }
    }
}
</script>

<style>

</style>