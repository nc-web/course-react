
export default function DefaultProps(props) {
    return(
        <div>
            <p>Default Prop Width: {props.width}</p>
            <p>Default Prop Height: {props.height}</p>
            <p>Default Prop Color: {props.color}</p>
            <p>Default Prop Background Color: {props.backgroundColor}</p>
        </div>
    ) 
}

DefaultProps.defaultProps = {
    width: 100,
    height: 100,
    color: 'White',
    backgroundColor: 'Gray'
}
