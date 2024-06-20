import Image from "next/image";
import * as React from "react";

function Header() {
  return (
    <header className="flex justify-center items-center px-16 bg-gradient-to-t from-slate-200 to-white max-md:px-5">
      <div className="flex flex-col max-w-full w-[1440px]">
        <div className="flex flex-col justify-center items-center pb-6 font-semibold leading-[110%] max-md:max-w-full">
          <div className="flex gap-2 px-3 py-2 mt-32 uppercase rounded-3xl max-md:flex-wrap max-md:mt-10">
            <div className="my-auto text-xs tracking-wider text-zinc-900">Join a gaming ecosystem for usability of assets</div>
            <a href="#" className="flex gap-0.5 justify-center px-3 py-1.5 text-xs tracking-normal text-white bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)] rounded-[300px]">
              <span>Choose your power</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33182344bb86f05bb26e822cf85533cf9ad90ce1cf78f30486db89e053ad08d9?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 w-3 aspect-square" />
            </a>
          </div>
          <h1 className="mt-4 text-7xl tracking-tighter text-center bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="font-bold">Transforming NFTs and</span><br /><span className="font-bold">3D assets into Gaming</span><br /><span className="font-bold">Assets with </span><span className="font-bold text-gray-400">$STYLE</span>
          </h1>
          <div className="flex gap-4 justify-center mt-6 text-base tracking-wide uppercase text-zinc-900">
            <button className="justify-center px-6 py-3 border border-black border-solid bg-black bg-opacity-10 rounded-[300px] max-md:px-5">Choose your power</button>
            <button className="justify-center px-6 py-3 border border-black border-solid rounded-[300px] max-md:px-5">Stake $STYLE</button>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a4a3f87c48b2452a094c0a0f184e935c0f04fb2fb5400ef1123ca296c6cedf6?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="mt-32 w-6 aspect-square max-md:mt-10" />
        </div>
      </div>
    </header>
  );
}

