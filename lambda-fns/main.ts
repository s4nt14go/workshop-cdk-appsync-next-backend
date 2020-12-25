import { AppSyncResolverHandler } from 'aws-lambda';
import createPost from './createPost'
import deletePost from './deletePost'
import getPostById from './getPostById'
import listPosts from './listPosts'
import updatePost from './updatePost'
import postsByUsername from './postsByUsername'
import Post from './Post'


/* interface AppSyncEvent {        Using AppSyncResolverHandler instead
  info: {
    fieldName: string
  },
  arguments: {
    postId: string,
    post: Post
  },
  identity: {
    username: string
  }
  info: {
    selectionSetList: string[];
    selectionSetGraphQL: string;
    parentTypeName: string;
    fieldName: string;
    variables: { [key: string]: any };
  };
};*/

export const handler: AppSyncResolverHandler<{
  postId: string,
  post: Post
}, any> = async (event, context) => {
  console.log('event', event);
  console.log('context', context);
  console.log('process', process);
  console.log('process.env', process.env);

  const username = event.identity?.username;
  switch (event.info.fieldName) {
    case "getPostById":
      return await getPostById(event.arguments.postId)
    case "createPost": {
      if (username == undefined) return console.log('No username');
      return await createPost(event.arguments.post, username)
    }
    case "listPosts":
      return await listPosts()
    case "deletePost": {
      if (username == undefined) return console.log('No username');
      return await deletePost(event.arguments.postId, username)
    }
    case "updatePost": {
      if (username == undefined) return console.log('No username');
      return await updatePost(event.arguments.post, username)
    }
    case "postsByUsername": {
      if (username == undefined) return console.log('No username');
      return await postsByUsername(username)
    }
    default:
      return null
  }
}
