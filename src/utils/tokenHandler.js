export const storageToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    console.log({token});
    return token;
}

export const removeToken = () => {
    localStorage.clear();
}

export const isThereValidToken = () => {
    const token = localStorage.getItem('token');
    return !!token && !isExpiredToken(token);
}


export const getUserInfoFromToken = () => {
    const token = getToken();
    return !token ? null : parsedToken(token);
}

export const logout = () => {
    removeToken();
}

const isExpiredToken = (token) => {
    const { exp } = parsedToken(token);
    return Date.now() >= exp * 1000;
}

const parsedToken = (token) => {
    const payload = token.split('.')[1];
    const data = atob(payload);
    return JSON.parse(data);
}

