"use client";
import Cookies from "js-cookie";
import useFetchUsersData from "../hooks/useFetchUsersData";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Manager = () => {
  const userDataCookie = Cookies.get("userData");
  const parsedUserData = JSON.parse(userDataCookie || "{}");
  const getUsers: any[] = useFetchUsersData(parsedUserData.authToken);
  return (<>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">User name</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUsers.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
};
export default Manager;