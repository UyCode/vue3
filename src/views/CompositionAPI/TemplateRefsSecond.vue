<template>
    <div>
        <div v-for="(item, i) in list" :key="item" :ref="el => { if(el) divs[i] = el}">
            {{ item }}
        </div>
    </div>
</template>

<script>

    import {ref, reactive, onBeforeUpdate} from 'vue';

    export default {
        name: "TemplateRefsSecond",
        setup(){
            const list = reactive([1, 2, 3]);
            const divs = ref(null);

            // make sure to reset the refs before each update
            onBeforeUpdate(() => {
                divs.value = [];
                //console.log(divs.value)
            });

            return {
                list,
                divs
            }
        },
    }
</script>

<style scoped>

</style>