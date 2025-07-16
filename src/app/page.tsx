"use client"
import AuthFormFields from "@/components/authFormFields";
import { useAuth } from "@/hooks/useAuth";
import { LoginProps } from "@/types/authType";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "@/styles/login.scss";
import { useRouter } from "next/navigation";

export default function Login(){
  
  const { isLoading, loginUser } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const login = async () => {
    const request: LoginProps = {
      email: email,
      password: password
    }
    await loginUser(request);
  }

  return(
    <main className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Olá, bem-vindo de volta</h1>
          <h2 className="login-subtitle">A nossa papelaria</h2>
        </div>
        <form className="login-form" onSubmit={(e) => {e.preventDefault(); login()}}>
          <AuthFormFields icon={MdEmail} label="Email" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
          <AuthFormFields icon={FaLock} label="Senha" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          {
            isLoading ? 
            <div className="login-loader"><div className="loader-spinner"/></div>
            :
            <button className="login-button" type="submit">Entrar</button>
          }
        </form>
        <div className="to-register-container">
          <button onClick={() => {router.push('/register')}} className="to-register-button">Não tem conta ainda? <span className="to-register-click-here">Clique aqui!</span></button>
        </div>
      </div>
    </main>
  );
}