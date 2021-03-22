import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (value: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setName(e.currentTarget.value.trim())
    }
    const addUser = () => {
        if (name) {
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName('')
        } else {
            setError('You need to enter a name')
        }
    }

    const onKeyPressInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            setName(e.currentTarget.value.trim())
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName('')
        } else {
            setError('Field is required')
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={users}
            onKeyPressInput={onKeyPressInput}
        />
    )
}

export default GreetingContainer
