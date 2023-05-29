import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './components/Gallery/ImageGallery';
import ImageGalleryItem from './components/Gallery/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Server from './components/server/server';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

const API = new Server();

export default class App extends Component {
  state = {
    images: [],
    request: '',
    loading: false,
    page: 1,
    total: 1,
    modal: '',
    alt: '',
  };

  async componentDidUpdate(_, prevState) {
    const prevRequest = prevState.request;
    const nextRequest = this.state.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevRequest !== nextRequest) {
      this.state.images = [];
      this.state.page = 1;
      this.sererAIP();
    }

    if (prevPage !== nextPage) {
      this.sererAIP();
    }
  }

  sererAIP = async () => {
    try {
      this.setState({ loading: true });
      API.page = this.state.page;
      API.name = this.state.request;
      const data = await API.serverData();
      this.state.total = await data.totalHits;
      const hits = await data.hits.map(x => {
        return Object.fromEntries(
          Object.entries(x).filter(([key]) =>
            ['id', 'tags', 'largeImageURL', 'webformatURL'].includes(key)
          )
        );
      });
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loading: false,
      }));

      return this.toastify();
    } catch (error) {
      this.notifyError();
      this.setState({
        loading: false,
      });
    }
  };

  makeRequest = string => {
    this.setState({ request: string });
  };

  moreShow = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toastify = () => {
    const { total, page } = this.state;
    if (total > 0 && page === 1) {
      return this.notifySuccess(total);
    }
    if (total === 0) {
      return this.notifyError();
    }

    if (Math.ceil(total / 12) === page) {
      return this.notifyInfo();
    }
  };

  notifySuccess = total => toast.success(`Hooray! We found ${total} images.`);

  notifyError = () =>
    toast.error(
      'Sorry, there are no images matching your search query. Please try again.'
    );

  notifyInfo = () =>
    toast.info("We're sorry, but you've reached the end of search results.");

  showBigImg = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      modal: event.target.dataset.src,
      alt: event.target.getAttribute('alt'),
    });
  };

  resetModal = () => {
    this.setState({
      modal: '',
      alt: '',
    });
  };

  render() {
    const { images, loading, total, page, modal, alt } = this.state;
    const buttonShow = total > 0 && Math.ceil(total / 12) !== page && !loading;

    return (
      <>
        <Searchbar onClick={this.makeRequest} />
        {images.length !== 0 && (
          <ImageGallery showBigImg={this.showBigImg}>
            {images.map(x => (
              <ImageGalleryItem key={x.id} images={x} />
            ))}
          </ImageGallery>
        )}
        {buttonShow && <Button moreShow={this.moreShow} />}
        {loading && <Loader />}
        {modal !== '' && <Modal src={modal} alt={alt} hide={this.resetModal} />}
        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
        />
      </>
    );
  }
}
