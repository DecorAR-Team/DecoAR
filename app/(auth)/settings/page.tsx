import AccountSettings from "@/app/ui/settings/accountSettings";
import { getUserSession } from "@/app/lib/session";


export default async function Settings () {
  
  const user = await getUserSession();


  return (
    <div>
        <AccountSettings user={user} />
    </div>
  );
}
