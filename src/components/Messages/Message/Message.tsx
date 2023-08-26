
type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = ({ message }) => {
    return (
        <div>{message}</div>
    );
}