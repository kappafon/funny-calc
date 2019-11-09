import * as React from 'react'
import './display.scss'

export interface DisplayProps {
    input?: string
    formula?: string
}

const Display: React.FC<DisplayProps> = props => {
    const { input = '0', formula = ' ' } = props
    return (
        <section className="calculator__display">
            <div className="calculator__display--formula">{formula}</div>
            <div id="display" className="calculator__display--result">
                {input}
            </div>
        </section>
    )
}

export default Display
