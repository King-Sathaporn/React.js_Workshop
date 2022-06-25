

const MenuImage = ({foodName, image_url}) => {

    return (
        <div className="menu-item">
            <h2>{foodName}</h2>
            <img src={image_url} alt={foodName}/>
        </div>        
    )
}

export default MenuImage;