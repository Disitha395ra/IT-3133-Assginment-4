export default function Name(props) {
    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <td>Animal Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.animalName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
