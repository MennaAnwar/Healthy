import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import PasskeyModal  from '@/components/PasskeyModal';


export default function Home({ searchParams }: SearchParamProps) {
    const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal/>}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] ">
          <div className="logo mb-12 flex items-center">
            <Image
              src="/assets/icons/logo.png"
              height={50}
              width={50}
              alt="patient"
              className="me-4"
            />
            <h1 className="font-extrabold text-2xl text-blue-100">HEALTHY</h1>
          </div>
          <PatientForm />
        </div>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Healthy
          </p>
          <Link href="/?admin=true" className="text-blue-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        src="/assets/images/doctor.avif"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
