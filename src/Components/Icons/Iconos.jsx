import {ContenedorIcons,Icons } from "./IconsElements";
import {MDBIcon} from 'mdb-react-ui-kit';
const Iconos = () => {
    return ( 
        <>
        <ContenedorIcons>
          <Icons>
          <MDBIcon fab icon='facebook' className='pb-3'/>
          <MDBIcon fab icon='instagram' className='pb-3' />
          <MDBIcon fab icon='twitter' className='pb-3' />
          <MDBIcon fab icon='twitter' className='pb-3' />
          </Icons>
        </ContenedorIcons>
        </>
     );
}
 
export default Iconos;