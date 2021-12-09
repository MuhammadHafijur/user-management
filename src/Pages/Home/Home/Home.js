import React from 'react';
import AddUser from '../AddUser/AddUser';
import Users from '../Users/Users';

const Home = () => {
    return (
        <div>
            <AddUser></AddUser>
            <Users></Users>
        </div>
    );
};

export default Home;