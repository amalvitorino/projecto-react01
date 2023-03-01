import PropTypes from 'prop-types'
function Item({marca}){
    return(
        <li>{marca}</li>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired
}
Item.defaultProps={
    marca: "izuzu"
}
export default Item