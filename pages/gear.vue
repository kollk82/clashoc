<template>
    <div class="container">
        <navbar />
        <div class="gear">
            <div class="gear--h1">
                <h1>My gear <arrow /></h1>
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
                    <div v-if="show_1">
                        <p>
                            Main camera I use it for all shoots. Great
                            performance in low light. Camera has an excellent
                            touch screen and long battery life.
                        </p>
                    </div>

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

                    <p v-if="show_2">
                        Secondary camera love it for lightweight and fast
                        continious shooting.
                    </p>

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

                    <p v-if="show_3">
                        Great for recording short video clips. I'm using it for
                        Instagram reels. This phone can record videos in solid
                        1080p 60fps.
                    </p>

                    <h4
                        v-bind:class="{
                            'active span_minus': !show_4,
                            span_minus: show_4,
                        }"
                        @click="show_4 = !show_4"
                    >
                        Dji Osmo Action<span v-if="!show_4" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_4" class="span_minus">-</span>
                    </h4>

                    <p v-if="show_4">
                        This Action Camera is perfect for POV You Tube videos.
                        Link to my You Tube videos...&nbsp;<a
                            class="plane_link"
                            href="https://www.youtube.com/channel/UCRz3qSzQEpXApP8uAkYVGRw"
                            target="_blank"
                            >here</a
                        >
                    </p>
                </div>
                <div class="gear--content-box">
                    <h2>Lenses</h2>
                    <h4
                        v-bind:class="{
                            'active span_minus': !show_5,
                            span_minus: show_5,
                        }"
                        @click="show_5 = !show_5"
                    >
                        Canon 35mm f2<span v-if="!show_5" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_5" class="span_minus">-</span>
                    </h4>

                    <p v-if="show_5">
                        Main lens I use it for all my shoots. Very bright lens
                        taking sharp images even with aparature wide open at f2.
                    </p>

                    <h4
                        v-bind:class="{
                            'active span_minus': !show_6,
                            span_minus: show_6,
                        }"
                        @click="show_6 = !show_6"
                    >
                        Canon 85mm f1.8<span v-if="!show_6" class="span_plus"
                            >+</span
                        >
                        <span v-else-if="show_6" class="span_minus">-</span>
                    </h4>

                    <p v-if="show_6">
                        Great low light performer with very nice bokeh.
                    </p>
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
            show_6: false,
        };
    },
    mounted() {
        this.show_1 = false;
        this.show_2 = false;
        this.show_3 = false; // might need this.$nextTick
        this.show_4 = false;
        this.show_5 = false;
        this.show_6 = false;
    },
};
</script>
