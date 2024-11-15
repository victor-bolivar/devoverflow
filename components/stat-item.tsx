import React from 'react'
import Image from 'next/image'

type StateItemType = 'Likes' | 'Answers' | 'Views'
type StateItemProps = {
  type: StateItemType
  value: number
}

const StatItem = ({ type, value }: StateItemProps) => {

  const getIcon = (type: StateItemType) => {
    switch (type) {
      case 'Likes':
        return '/like.svg'
      case 'Answers':
        return '/answers.svg'
      case 'Views':
        return '/view.svg'
    }
  }

  const convertViewsToString = (views: number) => {
    if (views > 1000) {
      return `${(views / 1000).toString()}k`
    }
    return views
  }

  return (
    <div className='flex items-center gap-[1px] text-sm'>
      <Image className='flex align-middle' src={getIcon(type)} alt={`Icon for ${type}`} width={16} height={16} />
      <span className='font-medium mr-[1px]'>{
        type == 'Views' ?
          convertViewsToString(value) :
          value
      }</span>
      <span className='dark:text-light-800'>{type}</span>
    </div>
  )
}

export default StatItem
