import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  // test error ui
  // throw new Error("this is an error");
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}
