import Button from "./Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Slider({ info }) {
  return (
    <div className="keen-slider__slide  h-[400px] border-b-[6px] border-[#ed2020] shadow-xl shadow-black/40">
      <img
        className="w-full h-36 transition-all duration-500 object-cover hover:scale-110"
        src={info.img}
        alt="Imagem de uma pizza"
      />
      <div className="px-9">
        <h2 className="py-8 font-semibold text-2xl">{info.title}</h2>
        <h4 className="font-medium text-zinc-500">{info.subtitle}</h4>
        <div className="flex justify-between items-center mt-14  max-sm:mt-12">
          <span className="text-zinc-400 font-light max-sm:text-sm">
            Entre em contato conosco
          </span>
          <Button
            icon={<WhatsAppIcon sx={{ fontSize: "35px" }} />}
            to="https://api.whatsapp.com/send/?phone=&text&type=phone_number&app_absent=0"
          />
        </div>
      </div>
    </div>
  );
}
