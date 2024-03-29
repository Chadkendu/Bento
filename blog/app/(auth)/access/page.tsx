"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  GoogleLoginButton,
} from "react-social-login-buttons";
const page = () => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("Authenticated");
      router.push("/");
    }
  }, [session?.status, router]);

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          return;
        }

        if (callback?.ok) {
          router.push("/");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full flex flex-col mx-auto justify-center h-screen align-middle items-center">
      <div className="bg-white rounded-3xl p-10 flex flex-col gap-10 lg:w-[600px] w-full align-middle items-center">
        <h1 className="text-3xl uppercase font-bold text-center">
          Welcome to bento !
        </h1>
        <GoogleLoginButton onClick={() => socialAction("google")} />
      </div>
    </div>
  );
};

export default page;
