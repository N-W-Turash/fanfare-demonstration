import { gql, useMutation } from "@apollo/client";
import { Button, Modal, Form } from "react-bootstrap";
import { Field, Formik } from "formik";
import { GET_VIDEOS } from "@/pages";
import Loader from "./loader";

const ADD_VIDEO = gql`
  mutation createVideo($input: VideoInputType!) {
    createVideo(input: $input) {
      url
      title
    }
  }
`;

const initialValues = {
  file: null,
  title: "",
};

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
      variables: { input: { file: values.file, title: values.title } },
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
          const { handleSubmit, isSubmitting, setFieldValue, values } = props;
          return (
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add new entry</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-2">
                    <Form.Label>File</Form.Label>
                    <Field
                      type="file"
                      id="file"
                      className="form-control"
                      name="file"
                      placeholder="Enter video url"
                      value={undefined}
                      onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        if (!event.currentTarget.files) {
                          return;
                        }
                        console.log("values", values);
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Title</Form.Label>
                    <Field
                      type="text"
                      id="title"
                      className="form-control"
                      value={undefined}
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
