<template>
    <div class="content">
        <h2 class="content__title">Repository Details</h2>
        <ul class="list content__list">  
            <li><b>Name:</b> {{this.repository.name}}</li>
            <li v-if="this.repository.owner"><b>Owner:</b> {{this.repository.owner.login}}</li>
            <li class="content__list--short"><b>URL:</b> <a class="link" :href="`${this.repository.url}`" target="_blank">{{this.repository.url}}</a></li>
            <li v-if="this.repository"><b>CreatedAt:</b> {{this.repository.createdAt}}</li>
            <li><b>Description:</b> {{this.repository.description}}</li>
            <li><b>Is fork:</b> {{this.repository.isFork}}, Fork Count: {{this.repository.forkCount}}</li>
            <li><b>Is mirror:</b> {{this.repository.isMirror}}</li>
            <li v-if="this.repository.owner" class="content__list--short">
                <b>Link to clone repository:</b> 
                https://github.com/{{this.repository.owner.login}}/{{this.repository.name}}.git
            </li>
            <li class="content__list--short"><b>ID:</b> {{ $route.params.id }}</li>
        </ul>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    data(){
        return {
            repository: {},
            repoId: ''
        };
    },
     apollo: {
        repository: {
            query: gql`
                query repository($repoId: ID!) {
                    node(id: $repoId) {
                        ... on Repository {
                        name
                        nameWithOwner                        
                        url
                        createdAt
                        description
                        forkCount
                        isFork
                        isMirror
                        owner {
                            login
                        }
                        object {
                            ... on Commit {
                            id
                            history {
                                totalCount
                            }
                            }
                        }
                        }
                    }
                    }
                `, 
                variables() {
                    return {
                        repoId: this.$route.params.id
                    }
                },
                 update(data) {
                    return data.node;
                 }
        } 
    },
      methods: {
        searchText(text){   
            this.queryString = text;
        }
    }, 
    head(){
        return{
            title: `Repository ${this.repository.name}`,
            meta: [
                { charset: 'utf-8' },
                {                    
                    hid: 'description',
                    name: 'description',
                    content: "Repository Details"
                }
            ]
        }
    }
}
</script>

<style lang="scss">

@media screen and (max-width: 700px) {
    .content__list--short{
        width: 90%;
        display: block;
        overflow: auto;
    }   
}
 
</style>
