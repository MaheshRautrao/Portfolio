import { Cover } from "../accertinity/ShakingTextCover";

export function ShakingText() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 p-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Building amazing web applications at warp speed</Cover>
      </h1>
    </div>
  );
}
