export default (Contact) => {
  return (
    <section id="contact" className="about-bg p-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold main-c mb-4">Get In Touch</h1>
        <p className="text-c text-[20px] m-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </div>
      <div className="container">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-fit m-auto mt-30">
          <h1 className="text-2xl font-bold main-c mb-1 w-fit m-auto">
            Let's Connect
          </h1>
          <p className="text-c text-sm w-fit m-auto">
            Feel free to reach out through any of the platforms below.
          </p>
          <ul className="mt-10 mb-10">
            <li className="flex items-center cursor-pointer p-5 rounded-md hover:bg-[#f5993d15] text-c text-lg">
              <i class="fa-solid fa-envelope text-[#f5993d] mr-4"></i>
              fr.yasin.dev@gmail.com
            </li>
            <li className="flex items-center cursor-pointer p-5 rounded-md hover:bg-[#f5993d15] text-c text-lg">
              <i class="fa-brands fa-linkedin text-[#f5993d] mr-4"></i>
              linkedin.com/in/fa_yasin
            </li>
            <li className="flex items-center cursor-pointer p-5 rounded-md hover:bg-[#f5993d15] text-c text-lg">
              <i class="fa-brands fa-github text-[#f5993d] mr-4"></i>
              github.com/fr_yasin
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
