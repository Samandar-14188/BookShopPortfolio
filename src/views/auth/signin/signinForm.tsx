import CustomInput from "../../../components/mui/input";
import CustomButton from "../../../components/mui/button";

export default function SigninForm() {
  return (
    <div className="w-2/6 mx-auto mt-20 p-10 border border-solid border-gray-300 rounded-xl		 border border-solid border-gray-300 " >
      <form action="" className="flex flex-col gap-10 " >
        <CustomInput type="email" placeholder="Emailni kiriting..." className="px-5 dark:text-white" />
        <CustomInput type="number" placeholder="Telefon raqamni kiriting..." className="px-5 dark:text-white" />
        <CustomButton text="Tizimga kirish" className="dark:text-white dark:bg-blue-600"  />
      </form>
    </div>
  );
}
