import { Modal } from "@mantine/core";
import { Divider, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type SearchModalProps = {
  opened: boolean;
  close: () => void;
};

function SearchModal({ opened, close }: SearchModalProps) {
  return (
    <Modal opened={opened} onClose={close} size="lg" withCloseButton={false}>
      <TextInput
        variant="unstyled"
        placeholder="search in application"
        size="lg"
        leftSection={<IconSearch size={20} stroke={1.5} />}
      />
      <Divider />
    </Modal>
  );
}

export default SearchModal;
