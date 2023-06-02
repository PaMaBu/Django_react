import React from 'react'
import pablo from '../assets/perfil_pablo.jpg'
import anael from '../assets/perfil_anael.jpg'

export function Cards() {
  return (
    <div className='container'>
        <div className='' >
            <div className='row'>
                <div className='col-6'>
                    <img className='' src={pablo} alt='img_perfil' ></img>
                    <h4 className='card-title'>Pablo</h4>
                    <p>
                        El pablo A.K.A "El Conserje"
                    </p>
                </div>
                <div className='col-6'>
                    <img className='' src={anael} alt='img_perfil'></img>
                    < h4 className='card-title'>Anael</h4>
                    <p>
                        El pablo A.K.A "Ana"
                    </p>
                </div>
            </div>
        </div>
            
    </div>
  )
}

