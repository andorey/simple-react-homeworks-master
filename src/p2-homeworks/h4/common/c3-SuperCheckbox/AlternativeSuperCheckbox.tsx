import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import css from './SuperCheckbox.module.css';

type DefaultInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type PropsType = DefaultInputType & {
    onChangeChecked?: (checked: boolean) => void
}

export const AlternativeSuperCheckbox: React.FC<PropsType> = ({
        type, onChange, onChangeChecked, className, children, ...restProps
    }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    return (
        <label className={css.myBox}>
            <input
                type='checkbox'
                onChange={onChangeCallback}
                {...restProps}  />
        </label>
    )
}
