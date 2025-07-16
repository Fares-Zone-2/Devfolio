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
      <div className="container grid grid-cols-1 min-lg:grid-cols-2 mt-20 gap-10">
        {props.obj.map((b) => (
          <div className="div shadow rounded-tl-[10px] rounded-tr-[10px] hover:shadow-2xl transition-shadow">
            <div className="img">
              <img
                className="w-full rounded-tl-[10px] rounded-tr-[10px]"
                src={b.img}
                alt=""
              />
            </div>
            <div className="p-4 bg-white">
              <h1 className="main-c text-xl mb-4 block mt-4 hover:text-[#f5993d]">
                {b.title}
              </h1>
              <ul className="flex gap-3 mt-2">
                {b.tick.map((t) => (
                  <li className="text-c text-sm bg-[#eee]  pl-2 pr-2 rounded-2xl">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-c mt-4 mb-4">{b.p}</p>
            </div>
            <div className="btns p-6 text-right bg-[#eeee] rounded-bl-[10px] rounded-br-[10px]">
              <a
                className="border border-[#ccc] text-c rounded-md p-2 pr-3 pl-3 hover:bg-[#f5993d] hover:text-white"
                href="#"
              >
                <i class="fa-brands fa-github mr-3"></i>
                GitHub
              </a>
              <a
                className="border border-[#ccc] text-white orange rounded-md p-2 pr-3 pl-3 ml-4"
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
