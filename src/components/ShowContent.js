import React from 'react'
import MenuCard from './MenuCard'

const ShowContent = ({menu}) => {
  return (
    <div className="p-5 mx-[250px]">
      <div className=" items-center justify-between">
        <h3 className="font-bold text-lg cursor-pointer">
          {menu?.title} ({menu?.itemCards?.length})
        </h3>
        <div className="flex flex-col justify-evenly">
        {menu?.itemCards?.map((item) => (
        <MenuCard key={item.id} item={item.card.info} />
        ))}
        </div>
</div></div>
  )
}

export default ShowContent