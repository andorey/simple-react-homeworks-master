import React from 'react';
import css from './Message.module.css';

type messageDataType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function AlternativeMessage(props: messageDataType) {
    return (
        <div className={css.message}>
            <img src={props.avatar} alt={'avatar'} className={css.avatar}/>

            <div className={css.angle} />

            <div className={css.content}>
                <div className={css.name}>{props.name}</div>
                <div className={css.text}>{props.message}</div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
