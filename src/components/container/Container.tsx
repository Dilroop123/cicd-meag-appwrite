import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ margin: '15px 200px', boxSizing: 'border-box' }}>
            {children}

        </div>
    )
}

export default Container