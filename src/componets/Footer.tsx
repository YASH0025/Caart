import React from 'react'
import Container from 'react-bootstrap/Container';


const Footer = () => {
    return (
        <> <footer className="footer bg-dark text-light py-3">
        <Container>
          <div className="contact-info">
            <p>Contact us at : Shopcart@gmail.com</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} this is my footer</p>
          </div>
        </Container>
      </footer>
      </>
    )
}

export default Footer