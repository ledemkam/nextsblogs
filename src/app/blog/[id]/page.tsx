import BackButton from "@/components/BackButton";
import ButtonsAction from "@/components/ButtonsAction";

export default function BlogDetailsPage() {
  return (
    <div>
      <BackButton/>
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post eins</h2>
        <ButtonsAction/>
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  )
}