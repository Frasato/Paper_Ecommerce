import { IconType } from "react-icons";

export interface AuthFormFieldType{
    label: string;
    type: string;
    value?: string | number | readonly string[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: IconType
}