import React from 'react'
import { Context } from '../../utils/Context'
import { Header } from '../../Components/Header/Header'
import { Category } from '../../Components/Category/Category'
import { Hero } from '../../Components/Hero/Hero'
import { Footer } from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div className="home-page">
      <Header/>
      <Hero/>
      <Category/>
      <Footer/>
    </div>
  )
}
