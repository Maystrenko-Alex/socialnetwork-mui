import React, { useCallback } from 'react';
import  Post  from './Post/Post';
import { ProfileStateType, addNewPostAC, changeNewPostTextAC } from '../../../redux/profileReducer';
import { AnyAction, Dispatch } from 'redux';
import  MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
    profileData: ProfileStateType
    dispatch: Dispatch<AnyAction>
}

export const MyPostsContainer = ({ profileData, dispatch }: MyPostsContainerPropsType) => {

    const addNewPost = useCallback(() => dispatch(addNewPostAC()),[dispatch]);
    const changeTextPost = useCallback((text: string) => dispatch(changeNewPostTextAC(text)), [dispatch])

    const postsList = profileData.posts.map(p => <Post key={p.id} title={p.post} likesCount={p.likesCount} />)
    return (
        <MyPosts
            newTextPost={profileData.newTextPost}
            postsList={postsList}
            addNewPost={addNewPost}
            changeTextPost={changeTextPost}
        />
    );
};
