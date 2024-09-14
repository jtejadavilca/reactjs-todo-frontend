import React from 'react'
import { Navbar } from '../../components'

export const AddEditNotes = () => {
  return (
    <>
        <div>
            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-950 outline-none"
                    placeholder='Go To Gym At 6 PM'
                />
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">CONTENT</label>
                <textarea
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                    placeholder='Write your note here...'
                    rows={10}
                />
            </div>

            <div className="mt-3">
                <label className="input-label">TAGS</label>
                <input
                    type="text"
                    className="text-sm text-slate-950 outline-none"
                    placeholder='work, meeting'
                />
            </div>

            <button className="btn-primary font-medium mt-5 p-3" onClick={() => {}}>
                ADD NOTE
            </button>

        </div>
    </>
  )
}
