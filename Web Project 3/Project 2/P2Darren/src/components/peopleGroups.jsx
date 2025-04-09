import PeopleModal from "./peopleModal"

const PeopleGroup=({title, obj})=>{
    return(
        <>
             <h3>{title}</h3>
            <div className="peopleList">
                {obj.map((p) =>
                    <div className="peopleListItem" key={p.username}>
                        <img src={p.imagePath} alt="thisPerson"></img>
                        <PeopleModal {...p} />
                    </div>
                )}
            </div>
        
        </>
    )
}

export default PeopleGroup;