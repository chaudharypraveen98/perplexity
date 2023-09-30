import { useEffect, useState } from "react";
import { EditIcon, MainLogo } from "../components/svg";
import { useUser } from "../context/UserContext";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Onboarding() {
  const { user, login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState(user?.email);
  console.log("email", email);
  useEffect(() => {
    setEmail(user?.email);
  }, [user?.email]);

  const handleUpdate = () => {
    const profileData = { ...user, username: email };
    login(profileData);
    toast.success("Profile Updated successfully!!");
    navigate("/");
  };

  return (
    <div className="w-full bg-offset h-screen">
      {/* <MainLogo /> */}
      <div className="mx-auto px-md max-w-screen-md flex items-center justify-center h-full">
        <div className="rounded-lg p-lg w-full border-borderMain/60  divide-borderMain/60  ring-borderMain bg-background">
          <div className="pb-md border-b grid grid-cols-3 mb-lg border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent">
            <div className="flex items-center gap-x-sm justify-start">
              <div className="">
                <div className="h-auto group  w-6 md:w-8">
                  <MainLogo />
                </div>
              </div>
              <div className="default font-sans text-base font-medium text-textMain  selection:bg-superDuper selection:text-textMain">
                Sign Up
              </div>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex gap-x-sm items-center justify-center rounded-full px-sm border-borderMain/60 divide-borderMain/60  ring-borderMain bg-transparent">
                <div
                  id="step1"
                  className="rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60 ring-borderMain bg-textMain"
                ></div>
                <div
                  id="step2"
                  className="rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60  ring-borderMain bg-offset "
                ></div>
                <div
                  id="step3"
                  className="rounded-full h-3 w-6 border-borderMain/60  divide-borderMain/60 ring-borderMain bg-offset "
                ></div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-super text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out select-none relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-base px-md font-medium h-10"
                onClick={() => handleUpdate()}
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <div className="text-align-center relative">Continue</div>
                </div>
              </button>
            </div>
          </div>
          <h1 className="mb-lg space-y-xs default font-display text-2xl md:text-3xl text-textMain selection:bg-superDuper selection:text-textMain">
            Create your account
          </h1>
          <div className="border-borderMain/60 ">
            <div className="light font-sans text-sm text-textOff selection:bg-superDuper selection:text-textMain">
              Avatar
            </div>
            <div className="aspect-square overflow-hidden flex items-center justify-center  w-[80px] mt-sm relative">
              <img
                alt="User avatar"
                className="w-full h-auto rounded-full"
                src={user?.picture}
              />
              <div
                className="absolute bottom-0 right-0"
                onClick={() =>
                  window.alert(
                    "Sorry but not implemented. It can be easily implemented by hidden file input."
                  )
                }
              >
                <button className="bg-offsetPlus text-sm h-8 w-8 rounded-full text-textMain justify-center items-center flex">
                  <EditIcon className="h-[1em]" />
                </button>
              </div>
            </div>
            <div className="space-y-sm mt-md max-w-md">
              <div className="light font-sans text-sm text-textOff  selection:bg-superDuper selection:text-textMain">
                Username
              </div>
              <div className="rounded-full">
                <div className="relative flex items-center">
                  <input
                    placeholder={email}
                    className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center  selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pr-md"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div></div>
                  <div className="absolute flex items-center gap-sm bg-background rounded-full right-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
