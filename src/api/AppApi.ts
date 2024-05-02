import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const AppApi = createApi({
    reducerPath: 'app',
    tagTypes: ['Create', 'Update', 'Delete'],
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        prepareHeaders(headers, api) {
            headers.set('Cotent-type', 'application/json')
        },
    }),
    endpoints: (builder) => ({
        findAll: builder.query<void, void>({
            query: () => '/',
            providesTags: ['Create', 'Update', 'Delete']
        }),
        create: builder.mutation<void, void>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Create']
        }),
        update: builder.mutation<void, void>({
            query: () => ({
                url: `/`,
                method: 'PUT',
                body: { },
            }),
            invalidatesTags: ['Update']
        }),
        delete: builder.mutation<void, void>({
            query: (id) => ({
                url: `/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Delete']
        }),
    })   
});

export const { useFindAllQuery, useCreateMutation, useUpdateMutation, useDeleteMutation } = AppApi;