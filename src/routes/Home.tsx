import { Link } from 'react-router-dom';
import Links from '../components/Link';

export default () => {
  return (
    <main>
      <div className="flex justify-center ">
        <div className="w-2/4">
          <h1 className=" p-2 text-5xl font-bold text-raisin-black-700">
            HI learn more about me, and this webside will help you. Doran
            Delfosse And his website
          </h1>
          <div className="-ml-1/4 flex w-screen bg-indian-red ">
            <div className="ml-1/8 flex w-2/4 p-2 font-medium">
              <div>
                <h2 className="text-3xl font-medium">Schools:</h2>
                <div className="pl-2">
                  <h3 className="text-xl">Vti Waregem (2015 - 2021)</h3>
                  <div className="pl-2">
                    <p>2015 - 2016 technology</p>
                    <p>2016 - 2017 mecanics electricity</p>
                    <p>2017 - 2019 electricity electronics</p>
                    <p>2019 - 2021 year industrial informatics</p>
                  </div>
                  <h3 className="text-xl">Howest (2021 - now)</h3>
                  <div className="pl-2">
                    <p>2021 - 2022 Multimedia en Creatieve Technologie</p>
                    <p>
                      2022 - now Multimedia en Creatieve Technologie (Next Web
                      Developer)
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl">Work:</h2>
                <div>
                  <p>(2019-now) </p>
                  <p>’t Houtvuur</p>
                  <p>waiter (working student)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit w-1/4 bg-Feldgrau p-4 text-lemon-chiffon">
          <div>
            <h1 className="text-3xl font-medium">projects</h1>
            <p>
              Learn more about the pojects I made. Be sure to check out what was
              made and how it was done.
            </p>
            <div className="flex justify-end">
              <Links
                link="projects"
                text="learn more"
                colorText="text-bg-lemon-chiffon"
                colorbg2="peer-hover:bg-lemon-chiffon"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium">digital art</h1>
            <p>
              Check out the works that I have already made. everything is made
              with photoshop or ilustraitor.
            </p>
            <div className="flex justify-end">
              <div className="relative mx-1 flex flex-col ">
                <Link to="" className="peer text-right ">
                  Learn more
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-y-50 scale-x-0 bg-lemon-chiffon duration-200 peer-hover:scale-x-100"></span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium">photography</h1>
            <p>
              {' '}
              I love travelling, I love nature and I love photography so I
              started combining them. Now take a look at where I went.
            </p>
            <div className="flex justify-end">
              <div className="relative mx-1 flex flex-col ">
                <Link to="" className="peer text-right ">
                  Learn more
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-y-50 scale-x-0 bg-lemon-chiffon duration-200 peer-hover:scale-x-100"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
