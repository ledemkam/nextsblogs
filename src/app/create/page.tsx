"use client"
import FormPost from "@/components/FormPost";
import { FormInputPost } from "../types";
import BackButton from "@/components/BackButton";


export default function CreatePage() {

  const handleCreatePost = (data: FormInputPost) => { 
    console.log(data)
  }
  return (
    <div>
      <BackButton/>
      <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
      <FormPost onSubmit={handleCreatePost} isEditing={false} />
    </div>
  )
}