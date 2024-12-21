import Cookie from 'js-cookie'
export default  function getToken() {
    const token =  Cookie.get('x-token') || null;
    return token;
}