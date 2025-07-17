export default function Landing(props) {
  return (
    <div className="landing">
      <div className="container grid items-center h-screen grid-cols-1 min-sm:grid-cols-2 gap-5 p-3">
        <div className="max-sm:text-center">
          <h1 className="main-c text-5xl min-lg:text-7xl font-bold">
            Hi, I'm FAres Yasin
          </h1>
          <p className="text-c  max-w-125 text-[20px] max-sm:m-auto max-sm:mb-5 max-sm:mt-5 mb-6 mt-6">
            A passionate Frontend Developer specializing in creating elegant and
            responsive web experiences with HTML, CSS, JavaScript, and React.
          </p>
          <div className="btns flex gap-5 items-center max-sm:justify-center">
            <a
              href="#projects"
              className="block orange w-fit p-2 pl-5 pr-5 rounded-md text-white"
            >
              View My Projucts
              <i class="fa-solid fa-arrow-right-long ml-3"></i>
            </a>
            <a
              href="#contact"
              className="block bg-blue-500 w-fit p-2 pl-5 pr-5 rounded-md text-white"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="ml-auto mr-auto w-full">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}
