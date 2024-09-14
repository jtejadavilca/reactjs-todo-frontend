import React from 'react';
import { getNameInitials } from '../../utils/helper';

export const ProfileInfo = ({onLogout}) => {

    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
                {getNameInitials('Juan Ruiz Perez')}
            </div>

            <div>
                <div className="text-sm font-medium">William</div>
                <button className="text-sm text-slate-700 underline" onClick={onLogout}>Logout</button>
            </div>
        </div>
  )
}
