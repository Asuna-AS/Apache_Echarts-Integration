import React, { useState } from "react";
import "./App.css";
import Sanky from "./sanky";
import Sunburst from "./sunburst";

function App() {
  const [chart, setChart] = useState(2);
  console.log(chart)
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      {/*Header */}
      <header className="flex h-16 bg-black p-2 text-white items-center justify-center">
        Adding right click event to Apache Echarts
      </header>
      {/* body */}
      {chart == 2 ?
        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center">
          <button
            onClick={(e) => {
              setChart(0);
            }}
            className="hover:bg-gray-300 flex flex-col gap-4 w-[30vh] rounded-xl border-gray-400 border p-4 items-center justify-center h-[30vh]"
          >
            <span className="text-xl">Sanky</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="80px"
              height="80px"
              viewBox="0 0 32 32"
              id="icon"
            >
              <defs></defs>
              <path d="M28,2V8.0439c-1.9634.1968-6.3162,1.2325-10.5637,6.2764-.198-.2768-.3982-.5464-.5882-.8506C11.9736,5.6714,6.3191,4.2759,4,4.042V2H2V30H4V26.0464a14.8661,14.8661,0,0,0,9.9185-3.96C18.47,27.46,25.2363,28.0381,27.9341,28.0381c.0244,0,.0422-.001.0659-.001V30h2V2Zm0,8.0552v9.99a12.8834,12.8834,0,0,1-9.2756-4.1328C22.5032,11.2666,26.2915,10.26,28,10.0552ZM15.1519,14.53c.3242.5185.663.9907,1.0078,1.4409-.3384.4741-.6753.9707-1.0078,1.5029a16.1346,16.1346,0,0,1-1.0313,1.4531c-.0825-.1372-.1675-.27-.2466-.4126C9.3279,10.3315,5.7871,8.4438,4,8.0684V6.0508C5.9932,6.2905,10.8228,7.6035,15.1519,14.53ZM4,24.0488V10.1406c1.3254.4644,4.2034,2.2847,8.126,9.3448.1894.3413.396.6523.6.9667A12.8784,12.8784,0,0,1,4,24.0488Zm11.3179-3.4209a18.0563,18.0563,0,0,0,1.53-2.0937c.2212-.354.4454-.67.6687-.9951A14.8686,14.8686,0,0,0,28,22.0425v3.9863C25.67,26.019,19.374,25.5088,15.3179,20.6279Z" />
              <rect
                id="_Transparent_Rectangle_"
                data-name="&lt;Transparent Rectangle&gt;"
                fill="none"
                width="32"
                height="32"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              setChart(1);
            }}
            className="hover:bg-gray-300 flex flex-col gap-4 w-[30vh] rounded-xl border-gray-400 border p-4 items-center justify-center h-[30vh]"
          >
            <span className="text-xl">Sunburst</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 32 32"
            >
              <path
                id="chart--sunburst_1_"
                d="M16,31.36c-4.103,0-7.96-1.598-10.861-4.499c-0.141-0.141-0.141-0.369,0-0.51l3.289-3.288  c-1.652-1.771-2.693-4.118-2.782-6.704H1c-0.199,0-0.36-0.161-0.36-0.36c0-4.103,1.597-7.959,4.498-10.86  c0.027-0.027,0.059-0.05,0.093-0.067c0.185-0.093,0.227-0.107,3.704,3.357c1.77-1.653,4.119-2.694,6.705-2.783V1  c0-0.199,0.161-0.36,0.36-0.36c8.47,0,15.36,6.89,15.36,15.36c0,0.199-0.161,0.36-0.36,0.36h-4.646  c-0.187,5.427-4.566,9.807-9.994,9.994V31C16.36,31.199,16.199,31.36,16,31.36z M5.906,26.604c2.646,2.523,6.078,3.944,9.734,4.032  v-4.282c-2.585-0.089-4.934-1.129-6.704-2.781L5.906,26.604z M16.36,21.348v4.286c5.031-0.186,9.088-4.243,9.274-9.274h-4.286  C21.17,19.029,19.029,21.17,16.36,21.348z M9.446,23.063c1.64,1.522,3.807,2.482,6.194,2.57v-4.286  c-1.208-0.08-2.307-0.562-3.166-1.313L9.446,23.063z M6.367,16.36c0.088,2.387,1.048,4.555,2.57,6.194l3.029-3.028  c-0.751-0.858-1.233-1.958-1.314-3.166H6.367z M16,11.36c-2.559,0-4.64,2.082-4.64,4.64s2.082,4.64,4.64,4.64s4.64-2.081,4.64-4.64  S18.559,11.36,16,11.36z M26.354,15.64h4.282C30.447,7.853,24.147,1.553,16.36,1.364v4.282C21.787,5.833,26.167,10.213,26.354,15.64  z M21.348,15.64h4.286c-0.186-5.03-4.243-9.088-9.274-9.273v4.285C19.029,10.83,21.17,12.971,21.348,15.64z M6.367,15.64h4.285  c0.081-1.208,0.563-2.307,1.314-3.166c-0.492-0.492-1.736-1.735-3.029-3.029C7.415,11.085,6.455,13.253,6.367,15.64z M1.364,15.64  h4.282c0.089-2.585,1.13-4.934,2.782-6.703C7.15,7.66,5.915,6.424,5.396,5.906C2.873,8.553,1.452,11.984,1.364,15.64z M9.445,8.938  c0.828,0.826,1.825,1.823,3.03,3.028c0.858-0.751,1.958-1.233,3.166-1.314V6.367C13.252,6.455,11.084,7.415,9.445,8.938z"
              />
              <rect
                id="_Transparent_Rectangle"
                fill="none"
                width="32"
                height="32"
              />
            </svg>
          </button>
        </div>
        :
        <>
          {(chart == 0) ? <Sanky></Sanky> : <Sunburst></Sunburst>}
        </>
      }
      { 
        chart!=2 
        &&
        <button onClick={(e)=>{setChart(2)}} className="bg-black w-32 h-10 text-white mx-auto">Back</button>
        
      }
      {/* footer */}
      <footer className="h-16 bg-gray-300 justify-center items-center w-full flex italic">
        Made by Arunim Singhal
      </footer>
    </div>
  );
}

export default App;
