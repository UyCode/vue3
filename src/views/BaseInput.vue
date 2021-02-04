<template>
    <div>
        <label>
            <input ref="input" />
        </label>
    </div>

</template>

<script>
    export default {
        name: "BaseInput",
        methods:{
            focusInput(){
                this.$refs.input.focus();
            }
        },
        mounted() {
            this.focusInput();
        }
    }
</script>

<style scoped>

</style>