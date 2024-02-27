import Logo from "../assets/images/logo.webp";
import Button from "./Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  return (
    <header className="w-full pt-7">
      <div className="mx-auto max-w-[1800px]">
        <div className="flex justify-between items-center mx-5">
          <span className="text-[#ed2020] font-semibold text-3xl max-[420px]:text-2xl">
            Mi Pizza
          </span>
          <Button
            label={"contato"}
            to={
              "https://api.whatsapp.com/send/?phone=&text&type=phone_number&app_absent=0"
            }
            icon={<WhatsAppIcon sx={{ fontSize: 27 }} />}
          />
        </div>
        <div className="flex items-center max-[420px]:mt-5">
          <hr className="flex-1 bg-red-400 border-1 border-zinc-300" />
          <span className="px-10">
            <img
              src={Logo}
              alt="Imagem da logo"
              className="w-20 max-md:w-16 max-[420px]:w-14"
            />
          </span>
          <hr className="flex-1 bg-red-400 border-1 border-zinc-300" />
        </div>
      </div>
    </header>
  );
}
