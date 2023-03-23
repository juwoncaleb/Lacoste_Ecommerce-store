import React from 'react'

export default function AdminHeader() {
  return (
    <div><div className="flex justify-between">
    <div className="flex justify-between lefticon">
      <img
        className="navIcon"
        src="https://img.icons8.com/ios/100/undefined/marker--v2.png"
      />
      <img
        className="navIcon moon"
        src="https://img.icons8.com/external-thin-kawalan-studio/96/undefined/external-dark-mode-user-interface-thin-kawalan-studio.png"
      />
    </div>


    <div onClick={() => router.push('/casual')}>
      <img onClick={() => router.push('/')}className="lacoste cursor-pointer" src="./logos.png" />
    </div>

    
    
    <div className="flex justify-around rightIcon">
      <img onClick={() => router.push('/auth')}
        className="navIcon"
        src="https://img.icons8.com/ios/50/undefined/search--v3.png"
      />
      <img
        className="navIcon"
        src="https://img.icons8.com/ios/50/undefined/user--v3.png"
      />
      <img 
      onClick={() => router.push('/auth')}
        className="navIcon"
        src="https://img.icons8.com/ios/50/undefined/shopping-bag--v1.png"
      />
    </div>
  </div>
  {/* HEADER TWO */}

  <hr className="border1 mt-1" />
  <div className="headerText mt-4 flex justify-center  ">
    <p className="pr-20 cursor-pointer "  onClick={() => router.push('/men')}>DASHBOARD</p>

    <p className="pr-20 cursor-pointer	"  onClick={() => router.push('/product')}>PRODUCT</p>

    <p className="pr-20 cursor-pointer	" onClick={() => router.push('/kids')}>ADD PRODUCT</p>
    <p className="pr-20 cursor-pointer	" onClick={() => router.push('/shoes')}>CATEGORY</p>

    <p className="pr-20 cursor-pointer	" onClick={() => router.push('/order')}>ORDER</p>
    <p className="pr-20 cursor-pointer	"onClick={() => router.push('/discount')}> USER</p>
  </div>
  <hr className="border1 mt-3" />
</div>
  )
}
