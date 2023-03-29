export default () => {
  return (
    <main className="mx-auto w-5/6">
      <div className="flex gap-4">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1610390000000-1c1c1c1c1c1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Belgium"
          />
        </div>
        <div className="w-1/2 bg-old-gold">
          <div className="p-2 ">
            <h1 className="mb-6 text-xl font-medium">PortFolio</h1>
            <p>
              For Frontend Development class, we had to make a portfolio. So now
              you can see how I managed.
            </p>
            <div className=" bg-Feldgrau p-2 text-lemon-chiffon">
              <h2 className="mb-2 text-lg font-medium">Technologies</h2>
              <ul className="ml-2">
                <li>React</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>React Router</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
