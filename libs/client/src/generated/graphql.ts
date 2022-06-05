import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ClientIdResponse = {
  __typename?: 'ClientIdResponse';
  clientId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loginUser: UserLoginResponse;
  logoutUser: UserLogoutResponse;
};


export type MutationLoginUserArgs = {
  clientId?: InputMaybe<Scalars['Float']>;
  mail: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLogoutUserArgs = {
  clientId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser: UserGetCurrentResponse;
  generateClientId: ClientIdResponse;
  getTeacherList: TeacherGetListResponse;
};

export type Subscription = {
  __typename?: 'Subscription';
  listenAuthChanges: UserAuthSubscriptionResponse;
};


export type SubscriptionListenAuthChangesArgs = {
  clientId: Scalars['Float'];
};

export type TeacherDto = {
  __typename?: 'TeacherDto';
  firstname?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  workLoad?: Maybe<Scalars['Float']>;
};

export type TeacherGetListResponse = {
  __typename?: 'TeacherGetListResponse';
  teachers?: Maybe<Array<TeacherDto>>;
};

export type UserAuthSubscriptionResponse = {
  __typename?: 'UserAuthSubscriptionResponse';
  authenticated: Scalars['Boolean'];
};

export type UserDto = {
  __typename?: 'UserDto';
  id?: Maybe<Scalars['ID']>;
  mail?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserGetCurrentResponse = {
  __typename?: 'UserGetCurrentResponse';
  user?: Maybe<UserDto>;
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  accessToken?: Maybe<Scalars['String']>;
};

export type UserLogoutResponse = {
  __typename?: 'UserLogoutResponse';
  success: Scalars['Boolean'];
};

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String'];
  mail: Scalars['String'];
  clientId?: InputMaybe<Scalars['Float']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserLoginResponse', accessToken?: string | null } };

export type LogoutUserMutationVariables = Exact<{
  clientId?: InputMaybe<Scalars['Float']>;
}>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: { __typename?: 'UserLogoutResponse', success: boolean } };

export type GenerateClientIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateClientIdQuery = { __typename?: 'Query', generateClientId: { __typename?: 'ClientIdResponse', clientId: number } };

export type GetTeacherListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTeacherListQuery = { __typename?: 'Query', getTeacherList: { __typename?: 'TeacherGetListResponse', teachers?: Array<{ __typename?: 'TeacherDto', id: string, firstname?: string | null, lastname?: string | null, workLoad?: number | null, hireDate?: any | null }> | null } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'UserGetCurrentResponse', user?: { __typename?: 'UserDto', id?: string | null, username?: string | null, mail?: string | null } | null } };

export type ListenAuthChangesSubscriptionVariables = Exact<{
  clientId: Scalars['Float'];
}>;


export type ListenAuthChangesSubscription = { __typename?: 'Subscription', listenAuthChanges: { __typename?: 'UserAuthSubscriptionResponse', authenticated: boolean } };


export const LoginUserDocument = gql`
    mutation LoginUser($password: String!, $mail: String!, $clientId: Float) {
  loginUser(password: $password, mail: $mail, clientId: $clientId) {
    accessToken
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      password: // value for 'password'
 *      mail: // value for 'mail'
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser($clientId: Float) {
  logoutUser(clientId: $clientId) {
    success
  }
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const GenerateClientIdDocument = gql`
    query GenerateClientId {
  generateClientId {
    clientId
  }
}
    `;

/**
 * __useGenerateClientIdQuery__
 *
 * To run a query within a React component, call `useGenerateClientIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateClientIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateClientIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateClientIdQuery(baseOptions?: Apollo.QueryHookOptions<GenerateClientIdQuery, GenerateClientIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateClientIdQuery, GenerateClientIdQueryVariables>(GenerateClientIdDocument, options);
      }
export function useGenerateClientIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateClientIdQuery, GenerateClientIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateClientIdQuery, GenerateClientIdQueryVariables>(GenerateClientIdDocument, options);
        }
export type GenerateClientIdQueryHookResult = ReturnType<typeof useGenerateClientIdQuery>;
export type GenerateClientIdLazyQueryHookResult = ReturnType<typeof useGenerateClientIdLazyQuery>;
export type GenerateClientIdQueryResult = Apollo.QueryResult<GenerateClientIdQuery, GenerateClientIdQueryVariables>;
export const GetTeacherListDocument = gql`
    query GetTeacherList {
  getTeacherList {
    teachers {
      id
      firstname
      lastname
      workLoad
      hireDate
    }
  }
}
    `;

/**
 * __useGetTeacherListQuery__
 *
 * To run a query within a React component, call `useGetTeacherListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeacherListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeacherListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeacherListQuery(baseOptions?: Apollo.QueryHookOptions<GetTeacherListQuery, GetTeacherListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeacherListQuery, GetTeacherListQueryVariables>(GetTeacherListDocument, options);
      }
export function useGetTeacherListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeacherListQuery, GetTeacherListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeacherListQuery, GetTeacherListQueryVariables>(GetTeacherListDocument, options);
        }
export type GetTeacherListQueryHookResult = ReturnType<typeof useGetTeacherListQuery>;
export type GetTeacherListLazyQueryHookResult = ReturnType<typeof useGetTeacherListLazyQuery>;
export type GetTeacherListQueryResult = Apollo.QueryResult<GetTeacherListQuery, GetTeacherListQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    user {
      id
      username
      mail
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ListenAuthChangesDocument = gql`
    subscription ListenAuthChanges($clientId: Float!) {
  listenAuthChanges(clientId: $clientId) {
    authenticated
  }
}
    `;

/**
 * __useListenAuthChangesSubscription__
 *
 * To run a query within a React component, call `useListenAuthChangesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useListenAuthChangesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListenAuthChangesSubscription({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useListenAuthChangesSubscription(baseOptions: Apollo.SubscriptionHookOptions<ListenAuthChangesSubscription, ListenAuthChangesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ListenAuthChangesSubscription, ListenAuthChangesSubscriptionVariables>(ListenAuthChangesDocument, options);
      }
export type ListenAuthChangesSubscriptionHookResult = ReturnType<typeof useListenAuthChangesSubscription>;
export type ListenAuthChangesSubscriptionResult = Apollo.SubscriptionResult<ListenAuthChangesSubscription>;