import React from 'react'

type messageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: messageDataType) {
    return (
        <div>
            <div><img src={props.avatar} alt="avatar"/></div>
            <span>{props.name}</span>
            <div>{props.message}</div>
            <span>{props.time}</span>
        </div>
    )
}

export default Message
