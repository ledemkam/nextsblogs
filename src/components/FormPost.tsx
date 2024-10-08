"use client"
import { FormInputPost } from "@/app/types"
import { useQuery } from "@tanstack/react-query"
import { useForm , SubmitHandler } from "react-hook-form"
import axios from "axios"

 type FormProps = {
    onSubmit: SubmitHandler<FormInputPost>
    isEditing: boolean
}

const FormPost = ({onSubmit, isEditing} : FormProps) => {
  const {register,handleSubmit} = useForm<FormInputPost>()

  const {data:tags,isPending:isloadingsTags} = useQuery({
    queryKey:["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data
    }
  })

  return (
    <form className="flex flex-col items-center justify-center gap-5 mt-10" onSubmit={handleSubmit(onSubmit)}>
       <input{...register('title', {required: true})} type="text" placeholder="Post Title" className="input input-bordered w-full max-w-lg" />
       <textarea{...register('content', {required: true})} className="textarea textarea-bordered w-full max-w-lg" placeholder="Post content"></textarea>
       <select 
         {...register('tag', {required: true})} 
         defaultValue={""}
         className="select select-bordered w-full max-w-lg">
          <option disabled value="">Sprache wählen</option>
          <option>Han Solo</option>
          <option>Greedo</option>
      </select>
      <button className="btn btn-primary w-full max-w-lg" type="submit">
        {isEditing ? "Bearbeiten" : "Erstellen"}
      </button>
    </form>
  )
}
export default FormPost