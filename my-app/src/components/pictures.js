export default function Pictures(props) {
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <td>Animal Pictures</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.animals.map((animal) => (
                            <td key={animal.name}>
                                <img
                                    src={require(`../images/${animal.img}`)} 
                                    alt={animal.name}
                                    onClick={() => props.handleSelection(animal.name)} 
                                    style={{ width: "100px", height: "100px", cursor: "pointer" }}
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
