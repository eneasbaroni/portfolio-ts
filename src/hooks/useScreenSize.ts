import { useState, useEffect } from "react";

interface ScreenSize { //creacion de la interfance
  height: number;
  width: number;
}

const useScreenSize = (): ScreenSize => { //creamos el hook, declarando que devuelve un objeto de tipo ScreenSize
  const isClient = typeof window === 'object'; 

  const [size, setSize] = useState<ScreenSize>({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  })

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    if (isClient) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isClient])

  //const { height, width } = size
  //return { height, width }
  return size
}

export default useScreenSize;