
export interface Login {
    email: string
    password: string
}

export interface LoginResponse {
    status: string,
    email: string,
}

export interface SignUpResponse {
    status: string
    email: string
    username: string
}