import { SelectedPage, ClassType} from "@/shared/types"
import imgae1 from "@/assets/image1.png"
import imgae2 from "@/assets/image2.png"
import imgae3 from "@/assets/image3.png"
import imgae4 from "@/assets/image4.png"
import imgae5 from "@/assets/image5.png"
import imgae6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"


const classes: Array<ClassType> = [
  {
    name:"Weight Training Classes",
    description: "Boost your strength and muscle mass with our expert-led Weight Training Classes. Perfect for all fitness levels, these sessions focus on proper form and technique to maximize your gains and prevent injuries.",
    image: imgae1,
  },
  {
    name:"Training Classes",
    image: imgae2,
  },
  {
    name:"Fitness Classes",
    description: "Elevate your fitness journey with our dynamic Fitness Classes. Whether you’re a beginner or an advanced athlete, our classes offer a variety of workouts designed to improve strength, endurance, and flexibility.",
    image: imgae3,
  },
  {
    name:"Adventure Classes",
    description: "Embrace the thrill of outdoor activities with our Adventure Classes. From rock climbing to hiking, these sessions are perfect for those looking to add excitement and challenge to their fitness regimen.",
    image: imgae4,
  },
  {
    name:"Ab Core Classes",
    description: "Strengthen your core and sculpt your abs with our focused Ab Core Classes. These targeted workouts are designed to tone your midsection, improve stability, and enhance your overall athletic performance.",
    image: imgae5,
  },
  {
    name:"Yoga Classes",
    description: "Find balance and tranquility with our Yoga Classes. Suitable for all levels, these sessions promote physical and mental well-being through a blend of poses, breathing exercises, and meditation techniques.",
    image: imgae6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p>
              We offer a wide variety of classes to help you reach your fitness goals.
              From high-intensity cardio to relaxing yoga, we have it all.
              Our classes are designed to be fun, challenging, and effective.
              Whether you’re a beginner or an experienced athlete,
              we have a class that’s perfect for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses