import { RenderModel } from '../RenderModel'
import { ContactModel } from '../models/contactEarthModel'
import Form from './form'

export default function ContactCard() {
  return (
    <div className='w-full h-full flex items-center justify-center gap-2 z-10 flex-col-reverse lg:flex-row'>
        <div className='w-full lg:w-1/2 h-full'>
          <Form />
        </div>
        <div className='relative w-full lg:w-1/2 h-[70vh] md:h-[80vh] lg:h-screen'>
          <div className='w-[5px] h-[5px] md:w-[10px] md:h-[10px] lg:w-[20px] lg:h-[20px] bg-white  shadow-[0_0_400px_166px_rgba(255,255,255,0.75),0_0_400px_166px_#f6eed5] rounded-full border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <RenderModel>
            <ContactModel />
          </RenderModel>
        </div>
    </div>
  )
}
