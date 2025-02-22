import { RenderModel } from '../RenderModel'
import { ContactModel } from '../models/contactEarthModel'

export default function ContactCard() {
  return (
    <div className='w-full h-full flex items-center justify-center gap-2 z-10'>
        <div className='w-1/2 h-full border'>
          
        </div>
        <div className='relative w-1/2 h-screen border'>
          <div className='w-[50px] h-[50px] bg-white shadow-[0_0_400px_166px_rgba(255,255,255,0.75),0_0_400px_166px_#f6eed5] rounded-full border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          <RenderModel>
            <ContactModel />
          </RenderModel>
        </div>
    </div>
  )
}
