import PropTypes from 'prop-types';
import { Elements, Img } from './gallery.styled';

function ImageGalleryItem({ images: { webformatURL, tags, largeImageURL } }) {
  return (
    <Elements>
      <Img src={webformatURL} alt={tags} data-src={largeImageURL} />
    </Elements>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.exact({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
