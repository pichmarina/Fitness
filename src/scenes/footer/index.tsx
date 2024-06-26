import Logo from "@/assets/Logo.png";

const Footer= () => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo"/>
          <p className="my-5">
            Transform your body, elevate your mind. Every step forward is a step towards a healthier, stronger you.
          </p>
          <p>
            © 2024 Evogym All rights reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">With Us</h4>
          <p className="my-5">
            Elevate Your Fitness Journey with EvoGym – Where Strength Meets Innovation.
          </p>
          <p className="my-5">
            Redefining Fitness with Cutting-Edge Workouts and Expert Guidance.
          </p>
          <p className="my-5">
            Confidence with Evogym
          </p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Email: marina@gmail.com
          </p>
          <p>
            Phone Number:
            (+855) 93-783-777
          </p>

        </div>
      </div>

    </footer>
  )
}

export default Footer