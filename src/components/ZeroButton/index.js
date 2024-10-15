import './styles.css'

function ZeroButton({onClick}){
    return (
        <div onClick={onClick} className="equal">
            <h3 className="text">0</h3>
            <h3 className="text"> </h3>
            <h3 className="text"> </h3>
        </div>
          
    );
}

export default ZeroButton;