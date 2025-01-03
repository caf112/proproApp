import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { paths } from '../config/path'
import Login from './routes/auth/login'
import Register from './routes/auth/register'
import Mypage from './routes/app/mypage'
import Top from './routes/top'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ホーム画面 */}
        <Route path={paths.Top.path} element={<Top />} />

        {/* 認証 */}
        <Route path={paths.auth.Login.path} element={<Login />} />
        <Route path={paths.auth.Register.path} element={<Register />} />

        {/* ゲーム */}
        <Route path={paths.app.Mypage.path} element={<Mypage />} />
        
      </Routes>
    </BrowserRouter>
  )
}
