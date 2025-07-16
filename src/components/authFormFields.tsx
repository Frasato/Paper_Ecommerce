import { AuthFormFieldType } from "@/types/authFormFieldType";
import "@/styles/authFormFields.scss";

const AuthFormFields = (props: AuthFormFieldType) => {
    
    const Icon = props.icon;
    
    return(
    <div className="auth-form-field">
        <label className="auth-field-label">{props.label}</label>
        <div className="auth-field-container">
            <Icon className="auth-field-icon" />
            <input 
            className="auth-field-input"
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.label}
            required
            />
        </div>
    </div>
    )
}

export default AuthFormFields;