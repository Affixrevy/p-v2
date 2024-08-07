import Header from './components/header'
import About from './components/about'
import Experience from './components/experience'
import Resume from './components/resume'
import Projects from './components/projects'

export default function Home() {
  return (
    <div className={'mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'}>
      <div className={'lg:flex lg:justify-between lg:gap-4'}>
        <Header/>
        <main className={'pt-24 lg:w-1/2 lg:py-24'}>
            <About/>
            {/*<Resume/>*/}
            <Projects/>
            <Experience/>
        </main>
      </div>
    </div>
  );
}
