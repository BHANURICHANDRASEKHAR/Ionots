import Cookie from 'js-cookie'
export default function getToken()
{
    return Cookie.get('x-token') || null; 
}