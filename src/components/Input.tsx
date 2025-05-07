
type InputPropsType = {
    callBack: () =>void

}

export const Input = ({callBack}:InputPropsType) => {
    const onChangeInputHandler = () => {
        callBack()
    }
    return(
        <input onChange={onChangeInputHandler} />
    )
}