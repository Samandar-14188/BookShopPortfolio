import CustomInput from "../../../components/mui/input";
import CustomButton from "../../../components/mui/button";

export default function SignupForm() {
  return (
    <div className="w-2/6 mx-auto mt-10 p-10 border border-solid border-gray-300 rounded-xl dark:bg-slate-800 ">
      <form action="" className="flex flex-col gap-10 ">
        <CustomInput
          type="text"
          placeholder="Ismni kiriting..."
          className="px-5 dark:text-white"
        />
        <CustomInput
          type="text"
          placeholder="Familyani kiriting..."
          className="px-5 dark:text-white"
        />
        <CustomInput
          type="email"
          placeholder="Emailni kiriting..."
          className="px-5 dark:text-white"
        />
        <CustomInput
          type="number"
          placeholder="Telefon raqamni kiriting..."
          className="px-5 dark:text-white"
        />
        <CustomButton text="Tizimga kirish" className="dark:bg-blue-600 dark:text-white" />
      </form>
    </div>
  );
}
