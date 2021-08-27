import React, { Component } from 'react'

class DevelopedBy extends Component {
    render(){
        return (
            <div className="text-center"><span>&copy;</span> 2021 Upward Bangladesh. All rights reserved | Developed by <a className="text-info" href="https://www.facebook.com/CyanGarage/" style={{textDecoration: "none"}} target="_blank" rel="noreferrer"> Cyan Garage</a></div>
        )
    }
}

export default DevelopedBy;