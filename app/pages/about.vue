<template>
    <div class="about-page">
        <div class="container">
            <h1>About Us</h1>
            <p>
                Welcome to our application. This page provides information about our
                project and mission.
            </p>

            <section class="mission">
                <h2>Our Mission</h2>
                <p>
                    We are dedicated to delivering high-quality solutions that make a
                    difference.
                </p>
            </section>

            <section class="team">
                <h2>Our Team</h2>
                <p>
                    Our talented team is committed to innovation and excellence in
                    everything we do.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'About Us',
        meta: [
            { name: 'description', content: 'Learn more about our project and team' }
        ]
    })
</script>

<style scoped>
.about-page {
    padding: 2rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    color: #333;
    margin-bottom: 1.5rem;
}

h2 {
    color: #555;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

section {
    margin-bottom: 2rem;
}

p {
    line-height: 1.6;
    color: #666;
}
</style>