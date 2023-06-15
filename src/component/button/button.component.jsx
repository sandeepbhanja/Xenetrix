import './button.style.scss';

const Button = ({children , buttonType, ...otherProps})=>{
    const Button_Type = {
        google: 'google-sign-in',
        inverted: 'inverted',
    }
    return(
        <button {...otherProps}className={`button-container ${Button_Type[buttonType]}`}>
            {children}
            
        </button>
    )
}

export default Button;