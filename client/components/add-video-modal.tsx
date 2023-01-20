import { gql, useMutation } from "@apollo/client";
import { Spinner, Button, Modal, Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import { GET_VIDEOS } from "@/pages";
import Loader from "./loader";

// interface VideoInputType {
//   url: string;
//   title: string;
// }

const ADD_VIDEO = gql`
  mutation createVideo($input: VideoInputType!) {
    createVideo(input: $input) {
      url
      title
    }
  }
`;

const initialValues = {
  url: "",
  title: "",
};

export const loadingComponent = (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

const AddVideoModal = ({ showModal, setShowModal }: any) => {
  const handleClose = () => setShowModal(false);
  const [createVideo, { loading, error }] = useMutation(ADD_VIDEO, {
    refetchQueries: [{ query: GET_VIDEOS }],
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>`Error! ${error.message}`</p>;

  const handleSubmitForm = (values: any, { setSubmitting, resetForm }: any) => {
    createVideo({
      variables: { input: { url: values.url, title: values.title } },
    });
    resetForm();
    handleClose();
  };

  return (
    <>
      <Formik
        initialValues={{ initialValues }}
        onSubmit={handleSubmitForm}
        enableReinitialize={true}
        // validationSchema={validationSchema}
        // validate={validateForm}
      >
        {(props) => {
          const { handleSubmit, isSubmitting } = props;
          return (
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add new entry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-2" controlId="url">
                    <Form.Label>URL</Form.Label>
                    <Field
                      type="text"
                      id="url"
                      className="form-control"
                      name="url"
                      placeholder="Enter video url"
                    />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Field
                      type="text"
                      id="title"
                      className="form-control"
                      name="title"
                      placeholder="Enter video title"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="light"
                  className="rounded-1"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  className="rounded-1"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          );
        }}
      </Formik>
    </>
  );
};

export default AddVideoModal;
