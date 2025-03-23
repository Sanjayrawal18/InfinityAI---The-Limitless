import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useEffect, useState } from "react";

async function formateResponse(text: string) {
  let formatedResponse = await marked.parse(text)
  let sanitizedResponse = DOMPurify.sanitize(formatedResponse)
  return sanitizedResponse;
}

const ChatItem = ({
  parts,
  role,
}: {
  parts: Array<{ text: string }>;
  role: "user" | "model";
}) => {
  const [chat, setChat] = useState('')
  const modelResponse = async () => {
    const res = await formateResponse(parts[0].text)
    setChat(res)
  }

  useEffect(() => {
    modelResponse()
  }, []);
  
  const auth = useAuth();
  return role === "model" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "rgb(18, 34, 55)", my: 1, gap: 2, borderRadius: 2, }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="infinity.png" alt="InfinityAI" width={"30px"} />
      </Avatar>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: chat}}></div>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2 , my: 1, borderRadius: 1}}>
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white"}}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Typography fontSize={"16px"}>{parts[0].text}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
