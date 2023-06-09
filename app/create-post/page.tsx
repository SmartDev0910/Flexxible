import Modal from '@/components/Modal';
import PostForm from '@/components/PostForm';
import { getCurrentUser } from '@/utils/session';

const CreateProject = async () => {
  const session = await getCurrentUser();

  return (
    <Modal>
      <h3 className="max-md:text-center w-full md:text-[47px] text-[30px] md:leading-[61px] leading-[35px] font-extrabold">
        Create a new Project
      </h3>
      <PostForm session={session} />
    </Modal>
  );
};

export default CreateProject;
