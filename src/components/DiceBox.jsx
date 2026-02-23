export default function Dicebox(props){

    return(
        
        <div>
            <button
            onClick={() => props.hold(props.id)}
             className={`font-semibold text-xl rounded-xl shadow-lg shadow-gray-400 w-15 h-15 border border-gray-300 ${props.isHeld? "bg-[#59E391]" : "bg-white"}`}>{props.number}</button>
           
        </div>
    
    )
}