
export default function DefaultProps(props) {
    return(
        <div>
            <h2>{props}</h2>
        </div>
    ) 
}

DefaultProps.defaultProps = {
    color: 'Wite'
}
