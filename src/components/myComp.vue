<template>
    <p :class="$attrs.class" :style="styleObject">Hi a am R!</p>
    <span> this is a child component</span>


</template>

<script>
	export default {
		name: "myComp",
        data(){
			return{
				styleObject:{
					fontSize: 50 + 'px',
					fontFamily: 'JetBrains Mono'
                }
            }
        }
	}
</script>

<style scoped>

</style>