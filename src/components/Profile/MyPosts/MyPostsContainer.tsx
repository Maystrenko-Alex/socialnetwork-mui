import React from 'react';
import  Post  from './Post/Post';
import  MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../../redux/redux-store';
import {  addNewPostAC, changeNewPostTextAC } from '../../../redux/profileReducer';
import {  Dispatch } from 'redux';

// type MyPostsContainerPropsType = {
//     profileData: ProfileStateType
//     dispatch: Dispatch<AnyAction>
// }

// const MyPostsContainer = ({ profileData, dispatch }: MyPostsContainerPropsType) => {

//     const addNewPost = useCallback(() => dispatch(addNewPostAC()),[dispatch]);
//     const changeTextPost = useCallback((text: string) => dispatch(changeNewPostTextAC(text)), [dispatch])

//     const postsList = profileData.posts.map(p => <Post key={p.id} title={p.post} likesCount={p.likesCount} />)
//     return (
//         <MyPosts
//             newTextPost={profileData.newTextPost}
//             postsList={postsList}
//             addNewPost={addNewPost}
//             changeTextPost={changeTextPost}
//         />
//     );
// };

type MapStateToPropsType = {
    newTextPost: string
    postsList: React.ReactNode
}
const mapStateToProps = (store: AppRootStateType): MapStateToPropsType => ({
    newTextPost: store.profile.newTextPost,
    postsList: store.profile.posts.map(p => <Post key={p.id} title={p.post} likesCount={p.likesCount} />)
})
type MapDispatchToProps = {
    addNewPost: () => void
    changeTextPost: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    addNewPost: () => dispatch(addNewPostAC()),
    changeTextPost: (text: string) => dispatch(changeNewPostTextAC(text))
})
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;