import React, { useId } from 'react'

function Input({
    label,
    style,
    type = 'text',
    width = '100%',
    padding = '5px',
    borderRadius = '30px',
    ...props
}: any,
    ref: React.Ref<HTMLSelectElement> | undefined) {
    const id = useId();
    return (
        <div style={{ width, ...style }}>
            {label && <label>{label}</label>}
            <input
                ref={ref}
                type={type}
                style={{ padding, borderRadius }}
                width={width}
                {...props}
                id={id}

            />
        </div>
    )
}

export default React.forwardRef(Input);