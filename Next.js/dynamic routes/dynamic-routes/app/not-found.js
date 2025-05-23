import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold mb-4'>404</h1>
      <h2 className='text-1g text-gray-600'>Not Found</h2>
      <p className='text-1g text-gray-600'>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 hover:underline'>Return Home</Link>
    </div>
  )
}
