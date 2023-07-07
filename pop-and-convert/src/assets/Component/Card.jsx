

const Card = ({ children, title, content, link }) => {
    return (

        <div className="card bg-white p-8 rounded box-shadow-2">
            <h3 className="card-title font-semibold text-xl pb-3">
                {title}
            </h3>
            {children}
        </div>
    )
}

export default Card