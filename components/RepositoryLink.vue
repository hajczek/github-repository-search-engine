<template>
<nuxt-link :to="'repositories/' + id">
    <p>{{ name }} &raquo;</p>
</nuxt-link>
</template>

<script>
export default{
    name: 'RepositoryLink',
    props: [ "id", 'name' ]
}
</script>