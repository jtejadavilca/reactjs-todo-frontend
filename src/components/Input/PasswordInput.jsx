import React, { useState } from 'react';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const PasswordInput = ({value, onChange, placeholder, refInput}) => {

    const [isShownPassword, setIsShownPassword] = useState(false);

    const togglePasswordVisiblity = () => {
        setIsShownPassword(!isShownPassword);
    }

    return (
        <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
            <input
                ref={refInput}
                value={value}
                onChange={onChange}
                type={isShownPassword ? "text": "password"}
                placeholder={placeholder || "Password"}
                className="w-full text-sm bg-transparent py-3  rounded outline-none" />

            {
                    isShownPassword
                    ?
                        <FaRegEye
                            size={22}
                            display={'none'}
                            className='text-primary cursor-pointer'
                            onClick={togglePasswordVisiblity}
                        />
                    :
                        <FaRegEyeSlash
                            size={22}
                            display={'none'}
                            className='text-slate-400 cursor-pointer'
                            onClick={togglePasswordVisiblity}
                        />
                    }
                
        </div>
    )
}