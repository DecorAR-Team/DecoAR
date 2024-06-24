

import { PrismaClient } from '@prisma/client'

import LoginForm from "@/components/LoginForm";

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
