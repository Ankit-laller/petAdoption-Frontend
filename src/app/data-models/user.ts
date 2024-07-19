export interface User{
    id:string,
    name:string,
    email:string,
    mobileNumber:String,
    city: string
}
export interface UserLoginResponse{
    success:boolean,
    message:string,
    token:string,
    user:User
}