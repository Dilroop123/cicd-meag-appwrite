import React, { useId } from 'react'

function Select({
    options = [],
    label,
    onClick,
    ...props
}: any, ref: React.Ref<HTMLSelectElement> | undefined) {
    const id = useId();
    return (
        <div style={{ width: '100%' }}>
            {label && <label>{label}</label>}
            <select id={id} {...props} ref={ref} onChange={(e) => onClick(e.target.value)}>
                {options?.map((option: string) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default React.forwardRef(Select);