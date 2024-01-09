import { authType } from "../../frameWorks/database/mongodb/repositories/userReposioryMongo";
import { userInterface } from "../../types/authInterface";
import { authServiceInterfaceType } from "../services/authServiesInterface";
import AppError from "../../utils/appErrors";
import { HttpStatus } from "../../types/httpStatus";
import { mailServiceRepoInterface } from "../services/authmailserviceInterface";

export const addUser = async(
    userData: userInterface,
    userDbRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>,
    mailServices: ReturnType<mailServiceRepoInterface>
    )=>{
        userData.email = userData.email?.toLowerCase()
        userData.password  = await authServices.encriptPassword(userData.password)
        userData.confirmPassword = await authServices.encriptPassword(userData.confirmPassword);
        const user = await userDbRepository.doSignup(userData)
        
        mailServices.mailMessages(userData.email as string)
        return {
            user,
        }
}

export const googleLogin = async(
    email:string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
) =>{
    email = email.toLowerCase()
    const user: userInterface | null = await userDBRepository.googleLogin(email)
    if(!user) {
        throw new AppError ("this user does't exist", HttpStatus.UNAUTHORIZED)
    }else{
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        console.log(refreshToken, "find token");
        
        return {user, token, refreshToken }
    }
}

export const otpLogin = async(
    phone:string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
)=>{
    const user : userInterface | null = await userDBRepository.otpLogin(phone)
    if(!user) {
        throw new AppError ("this user does't exist ", HttpStatus.UNAUTHORIZED)
    }else{
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        return {user, token, refreshToken}
    }
}


export const isValidEmail = async(
    email: string , 
    password: string,
    userDBRepository: ReturnType<authType>,
    authServices: ReturnType<authServiceInterfaceType>
) =>{
    email = email.toLocaleUpperCase()
    const user : userInterface | null = await userDBRepository.findEmail(email)
    if(!user) {
        throw new AppError ("this user does't exist", HttpStatus.UNAUTHORIZED)
    }else{
        const response = await authServices.comparePassword ( password, user.password)
        if(!response) {
            throw new AppError("Sorry, incorrect password", HttpStatus.UNAUTHORIZED)
        }
        const token = await authServices.generateAccessToken(user._id as string)
        const refreshToken = await authServices.generateRefreshToken(user._id as string)
        return { user, token, refreshToken }
    }
}

export const getStudentDetails = async(
    field : string,
    userDBRepository: ReturnType<authType>,
) =>{
    const students = await userDBRepository.getStudentDetails(field)    
    return { students }
}

export const getMentorsDetails = async(
    field: string,
    userDBRepository: ReturnType<authType>,
)=>{
    const mentors = await userDBRepository.getMentorsDetails(field)
    return { mentors }
}