import useMediaQuery from "@/hooks/useMediaQuerys";
import ActionButton from "@/shared/ActionButtons";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and madin header  */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <img alt="home page text" src={HomePageText} />
            </div>
          </div>
          <p>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>
        {/* actions */}
        <div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold bg-primary-500 underline"
            onClick={() => {
              setSelectedPage(SelectedPage.ContactUs);
            }}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
        {/* image */}
        <div>
          <img alt="home page grapic" src={HomePageGraphic} />
        </div>
      </div>
      {/* sponsors */}
      <div></div>
    </section>
  );
};

export default Home;
