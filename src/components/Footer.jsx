import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  const currentDate = new Date().getFullYear().toString();

  return (
    <footer className="mt-16 w-full bg-zinc-800 text-white ">
      <div className="max-w-[1500px] mx-auto ">
        <div className="py-8 border-b-2 border-zinc-400 flex justify-between max-2xl:px-5 max-sm:flex-col max-sm:gap-5">
          <span className="text-xl font-normal max-sm:text-lg">
            Conecte-se Conosco:{" "}
          </span>
          <div className="flex gap-3 max-sm:self-end">
            <a href="#">
              <WhatsAppIcon style={{ color: "white" }} />
            </a>
            <a href="#">
              <InstagramIcon style={{ color: "white" }} />
            </a>
          </div>
        </div>
        <div className="flex max-2xl:px-5">
          <div className="mt-14 gap-14 w-full grid grid-cols-4 max-md:grid-cols-2 max-md:gap-20 max-sm:grid-cols-1">
            <div className="flex flex-col gap-3 flex-1">
              <h5 className="uppercase text-red-500 mb-3 font-semibold">
                mipizza
              </h5>
              <p>
                Na nossa pizzaria, cada sabor é meticulosamente elaborado,
                combinando a tradição das receitas familiares com a inovação dos
                ingredientes frescos, para oferecer a experiência gastronômica
                dos seus sonhos.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1 ">
              <h5 className="uppercase text-red-500 mb-3 font-semibold">
                sabores
              </h5>
              <div
                id="pizzaFlavors"
                className="max-h-[115px] overflow-y-auto pr-2 w-32 "
              >
                <p className="capitalize">4 queijos</p>
                <p className="capitalize">banana com canela</p>
                <p className="capitalize">brigadeiro</p>
                <p className="capitalize">calabresa</p>
                <p className="capitalize">california</p>
                <p className="capitalize">frango com catupiry</p>
                <p className="capitalize">margarita</p>
                <p className="capitalize">napolitana</p>
                <p className="capitalize">pessego com pera e abacaxi</p>
                <p className="capitalize">portuguesa</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h5 className="uppercase text-red-500 mb-3 font-semibold">
                links
              </h5>
              <p>Instagram</p>
              <p>WhatsApp</p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h5 className="uppercase text-red-500 mb-3 font-semibold">
                contatos
              </h5>
              <div className="flex gap-4">
                <HomeIcon />
                <p className="inline">
                  local: Av. Limeira, 722 - Areião, Piracicaba - SP, 13414-018
                </p>
              </div>
              <div className="flex  gap-4">
                <LocalPhoneIcon />
                <p className="inline">tel: (99) 99999999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mt-10 bg-red-600 flex justify-center items-center py-5 text-zinc-800 font-medium">
        <p className="flex items-center gap-1 max-sm:text-sm max-sm:flex-col">
          <span>
            <CopyrightIcon /> {currentDate} Todos os direitos reservados -
          </span>
          <span>Desenvolvido por MiPizza</span>
        </p>
      </div>
    </footer>
  );
}
