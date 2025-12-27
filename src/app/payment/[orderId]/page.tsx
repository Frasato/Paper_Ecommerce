import { usePayment } from "@/hooks/usePayment";
import { ChangeEvent, use, useState } from "react"

export default function page({param} : {param: Promise<{ orderId: string }>}){
    
    const { orderId } = use(param);
    const { pix, pixPayment, card, cardPayment, isLoading, error } = usePayment();
    const [selected, setSelected] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardHold, setCardHold] = useState<string>("");
    const [expMonth, setExpMonth] = useState<string>("");
    const [expYear, setExpYear] = useState<string>("");
    const [securityCode, setSecurityCode] = useState<string>("");
    const [installments, setInstallments] = useState<string>("");

    const handlerExpiration = (e:ChangeEvent<HTMLInputElement>) =>{
        let value = e.target.value;
        value = value.replace(/\D/g, "")

        if (value.length >= 3) {
            value = value.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
        }

        if (value.length === 4) {
            const month = value.slice(0, 2);
            const year = value.slice(2, 4);

            if (+month >= 1 && +month <= 12) {
            setExpMonth(month);
            setExpYear(year);
            } else {
            setExpMonth("");
            setExpYear("");
            }
        } else {
            setExpMonth("");
            setExpYear("");
        }
    }

    const createPixPayment = async (e:ChangeEvent<HTMLInputElement>) =>{
        await pixPayment(orderId);
        setSelected(e.target.value);
    }

    const createCardPayment = async () => {
        await cardPayment(
            orderId,
            Number(installments),
            cardNumber,
            expMonth,
            expYear,
            securityCode,
            cardHold,
        )
    }

    return(
        <main>
            <input 
                type="radio" 
                name="payment" 
                value="pix"
                checked={selected === "pix"}
                onChange={(e) => createPixPayment(e)}
            />
            <label>Pix</label>

            <input 
                type="radio" 
                name="payment" 
                value="cartão"
                checked={selected === "cartão"}
                onChange={(e) => setSelected(e.target.value)}
            />
            <label>Cartão</label>

            {isLoading? <h1>Carregando...</h1> : 
                error? <h1>{error}</h1> : selected === "pix" && pix && (
                    <div>
                        <h1>PAGAMENTO VIA PIX</h1>
                        <h2>R$ {pix.transaction_amount}</h2>
                        
                        <img 
                            src={`data:image/png;base64,${pix.transaction_data.qr_code_base64}`}
                            alt="QR Code Pix"
                            style={{ width: '300px', height: '300px' }}
                        />
                        
                        {pix.transaction_data.qr_code && (
                            <div>
                                <p>Ou copie o código:</p>
                                <code>{pix.transaction_data.qr_code}</code>
                            </div>
                        )}
                    </div>
            )}

            {selected === "cartão" && 
                (
                    <div>
                        <h1>PAGAMENTO VIA CARTÃO</h1>

                        <input type="text" placeholder="Número do cartão" onChange={(e)=> setCardNumber(e.target.value)}/>
                        <input type="text" placeholder="Nome impresso no cartão" onChange={(e)=> setCardHold(e.target.value)}/>
                        <input type="text" placeholder="Validade" maxLength={4} onChange={(e)=> handlerExpiration(e)}/>
                        <input type="text" placeholder="Código de segurança" maxLength={3} onChange={(e)=> setSecurityCode(e.target.value)}/>
                        <input type="text" placeholder="Número de parcelas" onChange={(e)=> setInstallments(e.target.value)}/>
                    </div>
                )
            }
        </main>
    )
}

function async() {
    throw new Error("Function not implemented.");
}
