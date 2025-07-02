"use client"
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaPhone, FaMapPin, FaHouse, FaMapLocation, FaCity } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbNumber24Small } from "react-icons/tb";
import { MdOutlineLocationCity } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import AuthFormFields from "@/components/authFormFields";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Page(){

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [countryState, setCountryState] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const { isLoading, registerUser } = useAuth();

    const register = () =>{
        registerUser({
            name,
            email,
            password,
            phone,
            cpf,
            street,
            number,
            countryState,
            district,
            city,
            cep
        })
    }

    return (
        <main>
            <div>
                <h1>Olá, seja bem-vindo</h1>
                <p>A Papelaria mais top do Brasil</p>
            </div>
            <form onSubmit={register}>
                <AuthFormFields icon={IoPerson} label="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <AuthFormFields icon={MdEmail} label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <AuthFormFields icon={FaLock} label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <AuthFormFields icon={FaPhone} label="Telefone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <AuthFormFields icon={BsFilePersonFill} label="CPF" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                <AuthFormFields icon={FaMapPin} label="CEP" type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>
                <AuthFormFields icon={FaHouse} label="Endereço" type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                <AuthFormFields icon={TbNumber24Small} label="Número" type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <AuthFormFields icon={FaMapLocation} label="Estado" type="text" value={countryState} onChange={(e) => setCountryState(e.target.value)}/>
                <AuthFormFields icon={MdOutlineLocationCity} label="Bairro" type="text" value={district} onChange={(e) => setDistrict(e.target.value)}/>
                <AuthFormFields icon={FaCity} label="Cidade" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                {
                    isLoading? <div></div> : <button type="submit">Registrar</button> 
                }
            </form>
        </main>
    );
}