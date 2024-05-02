import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type PostType = {
    id: number;
    author: string;
    content: string
    createdAt: string;
    updatedAt: string;
}

export const postsApi = createApi({
    reducerPath: 'post',
    tagTypes: ['Create', 'Update', 'Delete'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders(headers, api) {
            headers.set('Cotent-type', 'application/json')
        },
    }),
    endpoints: (builder) => ({
        findAllPost: builder.query<PostType[], void>({
            query: () => '/',
            providesTags: ['Create', 'Update', 'Delete'] // Se usa para eliminar el cache de este query y que vuelva a llamarse
        }),
        createPost: builder.mutation<PostType, { author: string; content: string}>({
            query: (body) => ({
                url: '/post',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Create'] // se usa para invalidar el cache de otros queries
        }),
        updatePost: builder.mutation<PostType, { id: number, content: string }>({
            query: ({ id, content }) => ({
                url: `/post/${id}`,
                method: 'PUT',
                body: { content },
            }),
            invalidatesTags: ['Update'] // se usa para invalidar el cache de otros queries
        }),
        deletePost: builder.mutation<string, number>({
            query: (id) => ({
                url: `/post/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Delete'] // se usa para invalidar el cache de otros queries
        }),
    })   
});

export const { useFindAllPostQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi;