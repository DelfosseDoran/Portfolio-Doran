import Links from './Link';

export default () => {
  return (
    <header className="pb-4">
      <div className="justify-end font-medium text-raisin-black-600 hidden md:flex">
        <Links
          link="/home"
          text="Home"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
        />
        <Links
          link="/projects"
          text="Projects"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
        />
        <Links
          link=""
          text="Digital art"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
        />
        <Links
          link="/photography"
          text="Photography"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
        />
      </div>
    </header>
  );
};
