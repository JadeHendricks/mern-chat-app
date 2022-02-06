import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/layout";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import { withRouter } from "react-router-dom";

const ChatPage = () => {
  const { user } = ChatState();

  useEffect(() => {
    console.log("Hello");
    const refresh = localStorage.getItem("refresh");
    if (JSON.parse(refresh)) {
      window.location.reload();
      localStorage.removeItem("refresh");
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default withRouter(ChatPage);
