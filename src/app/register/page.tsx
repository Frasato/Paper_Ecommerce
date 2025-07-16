"use client"
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import AuthFormFields from "@/components/authFormFields";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import "@/styles/register.scss";
import { useRouter } from "next/navigation";

export default function Page(){

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const { isLoading, registerUser } = useAuth();
    const router = useRouter();

    const register = () =>{
        registerUser({
            name,
            email,
            password,
            phone,
            cpf,
        })
    }

    return (
        <main className="register-container">
        <div className="register-card">
          <div className="register-header">
            <h1 className="register-title">Olá, seja bem-vindo</h1>
            <p className="register-subtitle">A Papelaria mais top do Brasil</p>
          </div>
          <form className="register-form" onSubmit={register}>
            <AuthFormFields icon={IoPerson} label="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <AuthFormFields icon={MdEmail} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <AuthFormFields icon={FaLock} label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <AuthFormFields icon={FaPhone} label="Telefone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <AuthFormFields icon={BsFilePersonFill} label="CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            {
              isLoading ? 
              <div className="register-loader"><div className="loader-spinner"/></div> 
              : 
              <button className="register-button" type="submit">Registrar</button>
            }
          </form>
          <div className="to-login-container">
            <button onClick={() => {router.push('/')}} className="to-login-button">Já é de casa? <span className="to-login-click-here">Clique aqui!</span></button>
          </div>
        </div>
      </main>
    );
}