import './button.style.scss';

const Button = ({children , ButtonType, ...otherProps})=>{
    const Button_Type = {
        google: 'google-sign-in',
        inverted: 'inverted',
    }
    return(
        <button {...otherProps}className={`button-container ${Button_Type[ButtonType]}`}>
            {children}
        </button>
    )
}

export default Button;