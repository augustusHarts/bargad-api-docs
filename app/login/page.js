import React from 'react'
// import RulesManagerLogin from '../rules/component/RulesManagerlogin'
import LoginForm from './components/loginForm'

export default function LoginPage() {
  return (
    <main className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      
      {/* Background radial glow for the 'Cyber' depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a2a14_0%,_#000000_100%)] opacity-50" />
      
      {/* Container with no extra padding to prevent shifting */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {/* <RulesManagerLogin /> */}
        <LoginForm />
      </div>
    </main>
  )
}
