import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div style={{
            width: "100%",
            padding: 20,
            minHeight: "20vh",
            maxHeight: "30vh",
            marginTop: 50,
        }}>
            <p style={{ fontSize: "30px", textAlign: "center", padding: "20px"}}>
                Built With Love By<span><Link style={{color: "white"}} className='nav-link' to={"https://linkedin.com/in/sanjay-rawal-4324962a0/"}>Sanjay Rawal</Link></span>
            </p>
        </div>
    </footer>
  )
}

export default Footer
