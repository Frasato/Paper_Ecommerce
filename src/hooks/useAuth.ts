import { login, register } from "@/services/authService";
import { LoginProps, RegisterProps, UseAuthReturn, User } from "@/types/authType";
import { useRouter } from "next/router";
import { useState } from "react";

export function useAuth(): UseAuthReturn {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const loginUser = async (credentials: LoginProps) => {
        setIsLoading(true);
        setError(null);

        try{
            const userData = await login(credentials);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData))
        }catch(error){
            setError(error instanceof Error ? error.message : "Error on loggon!");
        }finally{
            setIsLoading(false);
        }
    }

    const registerUser = async (userData: RegisterProps) => {
        setIsLoading(true);
        setError(null);

        try{
            const success = await register(userData);
            if(success) router.push("/login");
        }catch(error){
            setError(error instanceof Error ? error.message : "Error on register");
        }finally{
            setIsLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.clear();
    }

    const clearError = () => {
        setError(null);
    }

    return {
        user,
        isLoading,
        error,
        loginUser,
        registerUser,
        logout,
        clearError
    };
}