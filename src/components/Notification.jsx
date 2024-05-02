import PropTypes from 'prop-types'

export const Notification = ({ name, photo, action, postTitle, postTime }) => {
  return (
    <div key={name} className='flex justify-between items-center bg-light_grayish_blue_1'>
      <div>
        <img src={photo} alt={"Mark Webber"} />
      </div>
      <div>
        <p>
          <span>{name}</span> <span>{action}</span> <span>{postTitle}</span>
          <span className='w-2 h-2 bg-red rounded-full inline-block ml-[7px]'></span>
        </p>
        <p>{postTime}</p>
      </div>
    </div>
  );
};

Notification.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired
  }
