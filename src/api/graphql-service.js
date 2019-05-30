import gql from 'graphql-tag';
import graphqlClient from './graphql';

export default {

    async getNotesList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        notes {
                            ${params}
                        }
                    }
                `
            });
            success(response);
        } catch (error){
            failure(error);
        }
    },

    async addNote(variables, success, failure){
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`mutation($name: String!,
                     $text: String!){
                    addNote(name: $name, 
                        text: $text){
                        _id
                        name
                        text
                    }    
                }`,
                variables,
            });
            success(response);

        } catch (error){
            failure(error);
        }
    },

    async deleteNote(_id, success, failure){
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`
                mutation($_id: String!){
                    deleteNote(_id: $_id){
                        _id
                    }
                }
                `,
                variables: {
                    _id
                }
            });
            success(response);
        } catch (error) {
            failure(error);
        }
    },
    async saveNote(variables, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`
                mutation($_id: String!, $name: String!, $text: String!){
                    editNote(_id: $_id, name: $name, text: $text){
                        _id
                    }
                }
                `,
                variables
            });
            success(response);
        } catch (error){
            failure(error);
        }
    },
}
