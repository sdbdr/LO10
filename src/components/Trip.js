import "./TripStyles.css"
import TripData from "./TripData";
import Paris from "../assets/paris.jpeg"

function Trip(){
    return(
        <div className="trip"> 
            <h1> Mes voyages </h1>
        <div className="tripcard">
            <TripData
                image={"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"}
                heading = " Paris "
                text = " Voyage entre amis !! "
            />
        </div>
        <div className="tripcard">
            <TripData
                image={Paris}
                heading = " Paris "
                text = " Voyage entre amis !! "
            />
        </div>
        
        <div className="tripcard">
            <TripData
                image={Paris}
                heading = " Paris "
                text = " Voyage entre amis !! "
            />
        </div>
        </div>
    )
}

export default Trip;