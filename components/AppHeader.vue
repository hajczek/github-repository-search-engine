<template>
    <header class="header">
        <h1 class="header__title">Github Repository Search Engine</h1>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <nuxt-link to='/' class="link nav__link">Home</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to='/repositories' class="link nav__link">Repositories</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to='/about' class="link nav__link">About</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss">
    .header__title {
        text-align: center;
        color: #077591;
        margin-bottom: 1rem;
    }
    .nav {
        width: 100%;
        margin-bottom: 2rem;

        .nav__list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            list-style-type: none;
            justify-content: center;
            border-bottom: 1px solid #92d7e9;

            .nav__item {
                margin: 0 1rem;

                .nav__link {
                    text-decoration:  none;
                }
            }
        }
    }

    @media screen and (max-width: 700px) {
        .header__title{
            font-size: 1.4rem;
        } 
    } 

</style>