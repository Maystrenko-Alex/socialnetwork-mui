import React from 'react';
import { UserType } from '../../../redux/userReducer';
import defaultAva from './../../../assets/defaultAva.jpg';

type UserPropsType = {
user: UserType
followHandler: () => void
}
// export const User: FC<UserPropsType> = ({user, followHandler, ...restProps}) => {
//     return (
//         <div key={user.id} style={{ display: 'flex', flexDirection: 'row' }}>
//                 <div >
//                     <div>
//                         <img src={user.photos.small || defaultAva} width={'30px'} alt={'#'} />
//                     </div>
//                     <button onClick={followHandler}>{user.followed ? 'unfollow' : 'follow'}</button>
//                 </div>
//                 <div>
//                     <div>{user.name}</div>
//                     <div>{user.status || 'no status'}</div>
//                 </div>
//             </div>
//     );
// };

export class User extends React.Component<UserPropsType> {
    
    render() {
        return <div key={this.props.user.id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div >
                    <div>
                        <img src={this.props.user.photos.small || defaultAva} width={'30px'} alt={'#'} />
                    </div>
                    <button onClick={this.props.followHandler}>{this.props.user.followed ? 'unfollow' : 'follow'}</button>
                </div>
                <div>
                    <div>{this.props.user.name}</div>
                    <div>{this.props.user.status || 'no status'}</div>
                </div>
            </div>
    }
}