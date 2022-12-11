import IconLogo from "./assets/logo.png"
import Ilustration1 from "./assets/paimon.webp"
import Icon1 from './assets/mondo.webp'
import Icon2 from './assets/liyue.webp'
import Icon3 from './assets/inazuma1.webp'
import Ilustration2 from './assets/paimon1.webp'
import Check from './assets/check.png'

function App() {
  const menus = ['About', 'Feature', 'Pricing', 'Testimonials', 'Help'];
  const section3 = [
    {
      icon: Icon1,
      label: "Mondstadt Characters",
      total: "18",
    },
    {
      icon: Icon2,
      label: "Liyue Characters",
      total: "16",
    },
    {
      icon: Icon3,
      label: "Inazuma Characters",
      total: "14",
    },
  ]

  const feaures = ["Mondstadt", "Liyue", "Inazuma", "Sumeru"];

  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon" src={IconLogo} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 font-bold text-red-600 rounded-full py-2 px-6 hover:bg-red-500 hover:text-white hover:ease-in-out duration-500">Sign Up</button>
        </div>
      </header>
      <main className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want to playing
              <br />
              Genshin Impact
            </h1>
            <div className="font-normal text-xs pb-12">
            Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Android, iOS, PlayStation 4, and Windows in 2020, on PlayStation 5 in 2021, and is set for release on Nintendo Switch.
            </div>
            <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">Get Started</button>
          </div>
          <div>
            <img src={Ilustration1} alt="paimon"></img>
          </div>
        </div>
        <div className="grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div key={index}
                className={`flex flex-row py-4 px-8 space-x-6 justify-center ${index + 1 !== section3.length && "border-r border-gray-200"} `}>
                <div className="rounded-full bg-gray-800 p-1">
                  <img alt={val.label} src={val.icon} className="w-10 h-10" />
                </div>
                <div >
                  <div>{val.total}</div>
                  <div>{val.label}</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="grid grid-cols-2 py-24 items-center">
          <img src={Ilustration2} alt={"feature"} />
          <div className="px-16 space-y-4 ">
            <div className="font-medium text-3xl">
              We Have Many Nations To Start Adventure
            </div>
            <div className="text-sm font-normal">
              Now we have 4 nations available.
            </div>
            {
              feaures.map((val, index) => {
                return <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={Check}
                    alt="check"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              })
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
