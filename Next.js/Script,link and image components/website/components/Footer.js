import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex justify-around bg-slate-800 text-white py-4 text-xs">
            <div className="text-center">Copyright &copy; 2023 Facebook | All rights reserved</div>
            <ul className='flex gap-2 text-sm'>
                <a href="/"><li className='text-sm'>home</li></a>
                <a href="/about"><li className='text-sm'>about</li></a>
                <a href="/contact"><li className='text-sm'>contact</li></a>
            </ul>
        </footer>
    </div>
  )
}

export default Footer