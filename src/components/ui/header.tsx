import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-baseline bg-transparent gap-4 px-12 py-6">
      <div className="flex justify-center items-baseline ">
        <Image
          alt="SyncHub"
          src="/synchub.svg"
          width={0}
          height={0}
          className="w-16 h-auto object-contain"
        />
      </div>

      <div className="w-full h-[1px] bg-secondary mt-12" />

      <h1 className="font-bold text-2xl items-baseline">SyncHub</h1>
    </div>
  );
}
