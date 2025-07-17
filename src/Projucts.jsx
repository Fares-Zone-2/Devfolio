export default function Projucts(props) {
  return (
    <section id="projects" className="pt-25 pb-25">
      <div className="text-center">
        <h1 className="text-4xl font-bold main-c mb-4">My Projucts.</h1>
        <p className="text-c text-[20px] m-auto">
          A glimpse into my journey, skills, and passion for frontend
          development.
        </p>
      </div>
      <div className="container grid grid-cols-1 min-lg:grid-cols-2 mt-20 gap-10 max-sm:p-2">
        {props.obj.map((b) => (
          <div className="div shadow rounded-tl-[10px] rounded-tr-[10px] hover:shadow-2xl transition-shadow">
            <div className="img h-75 relative overflow-hidden">
              <img
                className=" rounded-tl-[10px] rounded-tr-[10px] absolute top-0 left-0"
                src={b.img}
                alt=""
              />
            </div>
            <div className="p-4 bg-white">
              <h1 className="main-c text-xl mb-4 block mt-4 hover:text-[#f5993d]">
                {b.title}
              </h1>
              <ul className="flex flex-wrap gap-3 mt-2">
                {b.tick.map((t) => (
                  <li className="text-c text-sm bg-[#eee] pl-2 pr-2 rounded-2xl">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-c mt-4 mb-4">{b.p}</p>
            </div>
            <div
              className="btns p-6 max-sm:text-center
            text-right bg-[#eee] rounded-bl-[10px] rounded-br-[10px]"
            >
              <a
                className="border border-[#ccc] text-c rounded-md p-2 pr-2 pl-2 hover:bg-[#f5993d] hover:text-white"
                href="#"
              >
                <i class="fa-brands fa-github mr-3"></i>
                GitHub
              </a>
              <a
                className="border border-[#ccc] text-white orange rounded-md p-2 pr-2 pl-2 ml-3"
                href="#"
              >
                Live Demo
                <i class="fa-solid fa-arrow-up-right-from-square ml-5"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
