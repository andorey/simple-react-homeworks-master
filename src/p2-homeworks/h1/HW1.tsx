import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const alternativeData = {
    avatar: 'https://i.pinimg.com/236x/d0/88/4e/d0884ecf5108469b200882d123d0c216.jpg',
    name: 'Spring Flowers',
    message: 'I will come for you',
    time: '23:59',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeData.avatar}
                name={alternativeData.name}
                message={alternativeData.message}
                time={alternativeData.time}
            />
            <hr/>
        </div>
    )
}


export default HW1
