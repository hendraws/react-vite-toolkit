import React, { useState } from "react";
import { Input, Stack, InputGroup, InputLeftAddon, InputRightAddon, Button, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const addPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div>
      <h1>Add a New Post</h1>
      <form action="">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon children="Title" />
            <Input type="text" placeholder="Title" value={title} onChange={onTitleChanged} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Content" />
            <Input type="text" placeholder="content" value={content} onChange={onContentChanged} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Author" />
            <Select name="" id="" onChange={onAuthorChanged}>
              <option value=""></option>
              {userOptions}
            </Select>
          </InputGroup>
          <Button colorScheme="blue" onClick={onSavePostClicked} disabled={!canSave}>
            Button
          </Button>
          {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        </Stack>
      </form>
    </div>
  );
};

export default addPostForm;
