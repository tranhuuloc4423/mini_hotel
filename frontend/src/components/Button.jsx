import { MDBBtn } from 'mdb-react-ui-kit'

const Button = ({ color, text, icon, onClick, end }) => {
    return (
        <MDBBtn color={color} className="me-1" onClick={onClick}>
            <div className="btn-icon">
                {end ? '' : icon}
                <span>{text}</span>
                {end ? icon : ''}
            </div>
        </MDBBtn>
    )
}

export default Button
