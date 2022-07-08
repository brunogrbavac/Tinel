export type Workshop = {
    id: number,
    title: string,
    desc: string,
    price: number,
    date: string,
    category: string,
    userId: number,
    imageUrl: string,
};

export type User = {
    id: number,
    email: string,
    pasword: string,
    name: string,
};

export type CartItem = {
    workshop: Workshop,
    quantity: number,
};

export const workshopDefault: Workshop = {
    id: 0,
    title: "",
    desc: "",
    price: 0,
    date: "",
    category: "",
    userId: 0,
    imageUrl: "",
};

export const userDefault: User = {
    id: 0,
    email: "",
    pasword: "",
    name: "",
};

export const cartItemDefault = {
    workshop: workshopDefault,
    quantity: 0,
};