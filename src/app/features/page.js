import { Navbar } from "@/components/Navbar";
export default function Features() {
  return (
    <main className="h-[100vh] bg-peach">
      <Navbar color="peach"></Navbar>
      <div className="sm:flex justify-center">
        <section
          name="cta-features"
          className=" w-[300px] sm:w-[500px] h-[600px]"
        >
          <div className="w-full h-full flex flex-col items-center justify-center uppercase font-black text-[4em] text-center ">
            <div className="text-delft-blue">The Tools You Need</div>
            <div className="text-cyan-500">All in One Place.</div>
          </div>
        </section>
        <section
          name="features"
          className=" w-[300px] sm:w-[600px] h-[566px] flex rounded-lg"
        >
          <div className="relative">
            <div className="absolute h-[600px] w-[600px] z-0">
              <ul className="w-full h-full relative top-[38px] px-2">
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
                <li className="w-full h-[1.5em]"></li>
                <li className="bg-payne-gray/25 w-full h-[1.5em]"></li>
              </ul>
            </div>
          </div>
          <div
            name="features-list"
            className=" border-solid  w-[300px] sm:w-1/2 p-2 border-r-4 border-delft-blue relative"
          >
            <div className="font-semibold text-xl text-delft-blue">
              Features
            </div>
            <div className="h-[2px] bg-payne-gray/75 rounded-lg"></div>

            <ul className="text-payne-gray z-30 ">
              <li className="">Basic URL Shortening</li>
              <li>Basic Analytics</li>
              <li>Limited Link History</li>
              <li>Basic Redirects</li>
              <li>Limited QR Code Generation</li>
              <li>Ads Display</li>
              <li>Custom Aliases</li>
              <li>Password Protection</li>
              <li>Link Expiration</li>
              <li>Advanced QR Code Customization</li>
              <li>Bulk Shortening</li>
              <li>Geo-targeting</li>
              <li>Device Targeting</li>
              <li>A/B Testing</li>
              <li>Branded Domains</li>
              <li>Traffic Source Insights</li>
              <li>Custom Landing Pages</li>
              <li>UTM Builder</li>
              <li>Team Access and Roles</li>
              <li>Click Heatmaps</li>
              <li>Integration with Other Platforms</li>
            </ul>
          </div>
          <div
            name="lite-features"
            className=" w-[300px] sm:w-1/4 p-2 relative z-30"
          >
            <div className="font-semibold text-xl text-delft-blue">Lite</div>
            <div className="h-[2px] bg-payne-gray/75 rounded-lg"></div>
            <ul className="text-payne-gray text-center w-full">
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>

              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
            </ul>
          </div>
          <div
            name="lite-features"
            className=" w-[300px] sm:w-1/4 p-2 relative z-30"
          >
            <div className="font-semibold text-xl text-delft-blue">Premium</div>
            <div className="h-[2px] bg-payne-gray/75 rounded-lg"></div>
            <ul className="text-payne-gray text-center w-full">
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-x"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
