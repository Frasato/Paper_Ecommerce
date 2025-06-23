import { LoginProps, RegisterProps, User } from "@/types/authType";

export async function login(login: LoginProps): Promise<User>{

    if(login.email == '' || login.password == '') throw new Error("Can't loggin with empty information!");

    const response = await fetch(`${process.env.URL_API}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: login.email,
            password: login.password
        })
    });

    if(!response.ok){
        const data = await response.json();
        throw new Error(`Internal Server Error: ${data}`);
    } 

    return await response.json();
}

export async function register(register: RegisterProps): Promise<boolean>{
    
    if(
        register.name == '' ||
        register.email == '' ||
        register.password == '' ||
        register.cpf == '' ||
        register.phone == '' ||
        register.street == '' ||
        register.cep == '' ||
        register.number == '' ||
        register.district == '' ||
        register.countryState == '' ||
        register.city == ''
    ) throw new Error("Can't register with empty informations!");

    const response = await fetch(`${process.env.URL_API}/auth/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: register.name,
            password: register.password,
            email: register.email,
            phone: register.phone,
            cpf: register.cpf,
            street: register.street,
            number: register.number,
            countryState: register.countryState,
            district: register.district,
            city: register.city,
            CEP: register.cep
        })
    });

    if(!response.ok){
        const data = await response.json();
        throw new Error(`Internal Server Error: ${data}`);
    }

    return true;
}