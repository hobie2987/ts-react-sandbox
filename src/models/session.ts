export interface CartItem {
    sku: string;
    quantity: number
    added: number
    modified: number
}

export interface PromoCode {
    code: string;
    quantity: number
    added: number
    modified: number
}

export interface Cart {
    base_camera_total?: string;
    base_plan_total?: string;
    camera_total?: string;
    currency?: string;
    items: CartItem[]
    plan_total?: string
    promos?: PromoCode[]
    rate_plan?: "MONTHLY" | "ANNUAL"
    subscription?: string
    tax?: string
    total?: string
}

export interface Profile {
    country: string;
    currency: string;
    first_name: string
    lang: string;
    last_name: string;
    past_due_balance: boolean
    title: string
    var_available: boolean
    vat_enabled: boolean
    vat_required: boolean
}

export interface Session {
    cart: Cart
    id: string;
    profile: Profile;
}
