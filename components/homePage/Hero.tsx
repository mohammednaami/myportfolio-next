import Image from 'next/image';
import me from 'public/me/me.jpg'

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-3xl lg:text-5xl font-medium">
          Hey I am Mohammed Naami 🚀
        </h1>
        <h2 className="text-3xl lg:text-5xl font-normal mt-3">
          Full-stack Developer and Online Marketing Specialist, based in
          Nuremberg, Germany 🇩🇪
        </h2>

        <a href="mailto:mohammednaami96@gmail.com" className="relative inline-block text-lg group mt-5">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get in Touch!</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"></span>
        </a>
      </div>
      <Image src={me} priority alt="Mohammed Naami" className='col-span-1 h-[500px] object-cover rounded-2xl bg-gray-100' />
    </div>
  );
}
