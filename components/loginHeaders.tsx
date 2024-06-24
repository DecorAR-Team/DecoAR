type LoginHeadersProps = {
    Login: string;
    Message: string;
}

export default function LoginHeaders( {Login, Message}: LoginHeadersProps ) {
    return (
      <div>
        <p>{Login}</p>
        <p>{Message}</p>     
      </div>
    )
}