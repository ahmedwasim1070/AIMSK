import React from 'react'
import About from '../components/About'
import CourseSlider from '../components/CourseSlider'

function AboutPage() {
  return (
    <>
      <hr className="container mx-auto border-2 border-primaryColor rounded-full my-20" />
      <About/>
      <hr className="container mx-auto border-2 border-primaryColor rounded-full my-20" />
      <CourseSlider/>
      <hr className="container mx-auto border-2 border-primaryColor rounded-full my-20" />

    </>
  )
}

export default AboutPage