/* eslint-disable no-unused-vars */
import React from 'react'

const What = () => {

  return (
    <>
      <div className="relative w-full glide-03">
        
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
            <li><img src="https://Tailwindmix.b-cdn.net/image-05.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
            <li><img src="https://Tailwindmix.b-cdn.net/image-01.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
            <li><img src="https://Tailwindmix.b-cdn.net/image-02.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
            <li><img src="https://Tailwindmix.b-cdn.net/image-03.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
            <li><img src="https://Tailwindmix.b-cdn.net/image-04.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          </ul>
        </div>
        
        <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir="<" aria-label="prev slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <title>prev slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20" data-glide-dir=">" aria-label="next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <title>next slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
        
        <div className="absolute bottom-0 flex items-center justify-center w-full gap-2" data-glide-el="controls[nav]">
          <button className="p-4 group" data-glide-dir="=0" aria-label="goto slide 1"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none"></span></button>
          <button className="p-4 group" data-glide-dir="=1" aria-label="goto slide 2"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none"></span></button>
          <button className="p-4 group" data-glide-dir="=2" aria-label="goto slide 3"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none"></span></button>
          <button className="p-4 group" data-glide-dir="=3" aria-label="goto slide 4"><span className="block w-2 h-2 transition-colors duration-300 rounded-full ring-1 ring-slate-700 bg-white/20 focus:outline-none"></span></button>
        </div>
      </div>
    </>
  )
}

export default What