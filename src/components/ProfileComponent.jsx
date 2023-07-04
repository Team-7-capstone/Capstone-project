import React, {useState} from "react";
import ProfileEdit from "./common/ProfileEdit";
import ProfileCard from "./common/ProfileCard"
// import ProfileEdit

const ProfileComponent = ({ currentUser }) => {
    const[isEdit, setIsEdit] = useState(false)

    const onEdit = () => {
        setIsEdit(!isEdit)
    }
    return(
        <div>
            { isEdit ? (
            <ProfileEdit onEdit={onEdit} currentUser={currentUser}/> 
            ) : (
                <ProfileCard currentUser={currentUser} onEdit = {onEdit}/>
            )} 
        </div>
    )
}

export default ProfileComponent