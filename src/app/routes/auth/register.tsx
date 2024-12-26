import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const handleNavigation = (path:string) => {
        navigate(path);
    }
    
  return (
    <div>
        <button onClick={() => handleNavigation("/")}>Top</button>
    </div>
  )
}

export default Register