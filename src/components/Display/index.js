import './styles.css'

function Display({number}) {
    return (
        <div className='screen'>
            <h3 className="number">{number}</h3>
        </div>
    );
}

export default Display;