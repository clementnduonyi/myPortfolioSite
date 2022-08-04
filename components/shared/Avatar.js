


const Avatar = ({image, title, date }) => {
    return(
        <div className="media avatar-box mb-2">
            <img className="mr-2" src={image} />
            <div className="media-body align-self-center mt-3 ms-1">
                <h5 className="mt-0 mb-0 fs-6">{title}</h5>
                <p className="mt-0 subtitle">{new Date(date).toDateString()}</p>
            </div>
        </div>
    )
}

export default Avatar;