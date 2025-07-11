function Button({
    children,
    type = 'button',
    bgColor = 'blue',
    textColor = 'white',
    style,
    ...props

}: any) {
    return (
        <button style={{
            color: textColor,
            backgroundColor: bgColor,
            ...style
        }}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button