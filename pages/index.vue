<template>
    <div class="content">
        <h2 class="content__title red">Home</h2>
        <p class="content__text"><strong>Github Repository Search Engine</strong> allows you to find repository on 
            <a class="link" href="https://github.com/" target="_blank">Github</a> by name.<br/>
            For that go to the section <nuxt-link class="link" to='/repositories'>Repositories</nuxt-link> and find some interesting repo :) 
        </p>
    </div>
</template>

<script>
    export default {
        head(){
            return{
                title: 'Welcome to Github Repository Search Engine',
                meta: [
                    { charset: 'utf-8' },
                    {                    
                        hid: 'description',
                        name: 'description',
                        content: "About this app"
                    }
                ]
            }
        }
    }
</script>

