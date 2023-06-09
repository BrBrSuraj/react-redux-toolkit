import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../config/baseUrl'
export const productApi = createApi({
    // reducerpath must be unique
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    tagTypes: [],
    // query and mutation
    // if api method is GET then use query({}) and for other use mutation({})
    endpoints: (builder) => ({
        index: builder.query({
            query: () => {
                return ({
                    url: "/productss",
                    method: "GET"
                })
            }
        }),
        delete: (builder) => builder.mutation({
            query: (id) => {
                return ({
                    url: `/products/${id}`,
                    method: "DELETE"
                })
            }
        }),
        show: (builder) => builder.query({
            query: (id) => {
                return ({
                    url: `/products/${id}`,
                    method: "GET"
                })
            }
        }),

        create: (builder) => builder.mutation({
            query: (body) => {
                return ({
                    url: "/products",
                    method: "POST",
                    body: body,
                })
            }
        })

    })
})

export const { useIndexQuery, useDeleteMutation, useShowQuery, useCreateMutation } = productApi