import {useMemo} from "react";

export default function FilteredList(props){
    const filteredList = useMemo(() => props.list.filter((elements) => elements.age > 18)
        .map((elements) =>(
        <div key={elements.id}>
            <h2>Name - {elements.name}</h2>
            <h2>Age - {elements.age}</h2>
            <h2>ID - {elements.id}</h2>
        </div>
        ))
    )

    return(
        <>
            {filteredList}
        </>
    )
}
