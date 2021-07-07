import React from 'react'

export const City = ({city,country}) => {
    const sty={
        textAlign:'center',
        fontSize:'2em'

    }
    return (
        <div style={sty} className="pt-3 pb-3">
            {city},{country}
        </div>
    )
}

