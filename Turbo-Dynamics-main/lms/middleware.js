import { NextResponse } from "next/dist/server/web/spec-extension/response";
import getCookie from "./cookies/getcookies";


export default function middleware(req){
   let verify = req.cookies.get("token");
   let url=req.url;

    if(!verify && url.includes("/lectures") ){
      return NextResponse.redirect("http://localhost:3000/user/login")
    }else if(!verify && url.includes("/ticket")){
        return NextResponse.redirect("http://localhost:3000/user/login")
    }
}