export interface Plan {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    price: { monthly: number; yearly: number };
    description: string;
    features: string[];
    limitations: string[];
    buttonText: string;
    buttonStyle: string;
    popular: boolean;
    gradient: string;
}

export interface FeatureItem {
    name: string;
    free: boolean | string;
    premium: boolean | string;
    pro: boolean | string;
}

export interface FeatureCategory {
    category: string;
    items: FeatureItem[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Savings {
    savings: number;
    percentage: number;
}