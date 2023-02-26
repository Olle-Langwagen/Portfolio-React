import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {BsFillMoonFill} from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Olle Langwagen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gradient-to-br from-cyan-300 to-slate-800 p-10 min-h-screen' >


        {/* Navbar */}
        <section className='z-1000 sticky'>
          <nav className='flex justify-between'>
            <h1 className='text-xl font-mono'>Olle Langwagen</h1>
            <ul className='flex justify-center'>
              <a className="mr-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-md px-4 py-2" href=""><li>Home</li></a>
              <a className="mr-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-md px-4 py-2" href=""><li>Projects</li></a>
              <a className="mr-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-md px-4 py-2" href=""><li>Resume</li></a>
            </ul>
          </nav>
        </section>

        {/* Hero */}
        <section className='min-h-screen flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-mono'>Hi, I'm Olle</h1>
            <h2 className='text-2xl font-mono'>I'm a Frontend Developer</h2>
          </div>
        </section>
        

        {/* About */}
        
        {/* Projects */}

      </main>
    </>
  )
}
