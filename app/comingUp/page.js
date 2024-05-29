import Image from 'next/image'


const ComingUp = () => {
  return (
    <div className="mx-auto  h-full min-h-[700px] max-w-7xl">
      <Image 
        src='/images/letny-tabor-plagat.jpg'
        alt="plagat o bliziacom sa letnom tabore pre deti"
        width={500}
        height={500}
      />
    </div>
  )
}

export default ComingUp