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

export interface ApiResponse{
    success:boolean,
    message:string,
    result:LoginResult
}

export interface LoginResult{
    token:string,
    name:string,
    phoneNo:string,
    city:string,
    emailAddress:string
}

export interface PetApiResponse {
    success: boolean
    message: string
    result: PetData[]
  }
  
  export interface PetData {
    sNo: number
    petId: string
    petName: string
    description: string
    petAge: number
    isAdopted: boolean
    vaccinated: boolean
    petGender: string
    petType: string
    userId: string
    price: number
    address: string
    petImages: any
    createdOn: string
  }
  
  export interface AdoptionRequestResponse{
    success: boolean
    message: string
    result: AdoptionRequest[]
  }
  export interface AdoptionRequest {
    requestId: string
    status: boolean
    senderId: string
    senderName: string
    ownerId: string
    petId: string
    petName: string
    createdOn: string
    acceptedOn: string
  }
  