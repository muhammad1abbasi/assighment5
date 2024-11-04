import Header from "@/components/header/page"

import Image from "next/image"

export default function Home () {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex h-[80%]">
        <div className="w-1/4 flex flex-col justify-center items-start m-24 space-y-5   ">
          <h1 className="text-black text-[30px] font-serif  ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="text-secondary text-[19px] font-serif  ">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className="text-white bg-primary p-2 rounded w-[164px] font-serif">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
         < Image className ="rounded-tl-[80px] rounded-br-[80px]"
         src={"/images/figmaimg.webp"}
         alt = "this is image  guys"
         width={300}
         height={300}
         
         />
        </div>
      </div>
      
      
    </div>
  )
}