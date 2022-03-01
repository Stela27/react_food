import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage,MDBRipple } from 'mdb-react-ui-kit';
const Card = ({img,alt,title,description}) => {
    return (
        <MDBCard className='mb-3' style={{ maxWidth: '30rem'}}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={img} fluid alt={alt}/>
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
                   {description}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Card;