import React from 'react'
import {
    Navbar,
    NoteCard
} from '../../components'

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className='grid grid-cols-3 gap-4 mt-8'>
            <NoteCard
                title='Meeting on 7th April'
                date='3rd Apr 2024'
                content='Meeting with the team to discuss the project'
                tags={['work', 'meeting']}
                isPinned={true}
                onEdit={() => {}}
                onDelete={() => {}}
                onPinNote={() => {}}
            />
        </div>
      </div>
    </>
  )
}
