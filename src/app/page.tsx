"use client";

import { Button } from "@/components/ui/button";
import { useFabric } from "@/hooks/use-fabric";

import { Toolbar } from "@/components/toolbar";

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
  } = useFabric();

  return (
    <>
      <div className='px-2 space-y-10 min-h-screen items-center h-full flex-col flex justify-between'>
        <div>
          <footer className='text-center p-4'>
            <p>By Kevin Ayerdi Perticarari</p>
            <div className='flex justify-center space-x-4'>
              <a
                href='https://github.com/KAyerdi'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-gray-200 hover:bg-gray-300 transition px-4 py-2'
              >
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/kevin-perticarari-ayerdi-94968412b/'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-gray-200 hover:bg-gray-300 transition px-4 py-2'
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a href='https://soykevin.ar'>SoyKevin.ar</a>
            </div>
          </footer>
        </div>
        <canvas
          ref={canvasRef}
          className='border rounded-3xl overflow-hidden '
        />
        <div className='pt-10 pb-8 space-y-5 flex items-center flex-col'>
          <Toolbar
            setBackgroundImage={setBackgroundImage}
            addText={addText}
            addChillGuy={addChillGuy}
            flipImage={flipImage}
            deleteSelectedObject={deleteSelectedObject}
            downloadCanvas={downloadCanvas}
            changeBackgroundColor={changeBackgroundColor}
            currentBackgroundColor={currentBackgroundColor}
          />
        </div>
      </div>
    </>
  );
}
