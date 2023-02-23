import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_REGISTER_FAILURE,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS
} from "./actionType"
import setCookie from "../../cookies/setcookies";
import removeCookie from "../../cookies/removecookies";


const initialState = {
    userLogin: { loading: false, error: false, message: "" },
    userRegister: { loading: false, error: false, message: "" },
    userLogout: { loading: false, error: false, message: "" },
    data: {
        message:"",
        isAuthenticated: false,
        token:"" || null,
        user:{}
    },
};

export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case AUTH_LOGIN_REQUEST:
            return { ...state, userLogin: { loading: true, error: false } };
        case AUTH_LOGIN_SUCCESS:
            removeCookie("token");
            removeCookie("auth");
            removeCookie("name");
            setCookie("token",JSON.stringify(payload.token));
            setCookie("auth",(true));
            setCookie("name",(JSON.stringify(payload.user.name)));
            return {
                ...state,
                userLogin: { loading: false, error: false, message: payload.message },
                data: {
                    message:payload.message,
                    isAuthenticated: true,
                    token:payload.token,
                    user:payload.user
                }
            };
            
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                userLogin: { loading: false, error: true, message: payload.message },
            };
    
        case AUTH_REGISTER_REQUEST:
            return {
                ...state,
                userRegister: { loading: true, error: false },
            };
        case AUTH_REGISTER_SUCCESS:
            return {
                ...state,
                userRegister: { loading: false, error: false, message: payload.message },
            };
        case AUTH_REGISTER_FAILURE:
            return {
                ...state,
                userRegister: { loading: false, error: true, message: payload.message },
            };
            case AUTH_LOGOUT:
                 removeCookie("token");
                 removeCookie("auth");
                //setCookie("auth",(false));
                 removeCookie("name");
                return {
                    ...state,
                    userLogout: { loading: false, error: false, message: payload },
                    data: {
                        message:payload.message,
                        isAuthenticated: false,
                        token:null,
                        user:{}
                    }
                };

        default:
            return state;
    }
}