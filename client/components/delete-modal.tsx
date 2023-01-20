import { gql, useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GET_VIDEOS } from "@/pages";
import Loader from "./loader";

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, video }: any) => {
  const DELETE_VIDEO = gql`
    mutation deleteVideo($id: String!) {
      deleteVideo(id: $id) {
        url
      }
    }
  `;
  const handleClose = () => setShowDeleteModal(false);

  const { _id } = video;
  const [deleteVideo, { loading, error }] = useMutation(DELETE_VIDEO, {
    refetchQueries: [{ query: GET_VIDEOS }],
  });

  if (loading) {
    return <Loader />;
  }

  if (error) return <p>`Error! ${error.message}`</p>;

  const handleDelete = () => {
    deleteVideo({
      variables: { id: _id },
    });
    handleClose();
  };
  return (
    <>
      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete content</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure about deleting this content?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose} className="rounded-1">
            Close
          </Button>
          <Button
            variant="danger"
            className="rounded-1"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
