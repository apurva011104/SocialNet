import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened, followerCount }) => {
  const theme = useMantineTheme();
  const calculatedSize =
    followerCount < 5 ? "55%" :
    followerCount < 10 ? "65%" :
    followerCount < 20 ? "75%" :
    "90%";

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size={calculatedSize}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <FollowersCard location="modal" />
    </Modal>
  );
};

export default FollowersModal;
