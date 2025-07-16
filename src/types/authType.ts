export interface User{
    name: string;
    userId: string;
    token: string
}

export interface LoginProps{
    email: string;
    password: string;
}

export interface RegisterProps{
    name: string;
    password: string;
    email: string;
    phone: string;
    cpf: string;
}

export interface RegisterAddress{
    street: string;
    number: string;
    countryState: string;
    district: string;
    city: string;
    cep: string;
}

export interface UseAuthReturn{
    user: User | null;
    isLoading: boolean;
    error: string | null;
    loginUser: (credentials: LoginProps) => Promise<void>;
    registerUser: (userData: RegisterProps) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}