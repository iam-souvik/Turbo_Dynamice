import Cookies from "js-cookie";

const removeCookie=(cookiename)=>{
   return Cookies.remove(cookiename);
}

export default removeCookie;