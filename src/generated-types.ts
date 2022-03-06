import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  _id: Scalars['String'];
  links: Array<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateBookmarkInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  images: Array<Scalars['String']>;
  siteName: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: Bookmark;
  createUser: User;
  updateBookmark: Bookmark;
};


export type MutationCreateBookmarkArgs = {
  createBookmarkData: CreateBookmarkInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};


export type MutationUpdateBookmarkArgs = {
  updateBookmarkData: UpdateBookmarkInput;
};

export type Query = {
  __typename?: 'Query';
  bookmark: Bookmark;
  bookmarks: Array<Bookmark>;
  links: Array<Link>;
  user: User;
};


export type QueryBookmarkArgs = {
  _id: Scalars['String'];
};


export type QueryLinksArgs = {
  urls: Array<Scalars['String']>;
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type UpdateBookmarkInput = {
  _id: Scalars['String'];
  links: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, email: string } };

export type UpdateBookmarkMutationVariables = Exact<{
  updateBookmarkData: UpdateBookmarkInput;
}>;


export type UpdateBookmarkMutation = { __typename?: 'Mutation', updateBookmark: { __typename?: 'Bookmark', _id: string, name: string, userId: string, links: Array<string> } };

export type BookmarkQueryVariables = Exact<{
  _id: Scalars['String'];
}>;


export type BookmarkQuery = { __typename?: 'Query', bookmark: { __typename?: 'Bookmark', _id: string, name: string, userId: string, links: Array<string> } };

export type LinksQueryVariables = Exact<{
  urls: Array<Scalars['String']> | Scalars['String'];
}>;


export type LinksQuery = { __typename?: 'Query', links: Array<{ __typename?: 'Link', siteName: string, title: string, images: Array<string>, url: string }> };

export type BookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type BookmarksQuery = { __typename?: 'Query', bookmarks: Array<{ __typename?: 'Bookmark', _id: string, name: string, userId: string, links: Array<string> }> };

export type CreateBookmarkMutationVariables = Exact<{
  createBookmarkData: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark: { __typename?: 'Bookmark', _id: string, name: string, userId: string } };

export const CreateUserDocument = gql`
    mutation createUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBookmarkDocument = gql`
    mutation updateBookmark($updateBookmarkData: UpdateBookmarkInput!) {
  updateBookmark(updateBookmarkData: $updateBookmarkData) {
    _id
    name
    userId
    links
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBookmarkGQL extends Apollo.Mutation<UpdateBookmarkMutation, UpdateBookmarkMutationVariables> {
    document = UpdateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BookmarkDocument = gql`
    query bookmark($_id: String!) {
  bookmark(_id: $_id) {
    _id
    name
    userId
    links
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookmarkGQL extends Apollo.Query<BookmarkQuery, BookmarkQueryVariables> {
    document = BookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LinksDocument = gql`
    query links($urls: [String!]!) {
  links(urls: $urls) {
    siteName
    title
    images
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinksGQL extends Apollo.Query<LinksQuery, LinksQueryVariables> {
    document = LinksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BookmarksDocument = gql`
    query bookmarks {
  bookmarks {
    _id
    name
    userId
    links
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookmarksGQL extends Apollo.Query<BookmarksQuery, BookmarksQueryVariables> {
    document = BookmarksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBookmarkDocument = gql`
    mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {
  createBookmark(createBookmarkData: $createBookmarkData) {
    _id
    name
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookmarkGQL extends Apollo.Mutation<CreateBookmarkMutation, CreateBookmarkMutationVariables> {
    document = CreateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }