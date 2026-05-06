import preloader from '../../../assets/images/preloader.svg';
let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="" style={{ backgroundColor: 'white' }} />
    </div>
  );
};
export default Preloader;
