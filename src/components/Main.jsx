import Button from "./Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import heroImg from "../assets/images/heroImg.webp";
import SliderArea from "./SliderArea";
import contatoImg from "../assets/images/contato.webp";

export default function Main() {
  return (
    <main className="overflow-x-hidden">
      <section className="w-full mt-10 h-[calc(100vh-380px)]  relative max-md:mt-32  max-[420px]:mb-10 ">
        <div className="max-w-[1650px] mx-auto flex px-10 max-sm:px-5">
          <div className="flex flex-col gap-8 max-w-[600px] absolute z-50">
            <span className="text-zinc-500 font-medium">Mi Pizza</span>
            <h1 className="text-6xl font-bold text-zinc-800 max-xl:text-5xl ">
              As melhores pizzas do mercado!
            </h1>
            <h3 className="leading-8 text-zinc-500 font-light">
              Oferecemos diversos tipos de pizzas, desde doces à salgadas.
              Pizzas saborosas e da melhor qualidade. Visite-nos e descubra como
              nós podemos te surpreender!
            </h3>
            <div className="flex gap-4 items-center ">
              <Button
                label={"localização"}
                icon={<LocationOnIcon />}
                to={"#location"}
                target="_self"
              />
              <Button
                label={"contato"}
                icon={<WhatsAppIcon />}
                to={
                  "https://api.whatsapp.com/send/?phone=&text&type=phone_number&app_absent=0"
                }
              />
            </div>
          </div>

          <img
            src={heroImg}
            alt="Imagem da home"
            className="absolute w-full  left-[800px] top-30 h-full max-md:bottom-0 max-md:-top-20 max-md:left-32 max-md:h-1/2"
          />
        </div>
      </section>

      <section className="w-full mt-16 mb-10 max-lg:mt-14 max-sm:mt-44">
        <div className="max-w-[1750px] mx-auto px-10">
          <h3 className="text-3xl font-bold">Pizzas Disponíveis</h3>
          <h4 className="text-zinc-500 font-light leading-7">
            Encontre todos os produtos abaixo na MiPizza. Paixão e qualidade.
          </h4>
          <div className="px-5 mt-5 max-sm:px-0">
            <SliderArea />
          </div>
        </div>
      </section>

      <section className="w-full mt-80 h-[calc(100vh-300px)] relative flex max-lg:mb-20 max-md:mb-96">
        <div className="brightness-90 absolute -top-[200px] -right-[300px] ">
          <img
            src={contatoImg}
            alt="Imagem da parte de contato"
            className="max-h-[800px] brightness-75 rotate-[230deg] selection:bg-transparent opacity-40"
          />
        </div>
        <div className="flex gap-5 justify-center items-center flex-col mx-auto relative z-50 ">
          <div className="font-normal mb-20 max-sm:mb-10">
            <h3 className="capitalize text-5xl font-bold text-zinc-800 text-center mb-5 max-xl:text-4xl max-sm:text-3xl">
              contatos
            </h3>
            <h4 className="max-w-96 font-light max-sm:text-sm max-sm:mx-4 max-sm:text-center  ">
              Entre em contato conosco da MiPizza para pedir sua pizza, temos
              vários sabores e com o melhor preço e qualidade.
            </h4>
          </div>
          <div className="flex mt-10 justify-center items-center gap-10 max-sm:flex-col max-sm:gap-20">
            <div className="max-w-72 flex justify-center  items-center flex-col gap-7 ">
              <div className="flex flex-col justify-center items-center gap-4">
                <WhatsAppIcon sx={{ fontSize: "50px" }} />
                <span className="font-normal text-2xl">Whatsapp</span>
              </div>
              <p className="leading-7 font-light">
                Entre em contato conosco da MiPizza através do Whatsapp para
                fazer seu pedido.
              </p>
              <Button
                label={"acessar"}
                to={
                  "https://api.whatsapp.com/send/?phone=&text&type=phone_number&app_absent=0"
                }
              />
            </div>

            <div className="max-w-72 flex flex-col items-center gap-7">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <InstagramIcon sx={{ fontSize: "50px" }} />
                <span className="font-normal text-2xl">Instagram</span>
              </div>
              <p className=" leading-7 font-light">
                Entre em contato conosco da MiPizza através do Instagram para
                fazer seu pedido.
              </p>
              <Button label={"acessar"} />
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="w-full mb-20 mt-40 ">
        <div className="max-w-[1750px] mx-auto">
          <div className="mb-14 max-2xl:px-5">
            <h3 className="text-4xl font-bold text-zinc-800 mb-1 max-xl:text-3xl max-sm:mb-5 max-sm:text-2xl ">
              Localização da Loja
            </h3>

            <h4 className="text-zinc-500 font-semibold">
              Estamos prontos para te atender, com uma localização estratégica e
              de fácil acesso. Visite-nos para que possa desfrutar das melhores
              pizzas.
            </h4>
          </div>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.639019611244!2d-47.6535165236552!3d-22.70447813067408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1561c71cafecf3d%3A0x974242491a4970d9!2sPizza%20Hut%20Arei%C3%A3o%3A%20Pizzaria%2C%20Delivery%20em%20Piracicaba%20SP!5e0!3m2!1spt-PT!2sbr!4v1708979424908!5m2!1spt-PT!2sbr"
              height="450"
              style={{ border: "0" }}
              className="w-11/12 mx-auto max-sm:w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
