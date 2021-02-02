<template>
    <div>
        <button @click="show = !show">
            Toggle
        </button>

        <transition name="slide-fade">
            <p v-if="show" style="color: hotpink">Hello</p>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "EnterTransition",
        data(){
            return{
                show: true,
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
    }

    .slide-fade-enter-active{
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active{
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to{
        transform: translateX(20px);
        transition: all 0.8s cubic-bezier(1, 0.5, 0.4, 1);
        opacity: 0;
    }

</style>