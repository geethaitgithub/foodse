import React from 'react'

const MealItemInput = ({menuItem}) => {
  return (
    <div className='flex flex-col pt-14'>
      <div className='flex'>
      <label className='font-bold mr-4 ' htmlFor={'amount_' + menuItem.id}>{'Amount'}</label>
      <input  
       
          id= {'amount_' + menuItem.id}
          type= {'number'}
          min= {1}
          max= {100}
          step= {'1'}
          defaultValue= {'1'}
          className= 'flex mb-[0.5rem] w-[3rem] border border-slate-500 rounded-lg pl-2'
          />
        </div>
        <button className='border border-red-500 ml-4 rounded-3xl w-[7rem]' >+ Add</button>
      
      </div>
  )
}

export default MealItemInput