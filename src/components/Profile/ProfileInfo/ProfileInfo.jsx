import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  // debugger;
  return (
    <div>
      <div></div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.contacts.vk}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
