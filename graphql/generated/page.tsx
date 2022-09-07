/* eslint-disable react/display-name */
import * as Types from "../generated/schema";

import * as Operations from "../generated/schema";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { QueryHookOptions, useQuery } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type React from "react";
import { getApolloClient, ApolloClientContext } from "../withApollo";

export async function getServerPageGetBlogDetail(
  options: Omit<
    Apollo.QueryOptions<Types.GetBlogDetailQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetBlogDetailQuery>({
    ...options,
    query: Operations.GetBlogDetailDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetBlogDetail = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetBlogDetailQuery,
    Types.GetBlogDetailQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetBlogDetailDocument, options);
};
export type PageGetBlogDetailComp = React.FC<{
  data?: Types.GetBlogDetailQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetBlogDetail =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetBlogDetailQuery,
      Types.GetBlogDetailQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetBlogDetailComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetBlogDetailDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetBlogDetail = {
  getServerPage: getServerPageGetBlogDetail,
  withPage: withPageGetBlogDetail,
  usePage: useGetBlogDetail,
};
export async function getServerPageGetBlogs(
  options: Omit<Apollo.QueryOptions<Types.GetBlogsQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetBlogsQuery>({
    ...options,
    query: Operations.GetBlogsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetBlogs = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetBlogsQuery, Types.GetBlogsQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetBlogsDocument, options);
};
export type PageGetBlogsComp = React.FC<{
  data?: Types.GetBlogsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetBlogs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetBlogsQuery, Types.GetBlogsQueryVariables>
  ) =>
  (WrappedComponent: PageGetBlogsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetBlogsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetBlogs = {
  getServerPage: getServerPageGetBlogs,
  withPage: withPageGetBlogs,
  usePage: useGetBlogs,
};
export async function getServerPageGetCategories(
  options: Omit<
    Apollo.QueryOptions<Types.GetCategoriesQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCategoriesQuery>({
    ...options,
    query: Operations.GetCategoriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetCategories = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetCategoriesQuery,
    Types.GetCategoriesQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCategoriesDocument, options);
};
export type PageGetCategoriesComp = React.FC<{
  data?: Types.GetCategoriesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCategories =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetCategoriesQuery,
      Types.GetCategoriesQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetCategoriesComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetCategoriesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetCategories = {
  getServerPage: getServerPageGetCategories,
  withPage: withPageGetCategories,
  usePage: useGetCategories,
};
export async function getServerPageGetCategoryBlogs(
  options: Omit<
    Apollo.QueryOptions<Types.GetCategoryBlogsQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCategoryBlogsQuery>({
    ...options,
    query: Operations.GetCategoryBlogsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetCategoryBlogs = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetCategoryBlogsQuery,
    Types.GetCategoryBlogsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCategoryBlogsDocument, options);
};
export type PageGetCategoryBlogsComp = React.FC<{
  data?: Types.GetCategoryBlogsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetCategoryBlogs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetCategoryBlogsQuery,
      Types.GetCategoryBlogsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetCategoryBlogsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetCategoryBlogsDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetCategoryBlogs = {
  getServerPage: getServerPageGetCategoryBlogs,
  withPage: withPageGetCategoryBlogs,
  usePage: useGetCategoryBlogs,
};
export async function getServerPageGetComments(
  options: Omit<Apollo.QueryOptions<Types.GetCommentsQueryVariables>, "query">,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetCommentsQuery>({
    ...options,
    query: Operations.GetCommentsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetComments = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetCommentsQuery, Types.GetCommentsQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCommentsDocument, options);
};
export type PageGetCommentsComp = React.FC<{
  data?: Types.GetCommentsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetComments =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetCommentsQuery,
      Types.GetCommentsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetCommentsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetCommentsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetComments = {
  getServerPage: getServerPageGetComments,
  withPage: withPageGetComments,
  usePage: useGetComments,
};
export async function getServerPageGetRecentBlogs(
  options: Omit<
    Apollo.QueryOptions<Types.GetRecentBlogsQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetRecentBlogsQuery>({
    ...options,
    query: Operations.GetRecentBlogsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetRecentBlogs = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetRecentBlogsQuery,
    Types.GetRecentBlogsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetRecentBlogsDocument, options);
};
export type PageGetRecentBlogsComp = React.FC<{
  data?: Types.GetRecentBlogsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetRecentBlogs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetRecentBlogsQuery,
      Types.GetRecentBlogsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetRecentBlogsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetRecentBlogsDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetRecentBlogs = {
  getServerPage: getServerPageGetRecentBlogs,
  withPage: withPageGetRecentBlogs,
  usePage: useGetRecentBlogs,
};
export async function getServerPageGetSimilarBlogs(
  options: Omit<
    Apollo.QueryOptions<Types.GetSimilarBlogsQueryVariables>,
    "query"
  >,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetSimilarBlogsQuery>({
    ...options,
    query: Operations.GetSimilarBlogsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetSimilarBlogs = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetSimilarBlogsQuery,
    Types.GetSimilarBlogsQueryVariables
  >
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetSimilarBlogsDocument, options);
};
export type PageGetSimilarBlogsComp = React.FC<{
  data?: Types.GetSimilarBlogsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetSimilarBlogs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<
      Types.GetSimilarBlogsQuery,
      Types.GetSimilarBlogsQueryVariables
    >
  ) =>
  (WrappedComponent: PageGetSimilarBlogsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(
      Operations.GetSimilarBlogsDocument,
      options
    );
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetSimilarBlogs = {
  getServerPage: getServerPageGetSimilarBlogs,
  withPage: withPageGetSimilarBlogs,
  usePage: useGetSimilarBlogs,
};
