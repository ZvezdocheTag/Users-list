import React, { Component } from 'react';

const UserCard = ({item, handleRemoveUser, handleChangeUser }) => (
    <li className="user">
        <div className="user__name">
        <span className="user__label">name</span>
        {item.name}
        </div>
        <div className="user__bdate">
        <span className="user__label">bdate</span>
        {item.bdate}
        </div>
        <div className="user__adress">
        <span className="user__label">adress</span>
        {item.adress}
        </div>
        <div className="user__city">
        <span className="user__label">city</span>
        {item.adress}
        </div>
        <div className="user__phone">
        <span className="user__label">phone</span>
        {item.phone}
        </div>
        <div className="controls">
        <a href="" 
        className="controls--remove" 
        onClick={handleRemoveUser}>X</a>
        <a href="" 
        className="controls--change" 
        onClick={handleChangeUser}>Y</a>
        </div>
    </li>
)

export default UserCard;