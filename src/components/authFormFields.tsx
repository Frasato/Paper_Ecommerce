import { AuthFormFieldType } from "@/types/authFormFieldType";

const AuthFormFields = (props: AuthFormFieldType) => {
    
    const Icon = props.icon;
    
    return(
        <div>
            <label>{props.label}</label>
            <div>
                <Icon />
                <input type={props.type} value={props.value} onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default AuthFormFields;