<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                :css="false"
        >
            <p v-if="show" class="box"></p>
        </transition>
        <!--@after-enter="afterEnter"
               @enter-cancelled="enterCancelled"
               @before-leave="beforeLeave"-->

        <!-- @after-leave="afterLeave"
         @leave-cancelled="leaveCancelled"-->
    </div>
</template>

<script>
    import gsap from 'gsap'

    export default {
        name: "Hooks",
        data() {
            return {
                show: false
            }
        },
        methods: {
            beforeEnter(el) {
                gsap.set(el, {
                    scaleX: 0.8,
                    scaleY: 1.2
                })
                //console.log(el + 'before enter')
            },
            enter(el, done) {
                gsap.to(el, {
                    duration: 1,
                    scaleX: 1.5,
                    scaleY: 0.7,
                    opacity: 1,
                    x: 150,
                    ease: 'elastic.inOut(2.5, 1)',
                    onComplete: done
                })

                //console.log('enter: ' + el + ' ');
                //done();
            },
            /*afterEnter(el) {
                console.log('after enter: ' + el)
            },
            enterCancelled(el) {
                console.log('enter cancelled: ' + el)
            },*/
            // ----------
            // LEAVING
            // ----------

            /* beforeLeave(el){
                 console.log('before leave: ' + el)
             },*/
            leave(el, done) {
                gsap.to(el, {
                    duration: 0.7,
                    scaleX: 1,
                    scaleY: 1,
                    x: 300,
                    ease: 'elastic.inOut(2.5, 1)'
                });
                gsap.to(el, {
                    duration: 0.2,
                    delay: 0.5,
                    opacity: 0,
                    onComplete: done
                })
                //console.log('leave: '+ el);
                //done();
            },
            /*afterLeave(el) {
                console.log('after leave: ' + el)
            },
            leaveCancelled(el) {
                console.log('leave cancelled: ' + el)
            }*/
        }
    }
</script>

<style scoped>
    .box{
        width: 30px;
        height: 30px;
        background: teal;
        margin-top: 20px;
        margin-left: 50%;
    }
</style>