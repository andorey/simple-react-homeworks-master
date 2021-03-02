import React from 'react'

type messageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function AlternativeMessage(props: messageDataType) {
    return (
        <div className='message'>
            <div><img src={props.avatar} alt="avatar"/></div>
            <span>{props.name}</span>
            <div>{props.message}</div>
            <span>{props.time}</span>
        </div>
    )
}

export default AlternativeMessage
