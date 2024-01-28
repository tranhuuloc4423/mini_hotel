import { MDBBtn } from 'mdb-react-ui-kit'

const Button = ({ color, text, icon, onClick, end, className }) => {
    return (
        <MDBBtn color={color} className={`me-1 ${className}`} onClick={onClick}>
            <div className="btn-icon">
                {end ? '' : icon}
                <span>{text}</span>
                {end ? icon : ''}
            </div>
        </MDBBtn>
    )
}

export default Button
