import getCurrentUser from "../actions/getCurrentUser";
import CreateForm from "@/components/shared/CreateForm";
const page = async () => {
  const user = await getCurrentUser();
  return (
    <div className="w-full">
      <CreateForm user={user} />
    </div>
  );
};

export default page;
