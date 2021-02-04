<template>
	<div>
		<button @click="sendData">Send Data</button>
		<label>
			<input
				type="text"
				:value="title"
				@input="$emit('update:title', $event.target.value)"
			/>
		</label>
	</div>
</template>

<script>
	export default {
		name: "DataSender",
		props: {
			'title': {
				type: String,
				required: true
			}
		},
		emits: {
			'sending-start': null,
			'sending-complete': ({email, password}) => {
				return !!(typeof email === 'string' && password);
			},
			'sending-duration': null,
			'update:title':'nullable'
		},
		methods: {
			sendData() {
				this.$emit('sending-start')

				// do something else

				this.$emit('sending-duration')

				this.$emit('sending-complete', {email: 'emails', password: 'passwords'})
			}
		}
	}
</script>

<style scoped>

</style>