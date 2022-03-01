import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { ContainerColor, Textsubtitulo ,ImgWrap,Img } from './InfoSectionElements';
import img from '../../images/Chef.svg';

const InfoSection = () => {
    return (
        <>
        <div id='servicios'>
            <ContainerColor>
                <MDBContainer className='pt-3'>
                    <MDBRow>
                        <MDBCol lg='6' md='12'>
                          <MDBRow>
                          <h1 className="text-center">Nuestro Servicios</h1>
                            <p className="text mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sint quis quos reprehenderit
                                neque natus harum tenetur exercitationem possimus accusantium nihil error esse nulla culpa placeat a, officiis
                                fugit eius!</p>
                          </MDBRow>
                          <MDBRow>
                          <MDBCol lg='4' md='4'>
                              <Textsubtitulo className="text-center">American HAMBURGERS</Textsubtitulo>
                            <p className="text mb-5 text-center">Lorem ipsum dolor sit amet consectetur</p>
                          </MDBCol>
                          <MDBCol lg='4' md='4'>
                          <Textsubtitulo className="text-center">American HAMBURGERS</Textsubtitulo>
                          <p className="text mb-5 text-center">Lorem ipsum dolor sit amet consectetur</p>
                          </MDBCol>
                          <MDBCol lg='4' md='4'>
                          <Textsubtitulo className="text-center">American HAMBURGERS</Textsubtitulo>
                          <p className="text mb-5 text-center">Lorem ipsum dolor sit amet consectetur</p>
                          </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol lg='6' md='12'>
                            <ImgWrap>
                            <Img src={img} alt='Carne a la parilla' />
                            </ImgWrap>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </ContainerColor>
         </div>
        </>
    );
}

export default InfoSection;