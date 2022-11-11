import { buttonValues } from "../buttonValues"
import Button from "./Button"

export default function ButtonContainer(){
    return(
        <div>
            {buttonValues.flat().map((button, idx) => (
                <Button button={button} idx={idx}/>
            ))}
        </div>
    )
}