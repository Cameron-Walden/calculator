export default function Screen({ calculator }){
    return(
        <div>{calculator.number ? calculator.number : calculator.reset}</div>
    )
}