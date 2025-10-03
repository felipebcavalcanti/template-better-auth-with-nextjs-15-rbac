import ReturnButton from '@/components/return-button'
import SignOutButton from '@/components/sign-out-button'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div>OLAAAAAA</div>
      <div className='border border-gray-950'>
          <ReturnButton href='/' label='Home'/>
          <div>Dashboard</div>
          <SignOutButton />
      </div>
    </div>
  )
}
