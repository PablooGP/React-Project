import React, { useState } from 'react'

const LoginWidget = () => {
    return (
        <span className="topbarButton horizontalAlign">
            <img className="topbarButtonImg" srcSet="/assets/userIcon.png" alt="" />
            <p>Registrarse / Iniciar Sesion</p>
        </span>
    )
}

export default LoginWidget