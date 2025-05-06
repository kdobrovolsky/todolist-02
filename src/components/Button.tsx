
type ButtonPropsType = {
    title: string
    handleOnClick?: () => void
}

export const Button = ({title, handleOnClick}:ButtonPropsType) => {

    return(
        <button onClick={handleOnClick}>{title}</button>
    )
}