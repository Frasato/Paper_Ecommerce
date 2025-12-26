export interface PixType{
    id: string,
    date_of_expiration: string,
    transaction_amount: number,
    transaction_data: TransactionData
}

interface TransactionData{
    qr_code: string,
    ticket_url: string,
    qr_code_base64: string
}