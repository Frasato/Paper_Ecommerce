"use client"
import AuthFormFields from "@/components/authFormFields";
import { useAuth } from "@/hooks/useAuth";
import { LoginProps } from "@/types/authType";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function Login(){
  
  const { isLoading, loginUser } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    const request: LoginProps = {
      email: email,
      password: password
    }
    await loginUser(request);
  }

  return(
    <main>
      <div>
        <div>
          <h1>Olá, bem-vindo de volta</h1>
          <h2>A nossa papelaria</h2>
        </div>
        <form onSubmit={(e) => {e.preventDefault(); login()}}>
          <AuthFormFields icon={MdEmail} label="Email" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
          <AuthFormFields icon={FaLock} label="Senha" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          {
          isLoading? 
          <div><div/></div>
          :
          <button type="submit">Entrar</button>
          }
        </form>
      </div>
    </main>
  );
}