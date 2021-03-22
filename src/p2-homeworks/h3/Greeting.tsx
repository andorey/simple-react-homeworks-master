import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressInput, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? '' : s.error

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInput}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorField}>{error}</div>
        </div>
    )
}

export default Greeting
