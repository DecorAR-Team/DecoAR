type LoginHeadersProps = {
  Login: string;
  Message: string;
};

export default function LoginHeaders({ Login, Message }: LoginHeadersProps) {
  return (
    <div className="text-center mb-1">
      <p className="text-black font-semibold text-lg">{Login}</p>
      <p className="text-black text-4xl font-medium my-5">{Message}</p>
    </div>
  );
}
