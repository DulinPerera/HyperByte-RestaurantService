
import { Label, TextInput,Button } from "flowbite-react";

function Form() {
  return (
    <div className="flex max-w-md flex-col gap-4">
    <div>
      <div className="mb-2 block">
        <Label htmlFor="name" value="Name" />
      </div>
      <TextInput id="name" type="text" sizing="md" />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="address" value="Address" />
      </div>
      <TextInput id="address" type="text" sizing="md" />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="telephone" value="Telephone" />
      </div>
      <TextInput id="telephone" type="number" sizing="md" />
    </div>
    <Button type="submit">Add Restaurant</Button>
  </div>
  )
}

export default Form