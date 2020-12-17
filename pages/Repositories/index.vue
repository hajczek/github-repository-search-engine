<template>  
     <div class="content">
        <h2 class="content__title">Find Repositories</h2>
        <input 
            class="content__input" 
            type="text" 
            v-model="queryString" 
            v-on:text="searchText" 
            placeholder="Search Repositories"
        >
        <RepositoryLink 
            class="link content__link" 
            v-for="repo in repositories" 
            :key="repo.id" 
            :id="repo.id" 
            :name="repo.name" 
            :to="'repositories/' + repo.id"
        />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import RepositoryLink from '../../components/RepositoryLink';

export default {
     components: {
        RepositoryLink
    },
    data(){
        return {
            repositories: [],  
            queryString: ''
        };
    },
    apollo: {
        repositories: {
            query: gql`
                query repositories($queryString: String!){
                    search(query: $queryString, type: REPOSITORY, first: 10) {
                        nodes {
                        ... on Repository {
                                id
                                name
                            }
                        }
                    }
                }
                `, 
                variables() {
                    return {
                        queryString: this.queryString
                    }
                },
                 update(data) {
                    return data.search.nodes;
                 }
        } 
    },
      methods: {
        searchText(text){   
            this.queryString = text;
        }
    }
};
</script>

<style lang="scss">
    .content__input {    
        border: 1px solid $input-border-color;
        padding: 10px 20px;
        margin-bottom: 2rem;
    }
    .content__link {
        width:100%;
        display:flex;
        line-height: 2;
        text-decoration: underline;
        
        &:hover {
            text-decoration: none;
        }
    } 

</style>