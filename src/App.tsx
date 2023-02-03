import ColorModeSwitcher from "./components/ColorModeSwitcher";

export default function RootLayout() {
  return (
    <main className="max-w-3xl m-auto">
      <header className="print:hidden px-4 items-center justify-between py-4 flex sticky top-0 z-50 backdrop-blur-md mb-24">
        <h1 className="font-medium mr-auto text-lg">Gonzalo Pozzo</h1>
        <ColorModeSwitcher />
      </header>
      <article className="relative px-4">
        <article className="flex flex-col gap-24">
          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">Hey there</h2>

            <div className="flex flex-col gap-8">
              <p>
                I am Gonzalo Pozzo (aka goncy), a frontend developer and content creator from Buenos
                Aires, Argentina. Focused on helping people to land their first (or a better) job in
                IT.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Development</p>
                  <p className="text-2xl font-bold">+10</p>
                  <p className="text-sm text-primary-900">Years of experience</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">JavaScript</p>
                  <p className="text-2xl font-bold">+8</p>
                  <p className="text-sm text-primary-900">Years of experience</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">React</p>
                  <p className="text-2xl font-bold">+7</p>
                  <p className="text-sm text-primary-900">Years of experience</p>
                </div>
              </div>

              <p>
                I have a degree in Multimedia Design and{" "}
                <a
                  href="https://www.linkedin.com/in/gonzalopozzo/details/experience/"
                  rel="noreferrer"
                  target="_blank"
                >
                  have been working
                </a>{" "}
                as a developer, mainly with the JavaScript stack for more than ten years. I joined{" "}
                <a href="https://vercel.com" rel="noreferrer" target="_blank">
                  Vercel
                </a>{" "}
                in August 2021 as a Solution Architect, making every day, the web, faster.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              I am creating some content in{" "}
              <a href="https://twitter.gonzalopozzo.com" rel="noreferrer" target="_blank">
                Twitter
              </a>
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                In late 2020 I decided to make twitter my main target for content creation. I grew
                from 1K to 45K in ~2 years and the community expanded to other networks like{" "}
                <a href="https://discord.gonzalopozzo.com" rel="noreferrer" target="_blank">
                  Discord
                </a>
                ,{" "}
                <a href="https://youtube.gonzalopozzo.com" rel="noreferrer" target="_blank">
                  YouTube
                </a>{" "}
                and{" "}
                <a href="https://twitch.gonzalopozzo.com" rel="noreferrer" target="_blank">
                  Twitch
                </a>
                .
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Followers</p>
                  <p className="text-2xl font-bold">1K</p>
                  <p className="text-sm text-primary-900">December 2020</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Followers</p>
                  <p className="text-2xl font-bold">+50K</p>
                  <p className="text-sm text-primary-900">December 2022</p>
                </div>
              </div>

              <p>
                Most of the content is related to{" "}
                <a
                  href="https://twitter.com/goncy/status/1396093019246546947"
                  rel="noreferrer"
                  target="_blank"
                >
                  learning React
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/goncy/status/1479807760963362818"
                  rel="noreferrer"
                  target="_blank"
                >
                  web development practice resources
                </a>
                ,{" "}
                <a
                  href="https://twitter.com/goncy/status/1488887527108980737"
                  rel="noreferrer"
                  target="_blank"
                >
                  getting more engagement
                </a>
                , between others.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              And streaming on{" "}
              <a href="https://twitch.gonzalopozzo.com" rel="noreferrer" target="_blank">
                Twitch
              </a>
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                Started in late 2020 and I became a Twitch partner within 6 months. I stream once a
                week for a large community, covering some of the most important topics when looking
                for a first job in IT.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Argentina</p>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-primary-900">Software and game development</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Spanish</p>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-primary-900">Software and game development</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Worldwide</p>
                  <p className="text-2xl font-bold">18</p>
                  <p className="text-sm text-primary-900">Software and game development</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Viewers</p>
                  <p className="text-2xl font-bold">250</p>
                  <p className="text-sm text-primary-900">Average</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Followers</p>
                  <p className="text-2xl font-bold">+15K</p>
                  <p className="text-sm text-primary-900">42.2/hour</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Subscribers</p>
                  <p className="text-2xl font-bold">+100</p>
                  <p className="text-sm text-primary-900">September 2022</p>
                </div>
              </div>

              <p>
                Topics vary from reviewing LinkedIn profiles, coding projects, interview challenges
                and preparation, learning technologies, community group talks and interviews to some
                of the most influential people in the area, like Cassidy Williams, Belén Curcio, Dan
                Abramov, Rich Harris, Lee Robinson, Kent C Dodds, Matías Woloski and much more.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              It then goes into{" "}
              <a href="https://youtube.gonzalopozzo.com" rel="noreferrer" target="_blank">
                YouTube
              </a>
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                The most useful content from twitch goes nearly unedited to YouTube. Where the
                subscribers went from 100 to +5000 within a year.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Views</p>
                  <p className="text-2xl font-bold">+200K</p>
                  <p className="text-sm text-primary-900">Last 365 days</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">View time</p>
                  <p className="text-2xl font-bold">+40K hours</p>
                  <p className="text-sm text-primary-900">Last 365 days</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Subscriptors</p>
                  <p className="text-2xl font-bold">+8K</p>
                  <p className="text-sm text-primary-900">Last 365 days</p>
                </div>
              </div>

              <p>
                ie:{" "}
                <a
                  href="https://www.youtube.com/watch?v=-w-P4u0x8ig"
                  rel="noreferrer"
                  target="_blank"
                >
                  Mock interview with Dan abramov
                </a>
                ,{" "}
                <a
                  href="https://www.youtube.com/watch?v=SG5FFwLDuSQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  Mock interview for JR, SSR and SR React developers with real candidates and
                  recruiters
                </a>
                ,{" "}
                <a href="https://youtu.be/DgPcpte1eoA" rel="noreferrer" target="_blank">
                  How to build a cost 0 ecommerce with TypeScript, Next.js, ChakraUI and Google
                  Sheets
                </a>
                ,{" "}
                <a href="https://youtu.be/Rgojq9clGh0" rel="noreferrer" target="_blank">
                  How to get a job as frontend developer
                </a>
                ,{" "}
                <a href="https://youtu.be/noRAYtyFilU" rel="noreferrer" target="_blank">
                  Intro to ChakraUI
                </a>
                ,{" "}
                <a href="https://youtu.be/k3DMgcjG61A" rel="noreferrer" target="_blank">
                  Get a job in MercadoLibre doing this challenge
                </a>{" "}
                and{" "}
                <a
                  href="https://www.youtube.com/channel/UCCvaRcYdZCZBrBQVnsUBg5Q"
                  rel="noreferrer"
                  target="_blank"
                >
                  many more
                </a>
                .
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              Created my first startup,{" "}
              <a href="https://pency.app" rel="noreferrer" target="_blank">
                Pency
              </a>
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                Founded Pency, a startup that grew from 0 to 30k stores in less than a year, helping
                people to make it through the COVID-19 pandemic.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Stores</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-primary-900">May 2020</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Stores</p>
                  <p className="text-2xl font-bold">350</p>
                  <p className="text-sm text-primary-900">June 2020</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Stores</p>
                  <p className="text-2xl font-bold">1.6K</p>
                  <p className="text-sm text-primary-900">August 2020</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Stores</p>
                  <p className="text-2xl font-bold">5K</p>
                  <p className="text-sm text-primary-900">November 2020</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Stores</p>
                  <p className="text-2xl font-bold">30K</p>
                  <p className="text-sm text-primary-900">May 2021</p>
                </div>
              </div>

              <p>
                Pency let people transitioning from a physical store to an online store, easily and
                free, within a day and no credit cards required. We received several messages and
                testimonials from people saying that Pency saved their stores from going bankrupt.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              I am helping people to get that job
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                Although people do not tend to report when they get the job, numbers are still
                impressive (+200 in the last year). Since I&apos;ve focused on helping people to get
                more engagement in their learning process the hires doubled in one month.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Hired people</p>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm text-primary-900">December 2021</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Hired people</p>
                  <p className="text-2xl font-bold">15</p>
                  <p className="text-sm text-primary-900">February 2022</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Hired people</p>
                  <p className="text-2xl font-bold">28</p>
                  <p className="text-sm text-primary-900">August 2022</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              To achieve it, I befriended companies
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                In the last year I contacted several companies, asked them their frontend developer
                position coding challenge and offered them to solve it live. People can then apply
                to get a job in that company doing the same challenge. At first sight that does not
                seem a good idea, but, in fact it is.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Majorkey</p>
                  <p className="text-2xl font-bold">15</p>
                  <p className="text-sm text-primary-900">hires</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Enviopack</p>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-primary-900">hires</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Aerolab</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-primary-900">hires</p>
                </div>
              </div>

              <p>
                And much more, companies involved in this kind of streams includes{" "}
                <a href="https://basement.studio/" rel="noreferrer" target="_blank">
                  Basement Studio
                </a>
                ,{" "}
                <a href="https://aerolab.co/" rel="noreferrer" target="_blank">
                  Aerolab
                </a>
                ,{" "}
                <a href="https://www.majorkeytech.com/" rel="noreferrer" target="_blank">
                  MajorKey
                </a>
                ,{" "}
                <a href="https://www.cognizantsoftvision.com/" rel="noreferrer" target="_blank">
                  Cognizant Softvision
                </a>
                ,{" "}
                <a href="https://innovid.com" rel="noreferrer" target="_blank">
                  Innovid
                </a>
                ,{" "}
                <a href="https://www.real-trends.com/" rel="noreferrer" target="_blank">
                  Realtrends
                </a>
                ,{" "}
                <a href="https://blackbox-vision.tech/" rel="noreferrer" target="_blank">
                  Blackbox Vision
                </a>
                ,{" "}
                <a href="https://coderio.co/" rel="noreferrer" target="_blank">
                  Coderio
                </a>{" "}
                and I have +10 companies ready for new challenges.
              </p>

              <p>
                Companies with entire recruiting teams assigned to positions triplicated applicances
                within three days from the stream than the ones sourced by their own teams.
              </p>

              <p>
                You can find some of the positions I&apos;m helping, in my job board,{" "}
                <a href="https://trabajos.gonzalopozzo.com" rel="noreferrer" target="_blank">
                  Joncy
                </a>
                .
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-primary-500 font-bold text-xl">
              Some of those companies are sponsors in the stream
            </h2>

            <div className="flex flex-col gap-8">
              <p>
                In the last few months, companies like{" "}
                <a href="https://platzi.com/" rel="noreferrer" target="_blank">
                  Platzi
                </a>
                ,{" "}
                <a href="https://talently.tech/" rel="noreferrer" target="_blank">
                  Talently
                </a>
                ,{" "}
                <a href="https://www.enviopack.com/" rel="noreferrer" target="_blank">
                  Enviopack
                </a>
                ,{" "}
                <a href="https://workana.com/" rel="noreferrer" target="_blank">
                  Workana
                </a>
                ,{" "}
                <a href="https://indie.build/" rel="noreferrer" target="_blank">
                  Indie build
                </a>{" "}
                and more started sponsoring the stream with prizes and money to keep content free
                for users.
              </p>

              <div className="grid gap-8 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                <div className="min-w-[6rem]">
                  <p className="text-sm">Prizes</p>
                  <p className="text-2xl font-bold">+1K USD</p>
                  <p className="text-sm text-primary-900">per month</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Winners</p>
                  <p className="text-2xl font-bold">+200</p>
                  <p className="text-sm text-primary-900">from 11 countries</p>
                </div>
                <div className="min-w-[6rem]">
                  <p className="text-sm">Participants</p>
                  <p className="text-2xl font-bold">+20K</p>
                  <p className="text-sm text-primary-900">within a year</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </article>
      <footer className="print:hidden px-4 mt-24 border-t py-4 flex items-center justify-between border-dark/10">
        <p>Read less, do more.</p>
        <p>Quilmes: {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
