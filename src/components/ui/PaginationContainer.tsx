import PaginationItem from "./PaginationItem"

export default function PaginationContainer({totalPages, activePage}: {totalPages: number, activePage: number}){
    const items = []
    if(totalPages <= 8) {
        for(let i = 0; i < totalPages; i++){
            items.push(<PaginationItem active={activePage === i+1} key={i} label={i + 1}/>)
        }
        return <>{items}</>
    } else if(totalPages >= 9){
        for(let i = 0; i < 8; i++){
            items.push(<PaginationItem active={activePage === i+1} key={i} label={i + 1}/>)
        }
        items.push(<Dots />)
        items.push(<PaginationItem active={false} label={totalPages}/>)
        return items   
    }
}

function Dots(){
    return(
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
        ...
      </span>
    )
}