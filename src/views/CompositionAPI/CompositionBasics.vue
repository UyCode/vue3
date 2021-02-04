<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "CompositionBasics",
        components:{

        },
        props:{
            user:{
                type: String,
                required: true
            }
        },
        data(){
            return {
                repositories:[],
                filters: {},
                searchQuery: '',
            }
        },
        computed:{
            filterRepositories (){
                // implementation
               return  null
            },
            repositoriesMatchingSearchQuery(){
                //implementation
                return null
            }
        },
        watch:{
            user: 'getUserRepositories'
        },
        methods:{
            getUserRepositories(){
                return !!(this.repositories && this.user);
            },
            updateFilters(){
                // implementation
            }
        },
        mounted() {
            this.getUserRepositories();
        }

    }
</script>

<style scoped>

</style>