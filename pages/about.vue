<template>
    <div class="content">
        <h2 class="content__title">About</h2>
        <p class="content__text">This project was made for recruitment proces for position 'Front-end Developer'.</p>
        <h3 class="content__title--small">Used for this project:</h3>
        <ul class="list content_list">
            <li>Vue.js with Nuxt.js</li>
            <li>Github GraphQl API</li>
            <li>Apollo</li>
        </ul>
    </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'About The App',
            meta: [
                { charset: 'utf-8' },
                {                    
                    hid: 'Information about chosen repozitory on Github',
                    name: 'Information about chosen repozitory on Github',
                    content: "Information about chosen repozitory on Github"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .content__title--small {
        margin-top: 1rem;
        font-size: 1rem;
        color: $title-small-color;
    }
</style>
