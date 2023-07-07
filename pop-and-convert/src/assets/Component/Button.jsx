const Button = (props) => {
    return (
        <a className="bg-primaryColor text-white px-6 py-3 hover:opacity-80 transition-all duration-300 inline-block rounded" href={props.link}>{props.text}</a>
    )
}

export default Button