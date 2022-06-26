import React from 'react'

function About(lang) {
  var descr = "";
  var basliks = "";
  var lang = lang.lang;
  if(lang === 'en'){
      basliks = "Who am I?";
      descr = "I am a man currently learning web development from Turkey.";
  }
  if(lang === 'tr'){
      basliks = "Ben kimim?";
      descr = "Şu anda Türkiye'den web geliştirme öğrenen genç bir adamım.";
  }
  return (
    <div className='mekan w-full h-screen flex justify-center items-center flex flex-col hover:cursor-default'>
      <h1 className='about-baslik text-4xl font-bold text-underline mb-10 underline underline-offset-1 hover:translate-y-2 hover:scale-95'>{basliks}</h1>
      <div className=' bg-gri-100  w-10/12 h-4/6 rounded-md flex items-center justify-center hover:bg-gri-300 md:h-2/4'>
        <p className='text-xl text-center  font-bold text-gray-800 w-3/4 text-base sm:text-xl md:text-2xl'>
          {descr}
        </p>
      </div>
    </div>
  )
}

export default About