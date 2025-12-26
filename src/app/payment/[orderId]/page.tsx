import { usePayment } from "@/hooks/usePayment";
import { ChangeEvent, use, useState } from "react"

export default function page({param} : {param: Promise<{ orderId: string }>}){
    
    const { orderId } = use(param);
    const { pix, pixPayment, isLoading, error } = usePayment();
    const [selected, setSelected] = useState<string>("");

    const createPixPayment = async (e:ChangeEvent<HTMLInputElement>) =>{
        await pixPayment(orderId);
        setSelected(e.target.value);
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

            {/*I need to implements card payment*/}
        </main>
    )
}