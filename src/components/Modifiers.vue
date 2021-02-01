<template>
	<div>
		<label>
			<input
					type="text"
					:value="modelValue"
					@input="emitValue"
			/>
		</label>
	</div>
</template>

<script>
	export default {
		name: "Modifiers",
		props: {
			modelValue: String,
			modelModifiers: {
				default: () => ({})
			}
		},
		emits: ['update:modelValue'],
		created() {
			console.log(this.modelModifiers);

		},
		methods: {
			emitValue(e){
				let value = e.target.value;
				if(this.modelModifiers.capitalize){
					value = value.charAt(0).toUpperCase() + value.slice(1);
				}
				this.$emit('update:modelValue', value);
			}
		}
	}
</script>

<style scoped>

</style>