function ChoosePowerCard({ imgSrc, title, description }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow justify-center p-10 w-full bg-white rounded-3xl border border-solid border-stone-300 leading-[110%] text-zinc-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-3 text-3xl font-bold tracking-tighter capitalize max-md:flex-wrap">
          <img loading="lazy" src={imgSrc} alt="" className="shrink-0 my-auto w-6 aspect-square" />
          <h2 className="max-md:max-w-full">{title}</h2>
        </div>
        <p className="mt-4 text-xl font-medium leading-6 text-neutral-400 max-md:max-w-full">{description}</p>
        <a href="#" className="flex gap-2 justify-center self-start px-6 py-3 mt-10 text-base font-semibold tracking-wide uppercase whitespace-nowrap border border-black border-solid bg-black bg-opacity-10 rounded-[300px] max-md:px-5">
          <span>Discover</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/235fce5f4e2f87db15f8d7a3a93ad017003c70baa837d7414ead8619049496c5?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
        </a>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <main>
      <section className="flex justify-center items-center px-16 mt-32 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <article className="flex overflow-hidden relative flex-col pt-2.5 max-w-full min-h-[356px] stroke-[1px] stroke-black stroke-opacity-50 w-[1160px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2125bffa49ebb378ab062136a972e1b9b4c6b46edb64b3bc52a74809e4f5a85d?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="object-cover absolute inset-0 size-full" />
          <h2 className="relative text-6xl font-semibold tracking-tighter bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[56px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
            <span className="font-bold">Choose your&nbsp;</span>
            <span className="font-bold text-gray-400">Power</span>
          </h2>
          <div className="relative self-start mt-9 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ChoosePowerCard imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5eda55341842b097d69d79f507240a5464b3f10ae6a11699a0ae5759a80ca169?apiKey=e60c5ff185ab4b01891f0d142201f3de&" title="Text to gaming creator" description="Use your imagination to create entire 3D Gaming models from scratch with our AI tool." />
              <ChoosePowerCard imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0cc16654cf70cfd9a4d59b7a398475b809f825a89ce3dcdf1113bd32ef0c73?apiKey=e60c5ff185ab4b01891f0d142201f3de&" title="NFT/2D to gaming asset" description="Turn your favorite NFTs or 2D images into functional gaming assets." />
            </div>
          </div>
        </article>
      </section>

      <section className="flex justify-center items-center px-16 mt-32 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1160px]">
          <h2 className="text-7xl font-bold tracking-tighter text-center bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl">Text to Gaming Creator</h2>
          <p className="mt-8 text-3xl font-medium leading-8 text-center text-neutral-400 max-md:max-w-full">Use your imagination to create entire 3D Gaming models<br />from scratch with our AI tool.</p>
          <div className="flex gap-5 justify-between mt-4 text-base leading-4 uppercase">
            <div className="flex gap-2 justify-center">
              <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Access&nbsp;</p>
              <p className="font-bold text-zinc-900">hold 2500 $STYLE</p>
            </div>
            <div className="flex gap-2 justify-center">
              <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">fee&nbsp;</p>
              <p className="font-bold text-zinc-900">100$ $STYLE</p>
            </div>
          </div>
          <a href="#" className="flex gap-2 justify-center px-6 py-3 mt-6 text-base font-semibold tracking-wide leading-4 uppercase border border-black border-solid bg-black bg-opacity-10 rounded-[300px] text-zinc-900 max-md:px-5">
            <span>Try now</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/534d3a2d53503eabce8eda17c4b6eb08d849bc76cfbe50512d046edfed9ea9d1?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
          </a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43cfad1caa568043a89d5c5139301b23187f1a249b5f72b276153aeeef1e588e?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="self-stretch mt-8 w-full aspect-[2.27] max-md:max-w-full" />
          <div className="flex flex-col justify-center self-stretch mt-8 bg-white rounded-3xl border border-solid border-stone-300 max-md:max-w-full">
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center items-center px-20 py-6 w-full font-semibold border border-solid bg-black bg-opacity-0 border-stone-300 leading-[110%] max-md:px-5 max-md:max-w-full">
                    <p className="text-xl uppercase text-neutral-400">Some of the</p>
                    <p className="text-5xl tracking-tighter text-zinc-900 max-md:text-4xl">Virtual Worlds</p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-9 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f1f95eed8a4265ceb213e1468eb0f8b428e12e5219bf13941cb1f41aa88c31b?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="aspect-[1.09] w-[50px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b61aa83b74e26f338d37c815018a41bc51355652058545d14cf1ef6cfd38c30b?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="max-w-full aspect-[3.33] w-[108px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e8975787151a11840c76faaf05fb41796ce6367e0ff55c2748d715aba69aaa3?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="max-w-full aspect-[3.57] w-[116px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19c3be4a7cb68b9107200844641a91b7b589b614e8c4e873fa7dcd0a771f2b6?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="aspect-[3.45] w-[68px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/223e6384c74b73439aab6af0df65b0834d16ffd75e9b00e722cc3bb5c80b7482?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="aspect-[3.85] w-[76px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1eb89cd1b7d058d9df0d628a60570e4bda188a07fbd625b24766de9117e715?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="w-20 aspect-[4]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05ba4d87b6d4b8b29da03c4692530a83924db3ec7e56d0adc583300ade6e2c0f?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="aspect-[5.56] w-[168px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e260d214c81afbc2d062caa80a7d7e056255e2ecc459ebd46f3436758010f0a7?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="mx-3.5 w-36 aspect-[4.55]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow justify-center px-10 py-10 text-xl font-semibold leading-6 text-center border border-solid border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full">
                    We have created 150+ Avatars across game engines, platforms and 10+ Blockchains.
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center px-16 mt-32 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1160px]">
          <h2 className="text-7xl font-bold tracking-tighter text-center bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl">NFT/2D to Gaming Asset</h2>
          <p className="mt-8 text-3xl font-medium leading-8 text-center text-neutral-400 max-md:max-w-full">Turn your favourite nfts or 2d images into<br />functional gaming assets.</p>
          <div className="flex gap-5 justify-between mt-4 text-base leading-4 uppercase">
            <div className="flex gap-2 justify-center">
              <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Access&nbsp;</p>
              <p className="font-bold text-zinc-900">hold 1000 $STYLE</p>
            </div>
            <div className="flex gap-2 justify-center">
              <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">fee&nbsp;</p>
              <p className="font-bold text-zinc-900">100$ $STYLE</p>
            </div>
          </div>
          <a href="#" className="flex gap-2 justify-center px-6 py-3 mt-6 text-base font-semibold tracking-wide leading-4 uppercase border border-black border-solid bg-black bg-opacity-10 rounded-[300px] text-zinc-900 max-md:px-5">
            <span>Try now</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/534d3a2d53503eabce8eda17c4b6eb08d849bc76cfbe50512d046edfed9ea9d1?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
          </a>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27d89c1fd4555ac64f2485666d00028feeb2424312f59b5b05cc28bf77eea462?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="self-stretch mt-8 w-full aspect-[2.27] max-md:max-w-full" />
          <div className="flex flex-col justify-center self-stretch mt-8 bg-white rounded-3xl border border-solid border-stone-300 max-md:max-w-full">
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center items-center px-20 py-6 w-full font-semibold border border-solid bg-black bg-opacity-0 border-stone-300 leading-[110%] max-md:px-5 max-md:max-w-full">
                    <p className="text-xl uppercase text-neutral-400">Some of the</p>
                    <p className="text-5xl tracking-tighter text-zinc-900 max-md:text-4xl">Virtual Worlds</p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-9 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f1f95eed8a4265ceb213e1468eb0f8b428e12e5219bf13941cb1f41aa88c31b?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="aspect-[1.09] w-[50px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b61aa83b74e26f338d37c815018a41bc51355652058545d14cf1ef6cfd38c30b?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="max-w-full aspect-[3.33] w-[108px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e8975787151a11840c76faaf05fb41796ce6367e0ff55c2748d715aba69aaa3?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="max-w-full aspect-[3.57] w-[116px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19c3be4a7cb68b9107200844641a91b7b589b614e8c4e873fa7dcd0a771f2b6?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="aspect-[3.45] w-[68px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/223e6384c74b73439aab6af0df65b0834d16ffd75e9b00e722cc3bb5c80b7482?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="aspect-[3.85] w-[76px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-12 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1eb89cd1b7d058d9df0d628a60570e4bda188a07fbd625b24766de9117e715?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="w-20 aspect-[4]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 w-full border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/05ba4d87b6d4b8b29da03c4692530a83924db3ec7e56d0adc583300ade6e2c0f?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="aspect-[5.56] w-[168px]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center px-16 py-11 border border-solid border-stone-300 max-md:px-5">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e260d214c81afbc2d062caa80a7d7e056255e2ecc459ebd46f3436758010f0a7?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Brand" className="mx-3.5 w-36 aspect-[4.55]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="grow justify-center px-10 py-10 text-xl font-semibold leading-6 text-center border border-solid border-stone-300 text-neutral-400 max-md:px-5 max-md:max-w-full">
                    We have created 150+ Avatars across game engines, platforms and 10+ Blockchains.
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="shrink-0 max-w-full border border-solid border-stone-300 h-[120px] w-[290px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center px-16 mt-32 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1160px]">
          <h2 className="self-center text-7xl font-bold tracking-tighter text-center bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[80px] text-zinc-900 max-md:max-w-full max-md:text-4xl">Stake $STYLE</h2>
          <p className="self-center mt-8 text-3xl font-medium leading-8 text-center text-neutral-400 max-md:max-w-full">Join a gaming ecosystem for usability of assets</p>
          <div className="flex gap-4 items-center self-center px-3 py-2 mt-6 text-base font-semibold tracking-wide leading-4 uppercase bg-white border border-solid border-stone-300 rounded-[300px] text-zinc-900">
            <div className="justify-center self-stretch px-6 py-3 text-white bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)] rounded-[300px] max-md:px-5">Tier One</div>
            <div className="self-stretch my-auto">Tier Two</div>
            <div className="self-stretch my-auto">Tier Three</div>
          </div>
          <section className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className=" bg-white rounded-3xl border border-gray-200 flex flex-col md:flex-row">
                <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-10">
                  <div className='flex flex-col justify-start items-start'>
                    <h2 className="text-2xl font-bold text-gray-400">TIER 1</h2>
                    <h3 className="text-5xl font-bold py-2">The NFT Tier!</h3>
                    <div className="flex flex-col md:flex-row">
                      <div className='flex pr-12 items-center mb-2 md:mb-0'>
                        <img loading="lazy" src='https://cdn.builder.io/api/v1/image/assets/TEMP/df7204159c3839c7f68489a40adde641322f695b01e2390409b60d9dc049f86a?apiKey=e60c5ff185ab4b01891f0d142201f3de&' alt="" className="shrink-0 my-auto w-6 aspect-square" />
                        <p className="text-xs text-black font-semibold ml-1">1,000 $STYLE</p>
                      </div>
                      <div className='flex items-center'>
                        <img loading="lazy" src='https://cdn.builder.io/api/v1/image/assets/TEMP/18ed74bd1353427add0cf3ca6da5a2c4e16c669303c5d4503cf387faeccdfdce?apiKey=e60c5ff185ab4b01891f0d142201f3de&' alt="" className="shrink-0 my-auto w-6 aspect-square" />
                        <p className="text-xs text-black font-semibold ml-1">LOCKED 1 MONTH</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-gray-100 p-4 md:p-10">
                  <p className="text-lg md:text-2xl pt-4 text-gray-800 font-bold">Get access to <span className='text-gray-500'>nft-collections</span> with usability in games. Every nft-collection will be <span className='text-gray-500'>usable for playing.</span></p>
                </div>
              </div>
            </div>
          </section>
          <h3 className="mt-12 text-3xl font-semibold leading-9 capitalize bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)] max-md:mt-10 max-md:max-w-full">Upcoming Drops</h3>
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center rounded-[32px] max-md:mt-6 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4baae9a6e4b40a2a785358dc0d21399fdbc9f3b36d003bce1d70a46af9d20b12?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Space Cowboys" className="w-full aspect-[1.27] blur-[3px] max-md:max-w-full" />
                  <div className="justify-between p-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow font-semibold leading-[110%] max-md:mt-10">
                          <h3 className="text-3xl text-center text-neutral-400">Space Cowboys</h3>
                          <div className="flex gap-2 justify-center mt-3 text-base uppercase text-zinc-900">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3e66b2c541751b3efabc4ee1123eaff6124fa6582c1c8bcbba082ecc58d548?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
                            <p>30 Min</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 justify-between self-stretch my-auto text-base leading-4 uppercase max-md:mt-10">
                          <div className="flex flex-col justify-center whitespace-nowrap">
                            <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Chain</p>
                            <p className="mt-2 font-semibold text-zinc-900">ETH</p>
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Quantify</p>
                            <p className="mt-2 font-semibold text-zinc-900">1000$ =</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center rounded-[32px] max-md:mt-6 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11d1a480198334d15e43cda924bd7ca002fae4587e92aeebde258bca9d82e9c?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="On Chain Orcs" className="w-full aspect-[1.27] blur-[3px] max-md:max-w-full" />
                  <div className="justify-between p-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow font-semibold leading-[110%] max-md:mt-10">
                          <h3 className="text-3xl text-center text-neutral-400">On Chain Orcs</h3>
                          <div className="flex gap-2 justify-center mt-3 text-base uppercase text-zinc-900">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94caefd9067e6bbdb20560587ce93d17d7d14088451ab5277ec39b823fb5a387?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
                            <p>3 DAYS</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                        <div className="flex gap-5 justify-between self-stretch my-auto text-base leading-4 uppercase max-md:mt-10">
                          <div className="flex flex-col justify-center whitespace-nowrap">
                            <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Chain</p>
                            <p className="mt-2 font-semibold text-zinc-900">ARBITRUM</p>
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">Quantify</p>
                            <p className="mt-2 font-semibold text-zinc-900">1000$ =</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 shrink-0 pt-32 bg-black bg-opacity-0 h-[562px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center self-center p-20 max-w-full bg-white rounded-3xl mt-[872px] w-[1160px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-2 self-start px-3 py-2 font-semibold uppercase rounded-3xl leading-[110%] max-md:flex-wrap">
          <p className="my-auto text-xs tracking-wider text-zinc-900">GET $STYLE TO ACCESS THE ECOSYSTEM</p>
          <a href="#" className="flex gap-0.5 justify-center px-3 py-1.5 text-xs tracking-normal text-white bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)] rounded-[300px]">
            <span>Get $style</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33182344bb86f05bb26e822cf85533cf9ad90ce1cf78f30486db89e053ad08d9?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 w-3 aspect-square" />
          </a>
        </div>
        <h3 className="mt-2 text-7xl font-semibold tracking-tighter text-center bg-clip-text bg-[linear-gradient(96deg,#E2E2E2_-13.07%,#86868B_61.44%)] leading-[88px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
          <span>Unlock&nbsp;</span>
          <span>Gaming Usability</span>
        </h3>
        <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-wrap content-end font-semibold leading-[110%]">
            <h4 className="text-3xl capitalize bg-clip-text bg-[linear-gradient(97deg,#000_-12.84%,#666_87.14%)]">$STYLE Contracts</h4>
            <div className="flex gap-4 mt-4 text-base tracking-wide uppercase text-zinc-900">
              <a href="#" className="flex gap-2 justify-center px-6 py-3 border border-black border-solid rounded-[300px] max-md:px-5">
                <span>On ERC20</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95fb4052226bc168823c8fcad54e529b8f75f4ba09318e43e1f63ac1a83ccdd0?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
              </a>
              <a href="#" className="flex gap-2 justify-center px-6 py-3 border border-black border-solid bg-black bg-opacity-10 rounded-[300px] max-md:px-5">
                <span>On ARB</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ca9df9053169b73a04ce88a6620c8fdb82d9682b82d8d67da0150550ad358e9?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="" className="shrink-0 self-start w-4 aspect-square" />
              </a>
            </div>
          </div>
          <div className="flex gap-0 justify-center max-md:flex-wrap">
            <div className="flex justify-center items-center px-9 py-8 border-t border-b border-solid border-stone-300 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0648c1d171559501937668b27842dc1d54569602a8001177ee2e1e34d15e10e7?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Logo" className="w-32 aspect-[4]" />
            </div>
            <div className="flex justify-center items-center px-9 py-10 border border-solid bg-black bg-opacity-0 border-stone-300 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b879bc24e3d5c58f3cfb7b2aebdb6467a4b0d751777832a9f396ba436961c250?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Logo" className="w-32 aspect-[7.69]" />
            </div>
            <div className="flex justify-center items-center px-14 py-9 border-t border-b border-solid border-stone-300 max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/171fe1f82289dd93a760cb5a001e3868229c25d9b6081f04b0dc8e2068168c41?apiKey=e60c5ff185ab4b01891f0d142201f3de&" alt="Logo" className="aspect-[3.7] w-[90px]" />
            </div>
          </div>
        </div>
        <p className="mt-10 text-base font-light leading-4 capitalize text-neutral-400 max-md:max-w-full">Powered by Style Protocol. © 2024</p>
      </div>
    </footer>
  );
}

export default function Details() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}