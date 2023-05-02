const getDate =()=>{
    return new Date().getFullYear()
}
const Footer =()=>{
    getDate()
    return(
        <footer >
            <small>
                &copy; WavecutStudios {getDate()}
            </small>
        </footer>
    )
}

export default Footer;