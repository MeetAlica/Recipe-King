import PropTypes from 'prop-types';

function PopularThisWeek({ img, link, label, username }) {
  return (
    <a
      className="hover:text-orange-400 my-hover-class  text-body max-w-[204px] "
      href={`${link}?username=${username}`}
    >
      <img src={img} loading="lazy" width="1240" className="mb-4 rounded" alt="" />
      <p className="capitalize font-medium text-sm hover:text-orange-400">{label}</p>
    </a>
  );
}

PopularThisWeek.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default PopularThisWeek;
