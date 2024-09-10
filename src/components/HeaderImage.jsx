import PropTypes from 'prop-types';

const HeaderImage = ({ image }) => {
    return (
        <img src={image} alt="people" style={{ width: '250px', height: 'auto' }} />
    );
};

HeaderImage.propTypes = {
    image: PropTypes.string.isRequired,
};

export default HeaderImage;