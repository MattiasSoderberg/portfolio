import React, { useRef, useEffect } from 'react'

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref?.current && !ref?.current?.contains(e.target as HTMLElement)) {
        callback()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [ref])

  return ref
}

export default useClickOutside