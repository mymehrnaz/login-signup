import React from "react";

function Dashboard(){
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    return(
        <div className="container">
            <h1>Dashboard</h1>
            {user ? (
                <p>Hi{user.username}!Welcome to Dashbourd</p>
            ) : (
                <p>You didn't enter</p>
            )}
        </div>
    );
}
export default Dashboard;