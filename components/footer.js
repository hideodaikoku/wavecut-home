const getDate =()=>{
    return new Date().getFullYear()
}
const Footer =()=>{
    getDate()
    return(
        <footer className="flex justify-center my-5">
            <small className="text-center">
                &copy; WavecutStudios {getDate()}
            </small>
        </footer>
    )
}

export default Footer;