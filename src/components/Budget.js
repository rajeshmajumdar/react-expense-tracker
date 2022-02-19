import React, { useContext } from 'react';
import { TiEdit } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext)
    return (
        <div className='alert alert-secondary justify-content-between d-flex align-items-center'>
            <span>Budget: {budget}</span>
            <TiEdit size='1.5em'></TiEdit>
        </div>
    )
}

export default Budget;