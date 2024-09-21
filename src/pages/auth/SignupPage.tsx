import { AuthLayout } from "@/layout/AuthLayout";
import GImage from "../../assets/Google.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodType } from "zod";

type FormInfo = {
  name: string;
  email: string;
  password: string;
};

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const schema: ZodType<FormInfo> = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(5, "Password must have least of 5 characters").max(20, "Password cant exceed 20 characters")
  });

  const { register, handleSubmit,
    formState: { errors }
  } = useForm<FormInfo>({ resolver: zodResolver(schema) })


  const submitData = (data: FormInfo) => {
    console.log("submitted success", data)
  }
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-3 w-full max-w-[371px]">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[30px] lg:text-[36px] font-medium">Create an account</h1>
          <p className="text-[16px] font-normal">Enter your details below</p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Name"
            id="name"
            required
            {...register("name")}
            className="border-b border-gray-400 text-lg px-4 py-4 outline-none w-full"
          />
          {errors.name && <span className="text-red-500 font-bold">{errors.name.message}</span>}

          {/* Email Field */}
          <input
            type="text"
            placeholder="Email"
            id="email"
            required
            {...register("email")}
            className="border-b border-gray-400 text-lg px-4 py-4 outline-none w-full bg-transparent"
          />
          {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              {...register("password")}
              id="password"
              className="border-b border-gray-400 text-lg px-4 py-4 outline-none w-full"
            />
            {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
            <button
              className="absolute inset-y-0 right-0 px-2 py-2 text-gray-400"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <button
            type="submit"
            className="bg-[#DB4444] py-4 lg:px-32 rounded-sm w-full text-white text-[16px] font-medium"
          >
            Create Account
          </button>

          <div className="w-full border border-gray-400 py-4 lg:px-[86px] rounded-sm cursor-pointer">
            <div className="flex items-center gap-3 w-[199px] mx-auto">
              <img src={GImage} width="24px" height="24px" alt="google-icon" />
              <p className="font-normal">Sign up with Google</p>
            </div>
          </div>

          <div className="flex items-center w-[248px] mx-auto gap-2">
            <h2 className="font-normal text-[16px]">Already have an account?</h2>
            <Link to="/login">
              <p className="font-normal text-[16px] cursor-pointer">Login</p>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>

  );
};


      

export default SignUP;
