import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import css from './SuperCheckbox.module.css';

type DefaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputType & {
    onChangeChecked?: (checked: boolean) => void
}

export function AlternativeSuperCheckbox( { type, onChange, onChangeChecked, className, children,
                                             ...restProps }:PropsType ) {

    const chackedCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={css.myBox}>
            <input type='checkbox'
                   onChange={chackedCallback}
                   {...restProps}
            />
        </label>
    )
}
