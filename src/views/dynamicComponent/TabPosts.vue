<template>
    <div class="demo-tab">
        <h2>Posts  Component</h2>
        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
                @click="selectedPost = post"
                >{{ post.title }}</li>
        </ul>
        <div>
            <div v-if="selectedPost">
                <h3> {{selectedPost.title }}</h3>
                <div v-html="selectedPost.content" style="color: orangered"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabPosts",
        data(){
            return {
                selectedPost: '',
                posts:[
                    {
                       id: 1,
                       title:'Post A',
                       content:'<p>balabala a</p>'
                    },{
                       id: 2,
                       title:'Post B',
                       content:'<p>balabala b</p>'
                    },{
                       id: 3,
                       title:'Post C',
                       content:'<p>balabala c</p>'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
p{
    color: orangered;
}
    h1{
        color: hotpink;
    }
</style>