import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any+
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any+
    addUser: () => void // need to fix any+
    error: string // need to fix any+
    totalUsers: number // need to fix any+
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}
// почитать про флексбокс
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)+

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress} className={inputClass}/>
            <button className={inputClass} onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errortext}>{error}</div>
        </div>
    )
}

export default Greeting
