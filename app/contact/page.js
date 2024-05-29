

const Contact = () => {
    return (
      <div className=' mx-auto  h-full min-h-[700px] max-w-7xl w-full  space-y-8'>
        <h2 className='text-4xl font-bold'>Kontakt</h2>
        <div className='flex gap-16'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.620582012551!2d17.04990547702154!3d48.19466144718453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8d5fd4469fbf%3A0xa57bfaef1346bc5b!2zVGFuZcSNbsOhIMWha29sYSBEYW5jZXJz!5e0!3m2!1sen!2ssk!4v1717015128744!5m2!1sen!2ssk'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen='true'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='flex flex-col text-xl justify-center'>
            <div className='flex gap-4'>
              <h3 className='font-bold text-fuchsia-600'>Prevádzkovateľ:</h3>
              <p>Ballet point o.z.</p>
            </div>
            <div className='flex gap-4'>
              <h3 className='font-bold text-fuchsia-600'>IČO:</h3>
              <p>xxxxxxxx</p> {/*doplniť */}
            </div>
            <hr className="m-6 w-full" />
            <div className="flex gap-4">
                <h3 className="font-bold text-fuchsia-600">Mobil:</h3>
                <a href="tel:+421">+421 9xx xxx xxx</a>
            </div>
            <div className="flex gap-4">
                <h3 className="font-bold text-fuchsia-600">Email:</h3>
                <a href="mailto:">balletpoint@balletpoint.sk</a>
            </div>
            <hr className="m-6 w-full" />
            
          </div>
        </div>
      </div>
    );
}

export default Contact;