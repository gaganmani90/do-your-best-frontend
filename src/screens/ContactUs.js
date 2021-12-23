import quoraLogo from '../quora-logo.png'
import { Container, Image } from 'react-bootstrap'

const ContactUs = () => {
  return (
        <>
            <Container>
                <QuoraImageUrl/>
            </Container>
        </>
  )
}

const QuoraImageUrl = () => {
  const quoraLink = 'https://www.quora.com/profile/Gagan-Mani'
  return (<a href={quoraLink} target="_blank" rel="noreferrer">
        <Image src={quoraLogo}/>
    </a>)
}
export default ContactUs
