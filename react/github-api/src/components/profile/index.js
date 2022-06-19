import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/96514967?v=4"
        alt="avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Gabriel Alisson</h1>
          <S.Wrapper>
            <h3>Username:</h3>
            <a href="https://github.com/gans92" rel="noreferrer" target="_blank">gans</a>
          </S.Wrapper>
        </div>
        <S.WrapperStatusCount>
          <div>
            <div>
              <h4>followers</h4>
              <spam>5</spam>
            </div>
            <div>
              <h4>starreds</h4>
              <spam>7</spam>
            </div>
            <div>
              <h4>followings</h4>
              <spam>8</spam>
            </div>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
