<template>
    <div class="demo">
        <button
                v-for="tab of tabs"
                :key="tab"
                :class="['tab-button', {active: currentTab === tab}]"
                @click="currentTab = tab"
        > {{ tab }}
        </button>
    <keep-alive>
        <component :is="currentTabComponent"></component>
    </keep-alive>

    </div>
</template>

<script>
    import TabHome from "./dynamicComponent/TabHome";
    import TabPosts from "./dynamicComponent/TabPosts";
    import TabArchive from "./dynamicComponent/TabArchive";

    export default {
        name: "DynamicComponent",
        components: {
            TabHome,
            TabPosts,
            TabArchive
        },
        data() {
            return {
                currentTab: 'Home',
                tabs: ['Home', 'Posts', 'Archive']
            }
        },
        computed: {
            currentTabComponent() {
                return 'tab-' + this.currentTab.toLowerCase();
            }
        }
    }

</script>

<style>
    .demo {
        font-family: sans-serif;
        border: 1px solid #eee;
        border-radius: 2px;
        padding: 20px 30px;
        margin-top: 1em;
        margin-bottom: 40px;
        user-select: none;
        overflow-x: auto;
    }

    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .demo-tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>