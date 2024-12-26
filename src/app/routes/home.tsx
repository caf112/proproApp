import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    
    const handleNavigation = (path: string) => {
      navigate(path);
    }
    
  return (
    <div>
      <button onClick={() => handleNavigation("/login")}>Login</button>
      <button onClick={() => handleNavigation("/register")}>Register</button>
    </div>
  )
}

export default Home