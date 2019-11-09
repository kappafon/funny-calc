import * as React from 'react'
import './button.scss'

export interface ButtonProps {
    id: string
    value: string | number
    className?: string

    onButtonClicked(value: string): void
}

const Button: React.FC<ButtonProps> = props => {
    const onButtonClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onButtonClicked(e.currentTarget.value)
    }
    return (
        <button
            id={props.id}
            className={`button ${props.className}`}
            onClick={onButtonClicked}
            value={props.value.toString()}
        >
            {props.value}
        </button>
    )
}

export default Button
