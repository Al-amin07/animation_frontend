import Image from "next/image";

export default function DigitalPartner() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div className="">
          <h1 className="text-5xl  md:text-6xl font-semibold">
            Your Digital Partner
          </h1>

          <p className="text-xl mb-20 mt-10 text-gray-600 leading-relaxed">
            We partner with companies of all sizes to solve complex business
            challenges and define their digital strategies and objectives that
            deliver results. We help bring ideas to life and create brands,
            websites & digital products that work.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {["BBC", "BMW", "Costa"].map((brand) => (
                  <div
                    key={brand}
                    className="w-16 h-16 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt={`${brand} logo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xl text-gray-500">
                Brands who&apos;ve trusted us...
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" flex items-end">
          <div className=" bg-[#ECF1F4] rounded-3xl  px-8 py-16  ">
            <div className="grid py-6 grid-cols-2 gap-12 w-full">
              <div className="space-y-2 flex flex-col items-center">
                <p className="text-6xl font-medium">20</p>
                <p className="text-lg text-gray-600 text-nowrap">
                  Years on the market
                </p>
              </div>
              <div className="space-y-2  border-l-2 border-slate-400 flex flex-col items-center  pl-12">
                <p className="text-6xl font- font-medium">500</p>
                <p className="text-lg text-gray-600 text-nowrap">
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
