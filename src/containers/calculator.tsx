/* eslint-disable no-eval */
import * as React from 'react'
import './calculator.scss'
import Keypad from './keypad'
import Display from '../components/display'

export interface CalculatorProps {}
const Calculator: React.FC<CalculatorProps> = props => {
    const [currentInput, setCurrentInput] = React.useState<Array<string> | Array<never>>([])
    const [result, setResult] = React.useState<Number | undefined>()

    const onButtonClicked = (value: string) => {
        // If button pressed is not a number, use following logic
        if (isNaN(value as any)) {
            switch (value) {
                case 'C':
                    setCurrentInput([])
                    setResult(undefined)
                    return
                case '.':
                    handleDecimal(value)
                    setResult(undefined)
                    return
                case '=':
                    calculate()
                    return
                case '+':
                case '-':
                case '*':
                case '/':
                    appendOperator(value)
                    setResult(undefined)
                    return
                default:
                    return
            }
        }

        // If 0 is pressed before any other number, prevent aditional 0's
        if (
            (value === '0' && !currentInput.length) ||
            (value === '0' && currentInput.length === 1 && currentInput[0] === '0')
        ) {
            return
        }

        joinNumber(value)
    }

    const calculate = () => {
        if (!currentInput.length) {
            return
        }
        const newCurrentInput = [...currentInput]
        const lastIndexValue = newCurrentInput[newCurrentInput.length - 1]
        const secondLastIndexValue = newCurrentInput[newCurrentInput.length - 2]

        if (lastIndexValue === '-' && isNaN(secondLastIndexValue as any)) {
            newCurrentInput.pop()
            newCurrentInput.pop()
        }
        if (isNaN(newCurrentInput[newCurrentInput.length - 1] as any)) newCurrentInput.pop()

        //temp solution using eval
        setResult(eval(newCurrentInput.join('')))
        setCurrentInput([eval(newCurrentInput.join('')).toString()])
    }
    const handleDecimal = (value: string) => {
        const newCurrentInput = [...currentInput]
        const lastIndexValue = newCurrentInput[newCurrentInput.length - 1]

        // Don't allow more than 1 decimal sign per number
        if (lastIndexValue && lastIndexValue.includes('.')) {
            return
        }

        // When . is pressed before number input and after operator, insert 0 before .
        if (!newCurrentInput.length || isNaN(lastIndexValue as any)) {
            setCurrentInput(newCurrentInput.concat('0.'))
            return
        }

        const lastValue = lastIndexValue + value
        newCurrentInput.pop()
        setCurrentInput(newCurrentInput.concat(lastValue))
    }

    const joinNumber = (value: string) => {
        const newCurrentInput = [...currentInput]
        const lastIndexValue = newCurrentInput[newCurrentInput.length - 1]

        if (isNaN(lastIndexValue as any)) {
            setCurrentInput(newCurrentInput.concat(value))
            return
        }

        const lastNumber = lastIndexValue + value
        newCurrentInput.pop()
        setCurrentInput(newCurrentInput.concat(lastNumber))
    }

    const appendOperator = (value: string) => {
        const newCurrentInput = [...currentInput]
        const lastIndexValue = newCurrentInput[newCurrentInput.length - 1]
        const secondLastIndexValue = newCurrentInput[newCurrentInput.length - 2]

        // Remove . when there is no decimal after it
        if (lastIndexValue && lastIndexValue.charAt(lastIndexValue.length - 1) === '.') {
            const newValue = lastIndexValue.slice(0, -1)
            newCurrentInput.pop()
            newCurrentInput.push(newValue)
        }

        // Prevent duplicating operators and prevent +, *, / operators before first number input
        if (lastIndexValue === value || (!newCurrentInput.length && value !== '-')) {
            return
        }

        if (newCurrentInput.length === 1 && isNaN(lastIndexValue as any)) {
            if (value === '-' && lastIndexValue === '-') {
                return
            }
            if (value === '+') {
                if (lastIndexValue === '+') {
                    return
                }
                if (lastIndexValue === '-') {
                    newCurrentInput.pop()
                    setCurrentInput(newCurrentInput)
                    return
                }
            }
            return
        }

        // After - is pressed and there is another operator before it,
        // next operator different from - will override previous operators
        if (lastIndexValue === '-' && isNaN(secondLastIndexValue as any)) {
            newCurrentInput.pop()
            newCurrentInput.pop()
            setCurrentInput(newCurrentInput.concat(value))
            return
        }

        // When operator is present, overwrite it with new one, except for -
        if (isNaN(lastIndexValue as any) && value !== '-') {
            newCurrentInput.pop()
            setCurrentInput(newCurrentInput.concat(value))
            return
        }

        // If - is pressed and previous operator is different from -, append it to array
        if (lastIndexValue !== '-' && value === '-') {
            setCurrentInput(newCurrentInput.concat(value))
            return
        }

        setCurrentInput(newCurrentInput.concat(value))
    }

    return (
        <div className="calculator">
            <main className="calculator__container">
                <Display
                    input={
                        !!result
                            ? result.toString()
                            : currentInput.length === 0
                            ? undefined
                            : currentInput[currentInput.length - 1]
                    }
                    formula={currentInput.length ? currentInput.join('') : undefined}
                />
                <Keypad onButtonClicked={onButtonClicked} />
            </main>
        </div>
    )
}

export default Calculator
