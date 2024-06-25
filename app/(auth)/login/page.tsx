

import LoginForm from '@/app/ui/auth/login/loginForm';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export default function Login() {

  const allUsers = async () => {  
  try {
    const Users = await prisma.user.findMany() 
    console.log(Users);
    
  } catch (e) {
    console.log(`There has been an error with allUsers: ${e}`);
  }
  }

  allUsers();

  

  return (
    <LoginForm />
  );
}
