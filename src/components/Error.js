export const Error = ({image,message}) => {
    // console.log(image)
    // console.log(message)
    return(
        <div className="bg-error d-flex align-items-stretch">
            <img src={image} alt="Error IMG"  className='img-Error'/>
            <div className='error-Info d-flex align-items-center'>
                <p className='fs-1'>{message}</p>
            </div>
        </div>
    )
}