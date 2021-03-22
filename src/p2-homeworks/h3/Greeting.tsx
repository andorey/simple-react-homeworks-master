import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: UserType[]
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressInput, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? '' : s.error

    const listNames = totalUsers.map(el => <li>{el.name}</li>)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInput}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers.length}</span>
            <div className={s.errorField}>{error}</div>
            <ul>{listNames}</ul>
        </div>
    )
}

export default Greeting
