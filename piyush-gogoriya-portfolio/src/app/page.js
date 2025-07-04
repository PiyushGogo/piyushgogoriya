import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (<>  
        < Header />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold mb-2 text-white">Piyush Gogoriya</h1>
            <p className="text-lg text-gray-700 mb-4">Full Stack Developer</p>
            <p className="text-md text-gray-600 mb-6">
              Passionate about building scalable web applications and exploring new technologies.
            </p>
            </div>
             <div className="text-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Piyush Gogoriya</h1>
            <p className="text-lg text-gray-700 mb-4">Full Stack Developer</p>
            <p className="text-md text-gray-600 mb-6">
              Passionate about building scalable web applications and exploring new technologies.
            </p>
            </div>
             <div className="text-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Piyush Gogoriya</h1>
            <p className="text-lg text-gray-700 mb-4">Full Stack Developer</p>
            <p className="text-md text-gray-600 mb-6">
              Passionate about building scalable web applications and exploring new technologies.
            </p>
            </div>
             <div className="text-center bg-gray-800 min-w-screen min-h-screen flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold mb-2">Piyush Gogoriya</h1>
            <p className="text-lg text-gray-700 mb-4">Full Stack Developer</p>
            <p className="text-md text-gray-600 mb-6">
              Passionate about building scalable web applications and exploring new technologies.
            </p>
            </div>
        </div>
            
      </>
  );
}
