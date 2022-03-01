import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from '../Card/Card';
import {cardObjOne,cardObjTwo,cardObjThree,cardObjFor,cardObjFive,cardObjSix} from '../Card/DataCard';

const Products = () => {
    return (
        <>
            <MDBContainer id='menu' className='mt-5'>
                <h1 className="text-center">American HAMBURGERS</h1>
                <p className="text mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sint quis quos reprehenderit
                    neque natus harum tenetur exercitationem possimus accusantium nihil error esse nulla culpa placeat a, officiis
                    fugit eius!</p>
                <MDBRow className='bg-light mb-3'>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjOne}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjTwo}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjThree}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjFor}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='bg-light mb-3'>
                   <MDBCol lg='3' md='6'className='col-example'>
                        <Card {...cardObjFive}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjSix}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjFive}/>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='col-example'>
                        <Card {...cardObjThree}/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default Products;