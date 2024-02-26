export default function Button({ label, icon, to }) {
  return (
    <>
      {label && (
        <a
          href={to}
          className="text-white bg-[#ed2020] flex gap-2 max-w-[173px] justify-center items-center px-10 rounded-3xl py-2.5 transition-all duration-300
      hover:-translate-y-1.5
      max-md:px-8 max-md:py-2 max-[420px]:px-6 max-[420px]:py-1.5
      "
        >
          {icon}
          <span className="font-medium capitalize">{label}</span>
        </a>
      )}

      {!label && (
        <a
          href={to}
          className="text-white bg-[#ed2020] flex gap-2 max-w-[173px] p-3 justify-center items-center rounded-full transition-all duration-300
      hover:-translate-y-1.5
      max-md:px-8 max-md:py-2 max-[420px]:px-6 max-[420px]:py-1.5
      "
        >
          {icon}
        </a>
      )}
    </>
  );
}
