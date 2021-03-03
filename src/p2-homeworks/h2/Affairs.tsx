import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2';
import css from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((el: AffairType) => (
        <Affair // should work
            key={el._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={el}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    // const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    //     props.setFilter(e.currentTarget.value as FilterType)
    // }

    const onAll = css.button + ' ' + (props.filter === 'all' ? css.active : '')
    const onHigh = css.button + ' ' + (props.filter === 'high' ? css.active : '')
    const onMiddle = css.button + ' ' + (props.filter === 'middle' ? css.active : '')
    const onLow = css.button + ' ' + (props.filter === 'low' ? css.active : '')
    // const setClass = (filter: FilterType) => {
    //     return css.button + (props.filter === filter ? ' ' + css.active : '')
    // }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={onAll}>All</button>
            <button onClick={setHigh} className={onHigh}>High</button>
            <button onClick={setMiddle} className={onMiddle}>Middle</button>
            <button onClick={setLow} className={onLow}>Low</button>

            {/*<button onClick={set} className={setClass('all')} value={onAll}>All</button>*/}
            {/*<button onClick={set} className={setClass('high')} value={onHigh}>High</button>*/}
            {/*<button onClick={set} className={setClass('middle')} value={onMiddle}>Middle</button>*/}
            {/*<button onClick={set} className={setClass('low')} value={onLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
