"use client"
import { FormInputPost } from "@/app/types"
import FormPost from "@/components/FormPost"

export default function Editpage() {
  const handleEditPost = (data: FormInputPost) => { 
    console.log(data)
  }
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost onSubmit={handleEditPost} isEditing={true}/>
    </div>
  )
}