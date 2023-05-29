import { useDeleteContactsMutation } from 'redux/itemsContact';
import { toast } from 'react-toastify';

export const useDelete = () => {
  const [deleteMaterial, { isLoading }] = useDeleteContactsMutation();

  async function deleteContact(id) {
    const data = await deleteMaterial(id);
    if (data.error) {
      toast.error("Sorry, we couldn't add a new contact");
      return;
    }

    toast.success(`Contact successfully added`);
  }

  return { deleteContact, isLoading };
};
