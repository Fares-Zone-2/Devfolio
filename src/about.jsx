export default function About(props) {
  const mySkills = [
    { icon: "fa-solid fa-code", skill: "HTML5 & CSS3" },
    { icon: "fa-solid fa-code", skill: "JavaScript (ES6+)" },
    { icon: "fa-solid fa-rocket", skill: "React & Next.js" },
    { icon: "fa-solid fa-palette", skill: "Tailwind CSS" },
    { icon: "fa-solid fa-mobile", skill: "Responsive Design" },
    { icon: "fa-solid fa-code", skill: "Version Control (Git)" },
  ];
  return (
    <section id="about" className="about-bg p-4 pt-25 pb-25">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold main-c mb-4">About Me.</h1>
          <p className="text-c text-[20px] m-auto">
            A glimpse into my journey, skills, and passion for frontend
            development.
          </p>
        </div>
        <div className="content grid grid-cols-1 min-lg:grid-cols-2 mt-10 gap-10">
          <div className="img">
            <img className="m-auto rounded-lg" src={props.img} alt="" />
          </div>
          <div className="tx">
            <div className="my-story p-5 rounded-[10px] bg-white">
              <h1 className="text-2xl font-bold main-c mb-5">My Story</h1>
              <p className="text-c">
                Hello! I'm FAres Yasin, a dedicated Frontend Developer with a
                keen eye for detail and a passion for crafting user-friendly,
                visually appealing web applications. My journey into web
                development was sparked by a fascination with how interactive
                experiences are built, and it has blossomed into a fulfilling
                career where I blend creativity with cutting-edge technology.
              </p>
              <p className="text-c mt-5">
                I thrive in dynamic environments, enjoy tackling new challenges,
                and am committed to continuous learning. My goal is to create
                seamless digital experiences that not only look great but also
                perform exceptionally, leaving a positive impact on users.
              </p>
            </div>
            <div className="skills p-5 rounded-[10px] bg-white mt-5">
              <h1 className="text-2xl font-bold main-c mb-5">My Skills</h1>
              <ul className="flex flex-col gap-2">
                {mySkills.map((s) => (
                  <li className="flex items-center gap-3 text-c text-lg">
                    <i
                      className={`${s.icon} text-xl main-c w-10 text-center`}
                    ></i>
                    {s.skill}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-c mt-5 italic">
              When I'm not coding, I enjoy exploring new hiking trails and
              experimenting with photography, which keeps my creative juices
              flowing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
