import React from 'react';
import { useParams } from 'react-router-dom';
function Profile() {
    let { nickname } = useParams();
    console.log(nickname);
    return <h1>Profile Page</h1>;
}

export default Profile;
