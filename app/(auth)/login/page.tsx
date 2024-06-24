import LoginHeaders from "@/components/loginHeaders";

export default function Login() {
  const loginText = 'Login';
  const messageText = 'Welcome Back';

  return (
    <main >
     
    <LoginHeaders Login={loginText} Message={messageText}/>
    

      <div>
        <p>{`Don't have an account?`}</p>
          <span>Sign up</span>
      </div>
      {/* <p> {error ? error  || 'Something went wrong logging in...' : ''} </p> */}
  </main>
  );
}