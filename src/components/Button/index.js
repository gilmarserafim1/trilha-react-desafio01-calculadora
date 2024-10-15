import './styles.css'

function Button({text, backgroundColor, color = "white", onClick}) {
    return (
        <div onClick={onClick} className="button" style={{backgroundColor: backgroundColor}}>
            <h3 className="text" style={{color: color}}>{text}</h3>
        </div>    
    );
}

export default Button;