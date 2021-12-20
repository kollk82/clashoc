<template>
    <div class="container">
        <navbar />
        <logo />
        <div class="gear">
            <div class="gear--h1">
                <h1>My gear</h1>
            </div>
            <div class="gear--content">
                <div class="gear--content-box">
                    <h2>Camera</h2>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_1,
                            span_minus: show_1,
                        }"
                        @click="show_1 = !show_1"
                    >
                        Canon 6DMarkII<span v-if="!show_1" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_1" class="span_minus">-</span>
                    </h4>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animation slideInDown_p"
                        leave-active-class="animation slideOutUp_p"
                        ><div v-if="show_1">
                            <p>
                                Main camera I use it for all shoots. Great performance in low light. Camera has an excellent 
                                touch screen and long battery life.
                            </p>
                        </div>
                    </transition>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_2,
                            span_minus: show_2,
                        }"
                        @click="show_2 = !show_2"
                    >
                        Canon 750D<span v-if="!show_2" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_2" class="span_minus">-</span>
                    </h4>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animation slideInDown_p"
                        leave-active-class="animation slideOutUp_p"
                    >
                        <p v-if="show_2">
                            Secondary camera love it for lightweight and fast continious shooting.
                        </p>
                    </transition>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_3,
                            span_minus: show_3,
                        }"
                        @click="show_3 = !show_3"
                    >
                        OnePlus 7PRO<span v-if="!show_3" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_3" class="span_minus">-</span>
                    </h4>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animation slideInDown_p"
                        leave-active-class="animation slideOutUp_p"
                    >
                        <p v-if="show_3">
                            Great for recording short video clips. I use it for Instagram Reels.
                            Records videos up to 4k 30ps.
                        </p>
                    </transition>
                </div>
                <div class="gear--content-box">
                    <h2>Lenses</h2>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_4,
                            span_minus: show_4,
                        }"
                        @click="show_4 = !show_4"
                    >
                        Canon 35mm f2<span v-if="!show_4" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_4" class="span_minus">-</span>
                    </h4>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animation slideInDown_p"
                        leave-active-class="animation slideOutUp_p"
                    >
                        <p v-if="show_4">
                            Main lens I use it for all my shoots. Very bright lens taking sharp images
                            even with aparature wide open at f2.
                        </p>
                    </transition>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_5,
                            span_minus: show_5,
                        }"
                        @click="show_5 = !show_5"
                    >
                        Canon 85mm f1.8<span v-if="!show_5" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_5" class="span_minus">-</span>
                    </h4>
                    <transition
                        name="custom-classes-transition"
                        enter-active-class="animation slideInDown_p"
                        leave-active-class="animation slideOutUp_p"
                    >
                        <p v-if="show_5">
                            Great low light performer with very nice bokeh.
                        </p>
                    </transition>
                </div>
            </div>
        </div>
        <foot />
    </div>
</template>
<script>
export default {
    data() {
        return {
            show_1: false,
            show_2: false,
            show_3: false,
            show_4: false,
            show_5: false,
        };
    },
    mounted() {
        this.show_1 = false;
        this.show_2 = false;
        this.show_3 = false; // might need this.$nextTick
        this.show_4 = false;
        this.show_5 = false;
    },
};
</script>
