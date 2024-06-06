
import {MdOutlinePushPin} from "react-icons/md"
import {MdCreate,MdDelete} from "react-icons/md"

const Card = ({Name,Address,Telephone,isPinned,onEdit,onDelete,onPinNote}) => {
  return (
    <div className='border rounnded p-4 bg-white hover:shadow-xl transition-all ease-in-out'>
        <div className="flex items-center justify-between">
            <div>
                <h6 className="text-sm font-medium">{Name}</h6>
                <span className='text-xs  text-slate-500'>{Address}</span>
            </div>
            <MdOutlinePushPin className={`icon-btn ${isPinned?'text-primary':'text-slate-300'}`} onClick={onPinNote}/>
        </div>
        <p className="text-xs text-slate-600 mt-2">{Telephone}</p>
        <div className="flex items-center justify-between mt-2">
         

          <div className="flex items-center gap-2">
            <MdCreate
              className='icon-btn hover:text-green-600'
              onClick={onEdit}
            />
            <MdDelete
              className="icon-btn hover:text-red-500"
              onClick={onDelete}
            />
          </div>
        </div>
    </div>
  )
}

export default Card