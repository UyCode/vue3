<template>
    <div>
        <button @click="say('Hi')">Say Hi</button>
        <button @click="say('what')">Say what</button>
        <button @click="warn('From cannot be submitted yet.', $event)">Submit</button>
        <div>
            <button @click.capture="one($event), two($event)">Two Event</button>
        </div>

    </div>
</template>

<script>
	export default {
		name: "VonEvent",
        methods:{
			say(message){
				alert(message);
            },
            warn(message, event){
				if(event){
					console.log(event)
					event.preventDefault();
                }
				alert(message);
            },

            one(){
				alert('First event')
				console.log('First event')
            },
            two(){
				alert('Second event')
                console.log('Second event')
            }
        }
	}
</script>

<style scoped>

</style>