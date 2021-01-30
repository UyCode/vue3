<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model.lazy="question"/>
        </p>
        <p>{{ answer }}</p>
        <p>{{ fullname }}</p>
    </div>
</template>

<script>
	export default {
		name: 'Question',
		data() {
			return {
				question: '',
				answer: 'Questions usually contain a question mark. ;-)',
				firstName: 'Ahmatjan',
				lastName: 'Rawut'
			}
		},
		watch: {
			question(newQuestion) {
				if (newQuestion.indexOf('?') > -1) {
					this.getAnswer()
				}
			}
		},
		methods: {
			getAnswer() {
				this.answer = 'Thinking...';
				this.axios.get('https://yesno.wtf/api')
					.then(response => {
						this.answer = response.data.answer
					}).catch(error => {
						return ElMessage.error('连接错误!');
					//this.answer = 'Error! could not reach the API ' + error
				})
			}
		},
		computed: {
			fullname() {
				return this.firstName + ' ' + this.lastName;
			}
		}

	}
</script>

<style>

</style>