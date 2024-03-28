import { Link, useNavigate } from "react-router-dom";
// Icon
import { GoogleIcon, TrophyIcon, StarIcon } from "../../assets/icons";

// Redux
// import { useSelector } from "react-redux";

const Hero = () => {
    const account = true;
//   const { account } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative w-full">
      <h2 className="text-blue text-2xl sm:text-3xl md:text-5xl font-bold w-full p-1 sm:p-0 sm:w-4/5 mx-auto text-center mt-20">
        Get tailored <span className="text-secondary">designs</span> that
        resonates with your brand's identity, audience, and presence
      </h2>
      <h4 className="text-blue sm:text-lg md:text-3xl w-full sm:w-2/3 mx-auto text-center mt-5">
        Readiily helps your brand increase visibility, engagement, leads, and
        revenue through captivating designs that address target market real-time
        need with prompts.
      </h4>
      <StarIcon className="absolute top-24 sm:top-20 left-1 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-secondary" />
      <TrophyIcon className="absolute top-[30%] sm:top-[35%] rotate-45 right-1 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-secondary" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        <button
          className="flex justify-center items-center gap-1 md:gap-2 pr-2 border border-black rounded-md bg-white text-black font-semibold"
          onClick={() => {
            if (!account) {
              window.open(
                window.location.origin + "/api/v1/auth/login/google",
                "_self"
              );
            } else {
              navigate("/dashboard");
            }
          }}
        >
          <span className="border border-black p-2 sm:p-3 border-t-0 border-b-0 border-l-0">
            <GoogleIcon className="w-6 h-6" />
          </span>
          <span className="sm:text-lg">Start free with Google</span>
        </button>
        <Link
          to={account ? "/dashboard" : "/auth?signup=true"}
          className="px-9 md:px-4 py-2 border border-blue rounded-md font-semibold text-blue sm:text-lg"
        >
          Start free with email
        </Link>
      </div>
    </section>
  );
};

export default Hero;