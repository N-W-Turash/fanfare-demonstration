import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status"
        className="text-light my-4 text-center"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
