<template>
    <div>
        <h1> Hello App</h1>
            <p>
                <router-link to="/">HomePage</router-link> <br />
                <router-link to="/about">AboutPage</router-link>
            </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "RouterExample"
    }
</script>

<style scoped>

</style>