import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
    firstName: string;
    lastNmae: string;
    email: string;
    password: string
}


export interface IBudget extends mongoose.Document{
    date: Date;
    budget: number;
    userId: string;
    items: Item[]
}

export interface Item extends mongoose.Document {
    title: string;
    amount: number;
    date: Date;
    note: string
    isPurchased: boolean
}

export interface ILogin{
    email: string;
    password: string
}

