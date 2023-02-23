import Cookies from "js-cookie";


const setCookie=(cookiename,value)=>{
    Cookies.set(cookiename,value,{
        expires:1,
        path: '/',
       secure:true,
       sameSite:"strict"
    });
}

export default setCookie;