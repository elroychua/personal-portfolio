import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import elroy from "../public/elroy_ai.png";
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Elroy Chua Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">
              {`//elroychua`}
              <span className="text-teal-600">_</span>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Elroy Chua
            </h2>
            <h3 className="text-2xl py-2">
              Full Stack Developer and CS student.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              {`I have a strong interest in user experience and project
              management, enthusiastic about utilizing new technologies to drive
              positive change and solve problems. I am a committed team player with
              a strong empathetic ability and am dedicated to contributing to
              the success of the company. Let's connect!`}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={elroy} alt="elroy-ai-render" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="mt-20">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the beginning of my journey as a developer, I have been an
              intern for <span className="text-teal-500">GetPaidSG</span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I offer wide range of services from the frontend to the backend
              programming.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                alt="design-image"
                class="mx-auto"
                src={design}
                width="100"
                height="100"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">UX Designer</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs according to
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-600 py-1">Adobe XD</p>
              <p className="text-gray-600 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                alt="design-image"
                class="mx-auto"
                src={code}
                width="100"
                height="100"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front-end Developer
              </h3>
              <p className="py-2">
                Designing, implementing and maintainings user interface of
                websites and applications.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-600 py-1">ReactJS</p>
              <p className="text-gray-600 py-1">NextJS</p>
              <p className="text-gray-600 py-1">NodeJS</p>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">HTML</p>
              <p className="text-gray-600 py-1">CSS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="py-2">
              {`Since the beginning of my journey as a developer, I've done freelance work for agencies
            and development for startups.`}
            </p>
          </div>
          <div>
            {/* <div>
              <Image src={web1} alt="appetizer-hackathon" />
            </div>
            <div>
              <Image src={web1} alt="appetizer-hackathon" />
            </div>
            <div>
              <Image src={web1} alt="appetizer-hackathon" />
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
}
