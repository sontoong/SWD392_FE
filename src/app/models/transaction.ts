export interface Transaction{
    date: number;
    type: "transaction" | "cash-out";
    name: string;
    moneyAmount: number;
    id: string;
}