import React from 'react';
import { HeroContainer, HeroContenedor, HeroImg, SliderBtn, SliderBtnLink } from './SliderElements';
import {MDBContainer,MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Iconos from '../Icons/Iconos';

// import hero1 from '../../images/hero.jpg';
export default function Slider() {
  return (
    <>
     <HeroContenedor>
       <MDBContainer fluid>
      <MDBRow>
        <MDBCol lg='6' md='12' className='col-example'>
        <div className='d-flex justify-content-center align-items-center h-100 mr-5'>
                <div className='text-white'>
                  <h1 className='mb-3'>¡Rápido y Sabroso!</h1>
                  <p className='mb-3 aling-center'>No puedes comprar la FELICIDAD pero si puedes comprar HAMBURGUESAS</p>
                  <SliderBtn>
                  <SliderBtnLink to="menu">Ver Menú</SliderBtnLink>
                </SliderBtn>
                </div>
        </div>
        </MDBCol>
        <MDBCol lg='6' md='12' className='col-example'>
          <HeroContainer>
          <HeroImg className='p-5 text-center bg-image' />
            {/* style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 600, width: '100%'}} */}
          </HeroContainer>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </HeroContenedor>
    </>
  )
}


