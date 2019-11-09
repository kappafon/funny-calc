import * as React from 'react'
import './keypad.scss'
import Button from '../components/button'

export interface KeypadProps {
    onButtonClicked(value: string): void
}

const Keypad: React.FC<KeypadProps> = props => {
    const onButtonClicked = (value: string) => {
        if (value === 'x') {
            props.onButtonClicked('*')
            return
        }
        props.onButtonClicked(value)
    }
    return (
        <section className="buttons__container">
            <div className="buttons__numbers">
                <Button id="seven" value={7} onButtonClicked={onButtonClicked} />
                <Button id="eight" value={8} onButtonClicked={onButtonClicked} />
                <Button id="nine" value={9} onButtonClicked={onButtonClicked} />
                <Button id="four" value={4} onButtonClicked={onButtonClicked} />
                <Button id="five" value={5} onButtonClicked={onButtonClicked} />
                <Button id="six" value={6} onButtonClicked={onButtonClicked} />
                <Button id="one" value={1} onButtonClicked={onButtonClicked} />
                <Button id="two" value={2} onButtonClicked={onButtonClicked} />
                <Button id="three" value={3} onButtonClicked={onButtonClicked} />
                <Button id="zero" value={0} onButtonClicked={onButtonClicked} />
                <Button id="decimal" value="." onButtonClicked={onButtonClicked} />
                <Button
                    className="equals"
                    id="equals"
                    value="="
                    onButtonClicked={onButtonClicked}
                />
            </div>
            <div className="buttons__operators">
                <Button id="clear" value="C" onButtonClicked={onButtonClicked} />
                <Button id="divide" value="/" onButtonClicked={onButtonClicked} />
                <Button id="multiply" value="x" onButtonClicked={onButtonClicked} />
                <Button id="subtract" value="-" onButtonClicked={onButtonClicked} />
                <Button id="add" value="+" onButtonClicked={onButtonClicked} />
            </div>
        </section>
    )
}

export default Keypad
