<template>
    <div>
        <div ref="root"> This is a Root element </div>
    </div>
</template>

<script>
    import {ref, h} from 'vue';

    export default {
        name: "TemplateRefs",

        setup() {
            const root = ref(null);

            //method 1
            /*
            onMounted(() =>{
                // the DOM element will be assigned to the ref after initial render
                console.log(root.value); // <div> This is a Root element </div>
            });

            return{
                root
            };
            */

            // method 2
            return () => h('div', {
                ref: root
            });

            // with JSX
            // return () => <div ref={root} />
        }
    }
</script>

<style scoped>

</style>