import React from 'react'

const myStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
}
var year = new Date()
year = year.getFullYear();
export default function Footer() {
    return (
        <div>
            <div className="text-center p-4" style={myStyle}>
                © {year} Copyright : Pratik Kamble

            </div>
        </div >
    )
}
