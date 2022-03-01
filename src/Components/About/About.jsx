import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Masonry from 'react-masonry-css';
import '../About/AboutElement.css';
import { data } from './DataAbout';


const About = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
        <>
            <div id='nosotros' className="ContainerColor">
                <MDBContainer className='pt-3'>
                <h1 className="text-center">Conoce Nuestras Instalaciones</h1>
                <p className="text mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sint quis quos reprehenderit
                    neque natus harum tenetur exercitationem possimus accusantium nihil error esse nulla culpa placeat a, officiis
                    fugit eius!</p>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                         {data.map((item,index)=>{
                     return(
                        <div className="imgs" key={index}>
                            <img src={item.imgSrc} style={{width:'100%'}} />
                        </div>
                    )
                })}
                    </Masonry>
                </MDBContainer>
            </div>
        </>
    );
}

export default About;