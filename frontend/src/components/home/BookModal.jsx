import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from "react-icons/bi"

const BookModal = ({book, onClose}) => {
  return (
    <div 
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0  bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={ (evt) => evt.stopPropagation()}
      >
        <AiOutlineClose 
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl"/>
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl"/>
          <h2 className="my-1">{book.author}</h2>
        </div>

        <p className="mt-4">Lorem Ipsum Header</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim eu erat aliquet facilisis. Nullam vel nunc nec metus tincidunt consectetur. Sed et nibh ac elit ullamcorper laoreet. In tristique ullamcorper risus, eu dapibus lectus facilisis at. Fusce euismod, justo nec tincidunt iaculis, lectus erat eleifend lorem, eget rhoncus quam arcu vel justo. Quisque non massa in metus suscipit egestas. Sed euismod nec arcu id congue.
        </p>

      </div>
    </div>
  )
}

export default BookModal