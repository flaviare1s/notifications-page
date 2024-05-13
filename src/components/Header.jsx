export const Header = ({ count, markAllAsRead}) => {
  return (
    <div className="flex justify-between w-full items-center mb-6">
      <h1 className="text-xl text-very_dark_blue font-extrabold md:text-2xl">Notifications 
        <span className="bg-blue text-white text-base px-[11px] py-[2px] ml-[9px] rounded-md">{count}</span>
      </h1>
      <button onClick={markAllAsRead} className="text-dark_grayish_blue text-sm font-medium hover:text-blue md:text-base">Mark all as read</button>
    </div>
  );
};
