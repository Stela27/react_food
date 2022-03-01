import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

import emailjs from 'emailjs-com';

import '../Contact/ContactElement.css';

const Contact = () => {

    const [formValues, setFormValue] = useState({
        nombre: '',
        email: '',
        tel: '',
        empresa: '',
        mensage: ''
    });

    const onChange = (e) => {
        setFormValue({ ...formValues, [e.target.name]: e.target.value });
    };
    // const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault(formValues);

        console.log();
        emailjs.sendForm('service_message', 'template_efcebhn', e.target, 'user_cW8Ds9LUcuANrr9H2o8lm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    const handleinitial=()=>{
    };
            


    return (
        <>
            <div id="contacto" className="containerColor">
                <MDBContainer className='pt-3'>
                    <h1 className="text-center">Contacta con Nosotros</h1>
                    <div className="heading-line"></div>
                    <p className="text mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sint quis quos reprehenderit
                        neque natus harum tenetur exercitationem possimus accusantium nihil error esse nulla culpa placeat a, officiis
                        fugit eius!</p>
                    <MDBRow>
                        <MDBCol lg='5' md='12'>
                            <div className="contenedorForm">
                                <form className='row' onSubmit={sendEmail}>
                                    <h3>Escribenos...</h3>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <MDBInput
                                            className="formtext"
                                            name='nombre'
                                            value={formValues.nombre}
                                            onChange={onChange}
                                            type="text"
                                            id='formWhite'
                                            required
                                            label='Nombre'
                                        />
                                    </div>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <MDBInput
                                            className="formtext"
                                            name='email'
                                            value={formValues.email}
                                            onChange={onChange}
                                            id='validationCustom03'
                                            required
                                            type="email"
                                            label='Correo'
                                        />
                                    </div>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <MDBInput
                                            className="formtext"
                                            name='tel'
                                            value={formValues.tel}
                                            onChange={onChange}
                                            id='validationCustom03'
                                            required
                                            label='Telefono'
                                        />
                                    </div>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <MDBInput
                                            className="formtext"
                                            name='empresa'
                                            value={formValues.empresa}
                                            onChange={onChange}
                                            id='validationCustom03'
                                            required
                                            label='Empresa / Negocio'
                                        />
                                    </div>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <MDBInput
                                            className="formtext"
                                            label='Message'
                                            name='mensage'
                                            value={formValues.mensage}
                                            onChange={onChange}
                                            id='textAreaExample'
                                            textarea rows={4} />
                                    </div>
                                    <div className='col-lg-12 col-md-12 mb-4'>
                                        <button className="form-button" type="submit" onClick={handleinitial}>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </MDBCol>
                        <MDBCol lg='7' md='12'>
                            <MDBRow className="text-white">
                                <MDBCol lg="12" md="6" className="gradient shadow p-3">
                                    <div className="contacdes">
                                        <h4>100% Satisfaction Guaranteed</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
                                        </p>
                                        <h3>What will be the next step?</h3>
                                        <ul>
                                            <li>We'll prepare the proposal.</li>
                                            <li>we'll discuss it together.</li>
                                            <li>let's start the discussion.</li>
                                        </ul>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
}

export default Contact;