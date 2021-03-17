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

    // const setAll = () => props.setFilter('all')
    // const setHigh = () => props.setFilter('high')
    // const setMiddle = () => props.setFilter('middle')
    // const setLow = () => props.setFilter('low')

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        props.setFilter( e.currentTarget.value as FilterType )
    }

    // const onAll = props.filter === 'all' ? css.active : ''
    // const onHigh = props.filter === 'high' ? css.active : ''
    // const onMiddle = props.filter === 'middle' ? css.active : ''
    // const onLow = props.filter === 'low' ? css.active : ''
    const setClass = (filter: FilterType) =>{
        return props.filter === filter ? css.active : ''
    }

    return (
        <div>

            {mappedAffairs}
            {/*<div className={css.button}>*/}
            {/*    <button onClick={setAll} className={onAll}>All</button>*/}
            {/*    <button onClick={setHigh} className={onHigh}>High</button>*/}
            {/*    <button onClick={setMiddle} className={onMiddle}>Middle</button>*/}
            {/*    <button onClick={setLow} className={onLow}>Low</button>*/}
            {/*</div>*/}
            <div className={css.button}>
                <button onClick={set} className={setClass('all')} value={'all'}>All</button>
                <button onClick={set} className={setClass('high')} value={'high'}>High</button>
                <button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>
                <button onClick={set} className={setClass('low')} value={'low'}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
