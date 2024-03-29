import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/Spin-1s-200px.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'
import RefreshIcon from '@mui/icons-material/Refresh';

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Suggestions for you</h5>
                {
                    !suggestions.loading &&
                    <RefreshIcon className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
                <a href="https://www.youtube.com/watch?v=fPdMSCh0yIQ" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                    https://www.youtube.com/watch?v=fPdMSCh0yIQ
                </a>
                <small className="d-block">
                    Welcome to our community
                </small>

                <small>
                   &copy; 2023 SocialSync By 💖
                </small>
            </div>

        </div>
    )
}

export default RightSideBar