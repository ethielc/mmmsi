import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>DI</Footer.Title>
                    <Footer.Link href="#">Sobre Nosotros</Footer.Link>
                    <Footer.Link href="#">Profesores</Footer.Link>
                    <Footer.Link href="#">Malla Curricular</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Redes Sociales</Footer.Title>
                    <Footer.Link href="#"> <Icon className="fab fa-facebook-square"/>Facebook</Footer.Link>
                    <Footer.Link href="#"> <Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>&copy;{new Date().getFullYear()} DI-UTFSM </Footer.Title>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}