import authenticate from "@/utils/authenticate";
import connectToDB from "@configs/database";
import UserModel from "@models/User";
import { UserRound } from "lucide-react";
import Image from "next/image";

const UserInfo = async () => {
  await connectToDB();

  const authenticatedUser = (await authenticate()) as { phone: string };

  const user = await UserModel.findOne({
    phone: authenticatedUser.phone,
  }).lean();

  return (
    <div className="flex items-center w-full justify-center md:justify-start gap-2">
      {user?.profileImage ? (
        <Image
          className="w-16 h-16 md:w-20 md:h-20 object-cover object-center border shadow-sm rounded-full"
          src={user.profileImage}
          alt="user image"
          height={100}
          width={100}
          priority
        />
      ) : (
        <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border shadow-sm rounded-full bg-muted text-muted-foreground">
          <UserRound className="size-2/3" />
        </div>
      )}

      <div className="text-sm md:text-base">
        <h1 className="font-semibold line-clamp-1">
          {user?.name} {user?.familyName}
        </h1>

        <p>{user?.phone}</p>
      </div>
    </div>
  );
};

export default UserInfo;
