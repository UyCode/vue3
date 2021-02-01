<template>
	<div>
		<button @click="sendData" >Send Data</button>
	</div>
</template>

<script>
	export default {
		name: "DataSender",
		emits:{
			'sending-start': null,
			'sending-complete': ({email, password}) => {
				return !!(typeof email === 'string' && password);
			},
			'sending-duration': null
		},
		methods:{
			sendData(){
				this.$emit('sending-start')

				// do something else

				this.$emit('sending-duration')

				this.$emit('sending-complete',{email: 'emails', password: 'passwords'})
			}
		}
	}
</script>

<style scoped>

</style>