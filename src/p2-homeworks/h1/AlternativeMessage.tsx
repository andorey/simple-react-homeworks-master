import React from 'react'

function AlternativeMessage(props: any) {
    return (
        <div>
            <div><img src={props.avatar} alt="avatar"/></div>
            <span>{props.name}</span>
            <div>{props.message}</div>
            <span>{props.time}</span>
        </div>
    )
}

export default AlternativeMessage
