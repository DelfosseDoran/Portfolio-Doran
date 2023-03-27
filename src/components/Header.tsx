import Links from './Link';

export default () => {
  return (
    <header className="mb-4">
      <div className="flex justify-end font-medium text-raisin-black-600">
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
          link=""
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
