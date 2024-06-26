import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our establishment boasts state-of-the-art facilities designed to provide an unparalleled experience for our guests. From the moment you step through our doors, you'll be greeted by a fusion of modern design and traditional elegance. Our facilities include cutting-edge technology and luxurious amenities, ensuring comfort, efficiency, and satisfaction at every turn.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Discover an extensive range of classes catering to diverse interests and skill levels. From art and technology to wellness and business, explore hundreds of unique learning opportunities designed to inspire and engage. Join our vibrant community and unlock your potential with our diverse class offerings.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Learn from the best with our expert and pro trainers. Our highly skilled instructors bring years of experience and professional expertise to every class, ensuring you receive top-notch guidance and training. Elevate your skills and achieve your goals with the support of our exceptional trainers.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world-class fitness equipment, trainers, and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Our members enjoy unparalleled services and benefits that cater to their unique needs and preferences. Whether it's through our innovative solutions, personalized experiences, or top-notch customer support, we ensure that every interaction leaves our members delighted and eager for more. Join us and be part of the millions who are experiencing true happiness and fulfillment in every aspect of their journey with us.
              </p>
              <p className="mb-5">
                With a commitment to excellence and continuous improvement, we strive to exceed expectations and foster a sense of belonging among our members. Our platform is designed to bring joy and satisfaction, making everyday experiences extraordinary for millions around the world.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
