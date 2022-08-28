import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import {
  GeneralContainer,
  PrimaryContainer,
  SecondaryContainer,
  TertiaryContainer,
  RegPatrimonyContainer,
  SearchPatrimonyContainer,
  SearchUserContainer,
  ResetUserContainer,
} from "./styled";

import RegPatrimony from "../../components/RegPatrimony";
import { AuthContext } from "../../contexts/auth";
import Patrimony from "../../components/Patrimony";
import UserList from "../../components/UserList";
import axios from "../../services/axios";
import Loading from "../../components/Loading";

export default function Home() {
  const { loading, authenticated, token } = useContext(AuthContext);
  const [loadingPage, setLoadingPage] = useState(true);
  const [patrimonies, setPatrimonies] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const [searchUser, setSearchUser] = useState("");
  const [searchPatrimony, setSearchPatrimony] = useState("");
  const lowerSearchUser = searchUser.toLowerCase();
  const lowerSearchPatrimony = searchPatrimony.toLowerCase();
  const [, idSeached] = location.search.split("?userId=");
  const [totalPatrimonies, setTotalPatrimonies] = useState(0);

  useEffect(() => {
    async function List() {
      const responsePatrimonies = await axios.get(
        `/patrimony/${location.search !== "" ? location.search : ""}`
      );
      const responseUsers = await axios.get("/user");
      setPatrimonies(responsePatrimonies.data);
      setTotalPatrimonies(
        location.search !== ""
          ? totalPatrimonies
          : responsePatrimonies.data.length
      );
      setUsers(responseUsers.data);
      setLoadingPage(false);
    }
    List();
  }, [location.search, totalPatrimonies]);

  const filteredPatrimonies = patrimonies.filter((patrimony) =>
    patrimony.name.toLowerCase().includes(lowerSearchPatrimony)
  );
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(lowerSearchUser)
  );

  return (
    <>
      {loading || loadingPage ? <Loading /> : <></>}

      <GeneralContainer>
        <RegPatrimonyContainer>
          {authenticated ? <RegPatrimony token={token} /> : <></>}
        </RegPatrimonyContainer>
        <PrimaryContainer>
          <div>
            <SearchPatrimonyContainer>
              <label>
                Buscar patrimonio:
                <input
                  placeholder="Nome do pratrimonio"
                  type="text"
                  value={searchPatrimony}
                  onChange={(e) => {
                    setSearchPatrimony(e.target.value);
                  }}
                />
                <button
                  className="btn_backspace"
                  onClick={() => {
                    setSearchPatrimony("");
                  }}
                >
                  <TiDelete fontSize={22} />
                </button>
              </label>
            </SearchPatrimonyContainer>
            <SecondaryContainer>
              {filteredPatrimonies.map((patrimony) => (
                <Patrimony
                  name={patrimony.name}
                  code={patrimony.code}
                  owner={patrimony.owner}
                  ownerId={patrimony.userId}
                  move={true}
                  note={patrimony.note}
                  url={patrimony.url}
                  id={patrimony.id}
                  key={patrimony.id}
                />
              ))}
            </SecondaryContainer>
          </div>
          <TertiaryContainer>
            <SearchUserContainer>
              <label>
                Buscar usuario:
                <input
                  placeholder="Nome do usuario"
                  type="text"
                  value={searchUser}
                  onChange={(e) => {
                    setSearchUser(e.target.value);
                  }}
                />
                <button
                  className="btn_backspace"
                  onClick={() => {
                    setSearchUser("");
                  }}
                >
                  <TiDelete fontSize={22} />
                </button>
              </label>
            </SearchUserContainer>
            <ResetUserContainer
              to={"/"}
              selected={location.search !== "" ? false : true}
            >
              <div>Todos Patrimonios</div>
              <div>
                {totalPatrimonies.toString() !== "0" ? totalPatrimonies : ""}
              </div>
            </ResetUserContainer>

            {filteredUsers.map((user) => (
              <UserList
                key={user.id}
                id={user.id}
                name={user.name}
                patrimonies={user.patrimonies.length}
                isSelected={parseInt(idSeached) === user.id ? true : false}
              />
            ))}
          </TertiaryContainer>
        </PrimaryContainer>
      </GeneralContainer>
      <>space</>
    </>
  );
}
