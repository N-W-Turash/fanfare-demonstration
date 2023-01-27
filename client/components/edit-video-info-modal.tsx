import { gql, useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import { GET_VIDEOS } from "@/pages";
import Loader from "./loader";

const UPDATE_VIDEO = gql`
  mutation updateVideo($id: String!, $input: VideoUpdateInputType!) {
    updateVideo(id: $id, input: $input) {
      url
      title
    }
  }
`;

const initialValues = {
  title: "",
};

const EditVideoInfoModal = ({
  showEditModal,
  setShowEditModal,
  video,
}: any) => {
  const handleClose = () => setShowEditModal(false);
  const [updateVideo, { loading, error }] = useMutation(UPDATE_VIDEO, {
    refetchQueries: [{ query: GET_VIDEOS }],
  });

  const { _id } = video;

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>`Error! ${error.message}`</p>;

  const handleSubmitForm = (values: any, { setSubmitting, resetForm }: any) => {
    updateVideo({
      variables: { id: _id, input: { title: values.title } },
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
      >
        {(props) => {
          const { handleSubmit, isSubmitting } = props;
          return (
            <Modal show={showEditModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update Video</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
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

export default EditVideoInfoModal;
