import PropTypes from 'prop-types'

export const Notification = ({ name, photo, action, title, message, postTime, read }) => {
  return (
    <div key={name} className={`flex justify-start items-center gap-5 p-4 text-sm md:text-base rounded-lg mb-2.5 ${read ? 'bg-white' : 'bg-very_light_grayish_blue'}`}>
      <div className='w-10 h-10 md:w-11 md:h-11' style={{ aspectRatio: '1/1' }}>
        <img className='w-full h-full' src={photo} alt={"Mark Webber"} />
      </div>
      <div>
        <p>
          <span className='font-extrabold text-very_dark_blue hover:text-blue'><a href="#">{name}</a> </span> 
          <span className='font-medium text-dark_grayish_blue'>{action} </span> 
          <span className='font-bold text-dark_grayish_blue hover:text-blue'><a href="#">{title}</a></span>
          { !read && <span className='w-2 h-2 bg-red rounded-full inline-block ml-[7px]'></span> }
        </p>
        <p className='font-medium text-grayish_blue'>{postTime}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

Notification.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    action: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    postTime: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }
