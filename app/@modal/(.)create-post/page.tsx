import Modal from '@/components/Modal';
import PostForm from '@/components/PostForm';

const CreateProjectModal = () => (
  <Modal>
    <h3 className="max-md:text-center w-full md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold">
      Create a new Project
    </h3>
    <PostForm />
  </Modal>
);

export default CreateProjectModal;
