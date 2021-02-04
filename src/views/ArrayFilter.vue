<template>
    <ul style="text-align: left">
        <template v-for="num in evenNumber" :key="num">
            <li>
                {{ num }}
            </li>
            <li> {{num + 2}}</li>
        </template>

    </ul>
</template>

<script>
	export default {
		name: "ArrayFilter",
		data() {
			return {
				number: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
        computed:{
			evenNumber(){
				return this.number.filter(num => num % 2 === 0);
            }
        }
	}
</script>

<style scoped>

</style>