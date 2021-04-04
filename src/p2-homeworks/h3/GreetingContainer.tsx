import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any+
    const [error, setError] = useState<string>('') // need to fix any+

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any+
        if (e.currentTarget.value.trim() !== "") {
            setName(e.currentTarget.value.trim())
            setError("")
        } else {
            setError("The name cannot start with a space")
            setName("")
        }// need to fix
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello ${name} !`)
            setName("")
        }                // need to fix+
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter") {
            addUser()
        }}
    const totalUsers = users.length // need to fix+

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPress={onKeyPressAddTask}
        />
    )
}

export default GreetingContainer
