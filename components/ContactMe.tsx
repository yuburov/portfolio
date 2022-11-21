import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string;
};


export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:yubur.aziz@gmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-1p justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-32">
        <h4 className="text-base md:text-2xl lg:text:4xl font-semibold text-center">
          I have got just what yon need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let&apos;s Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-xl lg:text-2xl">+996557771005</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-xl lg:text-2xl">yubur.aziz@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-xl lg:text-2xl">Mkr Tunguch d.64 kv. 24. Kyrgyzstan, Bishkek.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#F7AB0A] py-2 px-4 rounded-md text-black font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}
