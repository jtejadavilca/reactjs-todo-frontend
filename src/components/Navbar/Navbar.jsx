import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ProfileInfo, SearchBar } from '../';
import { isThereValidToken, removeToken } from '../../utils/tokenHandler';

export const Navbar = ({userInfo}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!isThereValidToken()) {
            navigate('/login');
        }
    }, [navigate]);

    const onLogout = () => {
        if(isThereValidToken()) {
            removeToken();
        }
        navigate('/login');
    }


    const navbarStyes = 'bg-white flex items-center justify-between px-6 py-2 drop-shadow'
    const titleStyles = 'text-xl font-medium text-black py-2';
    return (
        <div className={navbarStyes}>
            <h2 className={titleStyles}>
                Notes
            </h2>

            <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                handleSearch={() => console.log('search')}
                onClearSearch={() => setSearchQuery('')}
            />

            <ProfileInfo onLogout={onLogout} userInfo={userInfo} />
        </div>
    )
}
