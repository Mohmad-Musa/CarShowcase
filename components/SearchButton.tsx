import Image from "next/image"
const SearchButton = ({otherClasses}:{
    otherClasses:string
}) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" 
        alt="search" width={40} height={40} className=" object-contain"/>
        </button>
  )
}

export default SearchButton