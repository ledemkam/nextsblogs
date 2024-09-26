"use client"

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()
  return (
    <div className="btn" onClick={() => router.back()}>
        <ChevronLeft/>
        Züruck
    </div>
  )
}
export default BackButton