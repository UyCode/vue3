<template>
    <div>
        <p>push this button to do something you shouldn't be doing:</p>
        <br/>
        <div :class="{shake: noActivated}">
            <button @click="noActivated = true">Click Me</button>
            <span v-if="noActivated">Oh no!</span>
        </div>

        <p>transitions with style bindings</p>
        <div @mousemove="xCoordinate"
             :style="{backgroundColor: `hsl(${x}, 80%, 50%)`}"
             class="movearea"
        >
            <h3>Move your mouse across the screen...</h3>
            <p>x: {{x}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShackButton",
        data() {
            return {
                noActivated: false,
                x: 0,
            }
        },
        methods:{
            xCoordinate(e){
                this.x = e.clientX + e.clientY;
            }
        }

    }
</script>

<style scoped>
    .shake {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    body {
        margin: 30px;
        perspective: 1000px;
        backface-visibility: hidden;
        transform: translateZ(0);
    }

    button {
        background: #1b8f5a;
        border-radius: 4px;
        display: inline-block;
        border: none;
        padding: 0.75rem 1rem;
        margin: 20px 10px 0 0;
        text-decoration: none;
        color: #ffffff;
        font-family: sans-serif;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
        transition: background 0.25s ease-in;
    }

    button:focus {
        outline: 1px dashed #fff;
        outline-offset: -3px;
    }

    button:hover{
        background: #3eaf7c;
        /* applied to the hover state, so this transition will be applied when a hover is triggered */
        transition: background 0.35s ease-out;
    }

    .movearea{
        transition: 0.2s background-color ease;
    }
</style>