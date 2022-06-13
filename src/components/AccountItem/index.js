import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "~/assets/images";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <Image src={images.avatar} alt="avatar" className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van Hai</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvanhai13</span>
      </div>
    </div>
  );
};

export default AccountItem;
