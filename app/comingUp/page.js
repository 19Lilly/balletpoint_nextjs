import Image from 'next/image'


const ComingUp = () => {
  return (
    <div className="mx-auto min-h-[500px] max-w-7xl">
      <Image 
        src='/images/letny-tabor-plagat.jpg'
        alt="plagat o bliziacom sa letnom tabore pre deti"
        width={500}
        height={0}
      />
    </div>
  )
}

export default ComingUp