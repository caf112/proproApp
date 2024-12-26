import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import { paths } from '../config/path'
import Login from './routes/auth/login'
import Register from './routes/auth/register'
import Mypage from './routes/app/mypage'

export const AppRouter = () => {
  return (
    <Routes>
      {/* ホーム画面 */}
      <Route path={paths.Home.path} element={<Home />} />

      {/* 認証 */}
      <Route path={paths.auth.Login.path} element={<Login />} />
      <Route path={paths.auth.Register.path} element={<Register />} />

      {/* ゲーム */}
      <Route path={paths.app.Mypage.path} element={<Mypage />} />
      
    </Routes>
  )
}
