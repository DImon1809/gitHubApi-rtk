import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IServerUsers, IUser, IRepos } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], string>({
      query: (name: string) => ({
        url: "/search/users",
        params: {
          q: name,
          per_page: 10,
        },
      }),

      transformResponse: (response: IServerUsers) => response.items,
    }),

    getRepos: builder.query<IRepos[], string>({
      query: (login: string) => ({
        url: `/users/${login}/repos`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetReposQuery } = githubApi;
