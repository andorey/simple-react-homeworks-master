import React, { ChangeEvent } from 'react'
import css from './SuperCheckbox.module.css';

type PropsType = {
    event: (value: boolean) => void
    onChange: boolean
}

export function AlternativeSuperCheckbox(props: PropsType) {

    const check = (e: React.ChangeEvent<HTMLInputElement>) => props.event(e.currentTarget.checked)

    return (
        <label className={css.myBox}>
            <input type="checkbox" checked={props.onChange} onChange={check}/>
        </label>
    )
}

