import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// style file
import "./CurrentUser.scss";

// assets
import default_pp from "../../assets/Images/default_pp.png";

// components
import Spinner from "../../components/Spinner/Spinner";

// context (global state)
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import UserContext from "../../context/UserContext";

const CurrentUser = () => {
  // ******* start global state ******* //

  // theme context
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // language context
  const { isEnglish, english, german } = useContext(LanguageContext);
  var language = isEnglish ? english : german;

  // user context
  const { userData } = useContext(UserContext);

  // ******* end global state ******* //
    
    useEffect(() => {
        
    },[userData])

  return (
    <Link to={"/users/" + userData.user.credentials.UserName}>
      <div className='currentUser' style={{backgroundColor: theme.foreground}}>
        <div className='currentUser__userImage'>
          <img
            alt='profile picture'
            src={
              userData.user.credentials.profilePicture
                ? userData.user.credentials.profilePicture
                : default_pp
            }
          />
        </div>
        <div className='currentUser__userName'>
          <h2 style={{color: theme.typoMain}}>{userData.user.credentials.userName}</h2>
                  <p style={{ color: theme.typoSecondary }}>{userData.user.credentials.friendsCount}{' '}{language.userProfile.friends}</p>
        </div>
      </div>
    </Link>
  );
};

export default CurrentUser;
