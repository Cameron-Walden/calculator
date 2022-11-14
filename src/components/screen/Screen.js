import './Screen.css';

export default function Screen({ calculator }){
    return(
        <div className='screen'>{calculator.number ? calculator.number : calculator.result}</div>
    )
}