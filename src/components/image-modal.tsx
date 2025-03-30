"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  altText: string
  onClose: () => void
}

export function ImageModal({ isOpen, imageUrl, altText, onClose }: ImageModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={altText}
            width={1200}
            height={800}
            className="object-contain max-h-[85vh]"
          />
        </div>
      </div>
    </div>
  )
}