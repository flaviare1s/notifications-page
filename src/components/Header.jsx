export const Header = () => {
  return (
    <div className="flex justify-between w-full items-center mb-6">
      <h1 className="text-xl text-very_dark_blue font-extrabold md:text-2xl">Notifications 
        <span className="bg-blue text-white text-base px-[11px] py-[2px] ml-[9px] rounded-md">3</span>
      </h1>
      <a href="#" className="text-dark_grayish_blue text-sm font-medium hover:text-blue md:text-base">Mark all as read</a>
    </div>
  );
};
