export default function pictures(props){
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <td>Animal Pictures</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.animals.map(animal=>(
                            <tr rowspan="10">
                                <td>
                                    <img src={require('../images/1.jpg')} alt="animal-pictures" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}