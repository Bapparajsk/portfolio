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
          <RenderModel isMainModel={true}>
            <ContactModel />
          </RenderModel>
        </div>
    </div>
  )
}
