<template>
    <div class="container">
        <navbar /><logo />
        <section class="bg"></section>
        <section class="home">
            <main class="home--text">
                <!-- <h5>Website under construction v1.0</h5> -->
                <div class="home--text-h fadeIn animation-delay-1s">
                    <h2>Welcome to</h2>
                    <h1>clashofcars</h1>
                </div>
                <p class="fadeIn animation-delay-2s">
                    I'm a car enthusiast and passionate photographer.<br /><br />
                    I shoot at car events, shows and if you are interested i can
                    do exclusive photo shoot of your car.
                </p>
                <div class="home--text-dm fadeIn animation-delay-3s">
                    <a
                        href="https://www.instagram.com/clashofcars182/ "
                        target="_blank"
                        ><i class="fab fa-instagram icon-insta"></i>
                        <span>Dm for enquries</span></a
                    >
                </div>
                <div class="fadeIn animation-delay-4s">
                    <div class="shake">
                        <NuxtLink class="home--text-btn" to="/contact">Contact</NuxtLink>
                    </div>
                </div>
            </main>
        </section>
        <foot />
    </div>
</template>
