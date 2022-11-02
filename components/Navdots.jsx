

const Navdots = ({ selected }) => {
  return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col bg-transparent">
          {[
            "home",
            "about",
            "portfolio",
            "skills",
            "testamonials",
            "contact",
          ].map((item, key) => {
            return (
                <a
                  className={`block w-[15px] h-[15px]  rounded-full m-1 ${
                    item == selected ? "bg-blue" : "bg-yellow1"
                  }`}
                  key={key}
                  href={`#${item}`}
                ></a>
            );
          })}
        </div>
  );
};

export default Navdots;
