export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const getNameInitials = (name) => {
    if(!name) return '?';
    const tokens = name.split(' ');
    const count = tokens.length > 2 ? 2 : tokens.length;
    return tokens.slice(0, count).map((n) => n[0]).join('');
}