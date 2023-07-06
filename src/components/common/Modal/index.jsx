import React from "react";
import { Modal, Button } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import "./index.scss";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  uploadPostImage,
  setPostImage,
  postImage,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <textarea
          rows={3}
          cols={3}
          className="modal-input"
          placeholder="What do you want to talk about?"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
        <label htmlFor="pic-upload">
          <AiOutlinePicture size={30} className="picture-icon" />
        </label>
        <input
          id="pic-upload"
          type="file"
          hidden
          onChange={(e) => uploadPostImage(e.target.files[0], setPostImage)}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
