"use client";

import {
  deleteUserById,
  findUserById,
  modifiedUserById,
} from "@/app/components/user/service/user.service";
import { getUserById } from "@/app/components/user/service/user.slice";
import { PG } from "@/redux/common/enums/PG";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const IdPage = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(getUserById);
  const [modified, setModified] = useState({
    id: user.id,
    username: user.username,
    password: user.password,
    name: user.name,
    phoneNumber: user.phoneNumber,
    address: user.address,
    job: user.job,
  });

  const onModified = () => {
    dispatch(
      modifiedUserById({
        ...user,
        username: modified.username || user.username,
        password: modified.password || user.password,
        name: modified.name || user.name,
        phoneNumber: modified.phoneNumber || user.phoneNumber,
        address: modified.address || user.address,
        job: modified.job || user.job,
      })
    );
    alert("수정이 완료되었습니다.");
    router.push(`${PG.USER}/list`);
  };

  const onDeleted = () => {
    dispatch(deleteUserById(props.params.id));
    alert("삭제되었습니다.");
    router.push(`${PG.USER}/list`);
  };

  useEffect(() => {
    dispatch(findUserById(props.params.id));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <div className="flex flex-col justify-start items-center w-[200px]">
          <div className="justify-center items-center">
            <span>ID</span>
            <TextField
              defaultValue={user.id}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, id: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>아이디</span>
            <TextField
              defaultValue={user.username}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, username: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>비밀번호</span>
            <TextField
              defaultValue={user.password}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, password: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>name</span>
            <TextField
              defaultValue={user.name}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, name: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>phoneNumber</span>
            <TextField
              defaultValue={user.phoneNumber}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, phoneNumber: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>address</span>
            <TextField
              defaultValue={user.address}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, address: e.target.value })
              }
            />
          </div>

          <div className="justify-center items-center">
            <span>job</span>
            <TextField
              defaultValue={user.job}
              variant="standard"
              fullWidth
              onChange={(e: any) =>
                setModified({ ...modified, job: e.target.value })
              }
            />
          </div>

          <div className="flex gap-2 justify-center items-center">
            <Button onClick={onModified}>수정하기</Button>
            <Button onClick={onDeleted}>삭제하기</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdPage;
