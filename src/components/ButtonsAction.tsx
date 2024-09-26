import { Edit, Trash } from "lucide-react"
import Link from "next/link"

const ButtonsAction = () => {
  return (
    <div>
      <Link href="/edit/id" className="btn mr-2">
      <Edit/>
      Edit</Link>
      <button className="btn btn-error">
        <Trash/>
        Delete</button>
    </div>
  )
}
export default ButtonsAction