export default function names(props){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Animal Name</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.animals.map( animal=>(
                            <td>{animal.name}</td>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}